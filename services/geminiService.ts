import { GoogleGenAI } from "@google/genai";

// ----------------------------------------------------------------------
// DÉFINITION GLOBALE : Codes de langue et d'accès API
// ----------------------------------------------------------------------
type LangCode = 'fr' | 'en' | 'es' | 'it' | 'zh' | 'de';

// Règle API pour Vite
const API_KEY = import.meta.env.VITE_API_KEY;

let ai: GoogleGenAI | null = null;

// Initialise l'API uniquement si la clé a bien été trouvée.
if (API_KEY) {
  ai = new GoogleGenAI({ apiKey: API_KEY });
} else {
  console.error("ERREUR CRITIQUE: La clé API Gemini est manquante. Assurez-vous qu'une variable d'environnement nommée VITE_API_KEY est bien définie sur Vercel.");
}

// ----------------------------------------------------------------------
// LOGIQUE DE TRADUCTION & ERREURS
// ----------------------------------------------------------------------

// Fonction pour obtenir le nom de la langue en anglais (pour le modèle Gemini)
const getModelLangName = (code: LangCode) => {
    switch (code) {
        case 'fr': return 'French';
        case 'en': return 'English';
        case 'es': return 'Spanish';
        case 'it': return 'Italian';
        case 'de': return 'German';
        case 'zh': return 'Chinese';
        default: return 'French';
    }
}

// Messages d'erreur génériques pour le "throw new Error"
const genericErrorMessages: Record<LangCode, string> = {
    fr: "Une erreur s'est produite lors de la communication avec l'API. Veuillez réessayer.",
    en: "An error occurred during communication with the API. Please try again.",
    es: "Ocurrió un error durante la comunicación con la API. Por favor, inténtelo de nuevo.",
    it: "Si è verificato un errore durante la comunicazione con l'API. Per favore, riprova.",
    de: "Während der Kommunikation mit der API ist ein Fehler aufgetreten. Bitte versuchen Sie es erneut.",
    zh: "与 API 通信时发生错误。请重试。",
};

// Messages d'erreur critiques (API non valide, etc.)
const criticalErrorMessages: Record<LangCode, string> = {
    fr: "Erreur de communication : La clé API fournie n'est pas valide ou n'a pas les permissions nécessaires. Vérifiez la configuration sur Vercel et Google Cloud.",
    en: "Communication Error: The provided API key is not valid or does not have the necessary permissions. Check the configuration on Vercel and Google Cloud.",
    es: "Error de comunicación: La clave API proporcionada no es válida o no tiene los permisos necesarios. Verifique la configuración en Vercel y Google Cloud.",
    it: "Errore di comunicazione: La chiave API fornita non è valida o non dispone delle autorizzazioni necessarie. Controlla la configurazione su Vercel e Google Cloud.",
    de: "Kommunikationsfehler: Der bereitgestellte API-Schlüssel ist ungültig oder verfügt nicht über die erforderlichen Berechtigungen. Überprüfen Sie die Konfiguration auf Vercel und Google Cloud.",
    zh: "通信错误：提供的 API 密钥无效或没有必要的权限。请检查 Vercel 和 Google Cloud 上的配置。",
};


// ----------------------------------------------------------------------
// FONCTION PRINCIPALE DE RECHERCHE
// ----------------------------------------------------------------------
export async function findInDocument(document: string, query: string, lang: LangCode): Promise<string> {
  
  const modelLang = getModelLangName(lang);

  if (!ai) {
    throw new Error(genericErrorMessages[lang]);
  }

  const model = 'gemini-2.5-flash';
  
  // Le Prompt Système avec la langue de réponse dynamique et la règle de citation
  const systemInstruction = `You are an intelligent assistant specialized in the analysis of technical documentation. 
Your task is to answer user questions based *only* on the provided documentation context. 
Find all relevant sections, concepts, and code snippets that answer the user's question. 
Synthesize this information into a clear and complete answer. 
 
**CRITICAL CITATION INSTRUCTION :** The documentation is divided into several manuals identified by clear tags (e.g., "## DEBUT DOCUMENT X : TITRE DU MANUEL ##").
**You MUST mention the MANUAL TITLE in your answer so the user knows the source of the information.**
To do this, end each point or the entire answer by adding the source in parentheses, for example: **(Source: MANUAL TITLE)**.

If the answer is not found in the document, explicitly state that the information is not present. 
Do not use any external knowledge. 
Your response language MUST be in ${modelLang}.`;

  const contents = `
    Here is the documentation:
    ---
    ${document}
    ---

    Here is the user's question:
    ---
    ${query}
    ---

    Provide the response based on the documentation.
  `;

  try {
    const response = await ai.models.generateContent({
      model: model,
      contents: contents,
      config: {
        systemInstruction: systemInstruction,
      },
    });
    return response.text;
  } catch (error) {
    console.error("Error calling Gemini API:", error);
    
    if (error instanceof Error && (error.message.includes('API key not valid') || error.message.includes('permission'))) {
        throw new Error(criticalErrorMessages[lang]); 
    }
    
    throw new Error(genericErrorMessages[lang]);
  }
}

// ----------------------------------------------------------------------
// NOUVELLE FONCTION : DÉCOMPTE DE TOKENS (pour usage interne)
// ----------------------------------------------------------------------

/**
 * Compte le nombre de tokens dans une chaîne de caractères donnée
 * @param content La chaîne de documentation à compter
 * @returns Le nombre de tokens
 */
export async function countDocumentTokens(content: string): Promise<number> {
    if (!ai) {
        console.warn("API AI non initialisée pour le décompte de tokens. Retourne 0.");
        return 0;
    }

    try {
        const response = await ai.models.countTokens({
            model: 'gemini-2.5-flash', 
            contents: [{ role: 'user', parts: [{ text: content }] }],
        });
        
        return response.totalTokens;
    } catch (error) {
        console.error("Erreur lors du décompte des tokens de la documentation:", error);
        return 0;
    }
}
