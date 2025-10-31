import React, { useState, useCallback, useEffect } from 'react'; // ATTENTION : Ajout de useEffect
import { findInDocument, countDocumentTokens } from './services/geminiService'; 
import { manualContent } from './manual/content'; 

// ----------------------------------------------------------------------
// DÉFINITION GLOBALE : Codes et Noms des langues disponibles
// ----------------------------------------------------------------------
type LangCode = 'fr' | 'en' | 'es' | 'it' | 'zh' | 'de'; 

const availableLangs: Array<{ code: LangCode, name: string }> = [
  { code: 'fr', name: 'FR' }, // Simplifié pour les boutons
  { code: 'en', name: 'EN' }, // Simplifié pour les boutons
  { code: 'es', name: 'ES' }, // Simplifié pour les boutons
  { code: 'it', name: 'IT' }, // Simplifié pour les boutons
  { code: 'de', name: 'DE' }, // Simplifié pour les boutons
  { code: 'zh', name: '中文' }, 
];

// ----------------------------------------------------------------------
// NOUVEAU : Objet de traduction (texts) - INCHANGÉ
// ----------------------------------------------------------------------
// App.tsx (Début du fichier, à remplacer EN ENTIER)

// ----------------------------------------------------------------------
// NOUVEAU : Objet de traduction (texts)
// ----------------------------------------------------------------------
const texts: Record<LangCode, any> = {
  fr: {
    headerTitle: "UVP6 Documentation Instantanée", // MODIFIÉ
    headerSubtitle: "Accès rapide aux informations et caractéristiques techniques UVP6", // MODIFIÉ
    searchLabel: "Posez votre question",
    searchPlaceholder: "Ex: Comment configurer l'adresse IP ?",
    searchButton: "Rechercher",
    resultsTitle: "Résultats",
    errorQuery: "Veuillez poser une question.",
    errorAPI: "Une erreur s'est produite lors de la communication avec l'API. Veuillez réessayer.",
    loading: "Analyse du document...",
    emptyResults: "Les résultats de votre recherche apparaîtront ici.",
  },
  en: {
    headerTitle: "UVP6 Instant Docs", // MODIFIÉ
    headerSubtitle: "Quick access to UVP6 information and technical characteristics", // MODIFIÉ
    searchLabel: "Ask your question",
    searchPlaceholder: "Ex: How to configure the IP address?",
    searchButton: "Search",
    resultsTitle: "Results",
    errorQuery: "Please enter a question.",
    errorAPI: "An error occurred during communication with the API. Please try again.",
    loading: "Analyzing document...",
    emptyResults: "Your search results will appear here.",
  },
  es: {
    headerTitle: "UVP6 Documentación Instantánea", // MODIFIÉ
    headerSubtitle: "Acceso rápido a información y características técnicas de UVP6", // MODIFIÉ
    searchLabel: "Haga su pregunta",
    searchPlaceholder: "Ej: ¿Cómo configurar la dirección IP?",
    searchButton: "Buscar",
    resultsTitle: "Resultados",
    errorQuery: "Por favor, introduzca una pregunta.",
    errorAPI: "Ocurrió un error durante la comunicación con la API. Por favor, inténtelo de nuevo.",
    loading: "Analizando documento...",
    emptyResults: "Los resultados de su búsqueda aparecerán aquí.",
  },
  it: {
    headerTitle: "UVP6 Documentazione Istantanea", // MODIFIÉ
    headerSubtitle: "Accesso rapido alle informazioni e alle caratteristiche tecniche di UVP6", // MODIFIÉ
    searchLabel: "Fai la tua domanda",
    searchPlaceholder: "Es: Come configurare l'indirizzo IP?",
    searchButton: "Cerca",
    resultsTitle: "Risultati",
    errorQuery: "Per favore, inserisci una domanda.",
    errorAPI: "Si è verificato un errore durante la comunicazione con l'API. Per favore, riprova.",
    loading: "Analisi del documento in corso...",
    emptyResults: "I risultati della tua ricerca appariranno qui.",
  },
  de: { 
    headerTitle: "UVP6 Sofort-Dokumentation", // MODIFIÉ
    headerSubtitle: "Schneller Zugriff auf UVP6 Informationen und technische Daten", // MODIFIÉ
    searchLabel: "Stellen Sie Ihre Frage",
    searchPlaceholder: "Bsp: Wie konfiguriere ich die IP-Adresse?",
    searchButton: "Suchen",
    resultsTitle: "Ergebnisse",
    errorQuery: "Bitte stellen Sie eine Frage.",
    errorAPI: "Während der Kommunikation mit der API ist ein Fehler aufgetreten. Bitte versuchen Sie es erneut.",
    loading: "Dokument wird analysiert...",
    emptyResults: "Die Ergebnisse Ihrer Suche werden hier angezeigt.",
  },
  zh: {
    headerTitle: "UVP6 即时文档", // MODIFIÉ
    headerSubtitle: "快速访问 UVP6 信息和技术特性", // MODIFIÉ
    searchLabel: "提出您的问题",
    searchPlaceholder: "例：如何配置IP地址？",
    searchButton: "搜索",
    resultsTitle: "结果",
    errorQuery: "请输入一个问题。",
    errorAPI: "与 API 通信时发生错误。请重试。",
    loading: "正在分析文档...",
    emptyResults: "您的搜索结果将显示在此处。",
  }
};

// App.tsx (Remplacer le composant Header)

// ----------------------------------------------------------------------
// COMPOSANTS
// ----------------------------------------------------------------------
const Header: React.FC<{ lang: LangCode }> = ({ lang }) => (
  <header className="w-full text-center py-6">
    <h1 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">
      {texts[lang].headerTitle}
    </h1>
    {/* RETOUR AU TEXTE CLAIR (text-slate-400) pour le thème sombre */}
    <p className="text-slate-400 mt-2">{texts[lang].headerSubtitle}</p> 
  </header>
);

const SearchIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
  </svg>
);

const LoadingSpinner: React.FC<{ loadingText: string }> = ({ loadingText }) => (
    <div className="flex items-center justify-center pt-8">
        <div className="flex flex-col items-center justify-center space-y-4">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-cyan-400"></div>
            <p className="text-slate-400">{loadingText}</p> 
        </div>
    </div>
);

// ----------------------------------------------------------------------
// APPLICATION PRINCIPALE
// ----------------------------------------------------------------------
export default function App() {
  const [documentation] = useState<string>(manualContent);
  const [query, setQuery] = useState<string>('');
  const [results, setResults] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
    
  const [lang, setLang] = useState<LangCode>('fr');
  const t = texts[lang]; 

  // NOUVEAU : Hook pour compter les tokens au chargement (Affichage dans la console uniquement)
  useEffect(() => {
    countDocumentTokens(documentation).then(count => {
        console.info("===============================================================");
        console.info(`Taille actuelle de la documentation : ${count.toLocaleString()} tokens`);
        console.info("Limite du modèle (gemini-2.5-flash) : 1,000,000 tokens");
        console.info("===============================================================");
    });
  }, [documentation]);


  const handleSearch = useCallback(async () => {
      if (!query.trim()) {
          setError(t.errorQuery); 
          return;
      }
      setIsLoading(true);
      setError(null);
      setResults('');

      try {
          const response = await findInDocument(documentation, query, lang); 
          setResults(response);
      } catch (err) {
          const errorMessage = err instanceof Error ? err.message : t.errorAPI;
          setError(errorMessage); 
          console.error(err);
      } finally {
          setIsLoading(false);
      }
  }, [query, documentation, lang, t.errorQuery, t.errorAPI]);

  // Définition de la classe de bouton pour la langue
  const getLangButtonClass = (code: LangCode) => 
    `px-2 py-1 mx-0.5 text-xs font-semibold rounded-md transition duration-150 ease-in-out ${
      code === lang
        ? 'bg-indigo-600 text-white shadow-lg' // Langue sélectionnée
        : 'bg-slate-700 text-slate-300 hover:bg-slate-600' // Autres langues
    }`;

  return (
    // CONTENEUR PRINCIPAL : Thème Sombre (Dark Mode)
    <div className="relative min-h-screen bg-slate-900">
        
      {/* 1. Le conteneur du fond d'écran filigrane (FILIGRANE) */}
      <div 
          className="absolute inset-0 bg-contain bg-center bg-no-repeat" 
          style={{ 
              backgroundImage: "url('/uvp-background.png')", 
              opacity: 0.15, // Opacité réduite pour le fond sombre
              filter: 'grayscale(100%)', // Monochrome
          }}
      />

      {/* 2. Le conteneur du contenu (au-dessus du filigrane) */}
      <div className="relative z-10 min-h-screen flex flex-col items-center p-4 md:p-8">
          
          {/* Header */}
          <Header lang={lang} /> 
          
          {/* MAIN : Contenu principal (Largeur max-w-6xl et texte blanc) */}
          <main className="w-full max-w-6xl flex flex-col gap-8 mt-8 text-white"> 
              
              {/* BOUTONS DE LANGUE STATIQUES */}
              <div className="w-full text-right flex justify-end space-x-1">
                  {availableLangs.map((l) => (
                      <button
                          key={l.code}
                          onClick={() => setLang(l.code)}
                          className={getLangButtonClass(l.code)}
                          aria-label={`Sélectionner la langue ${l.name}`}
                      >
                          {l.name}
                      </button>
                  ))}
              </div>
              
              {/* Conteneur de la Recherche et des Résultats : Thème Sombre */}
              <div className="w-full p-6 bg-slate-800/50 border border-slate-700 rounded-lg flex flex-col space-y-4">
                  
                  <div className="flex flex-col space-y-3">
                      <label htmlFor="search-query" className="text-lg font-semibold text-slate-300">
                          {t.searchLabel}
                      </label>
                      <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-2">
                          <input
                              id="search-query"
                              type="text"
                              value={query}
                              onChange={(e) => setQuery(e.target.value)}
                              onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
                              placeholder={t.searchPlaceholder} 
                              // Input : Thème Sombre
                              className="flex-grow p-3 bg-slate-800 border border-slate-700 text-white rounded-lg focus:ring-2 focus:ring-indigo-500 focus:outline-none transition duration-200"
                              aria-label={t.searchLabel} 
                          />
                          <button
                              onClick={handleSearch}
                              disabled={!query.trim() || isLoading}
                              // Bouton de recherche : Thème Sombre (Texte blanc, bon contraste)
                              className="flex items-center justify-center px-6 py-3 bg-indigo-600 rounded-lg font-semibold hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-slate-900 focus:ring-indigo-500 transition duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                              aria-label={t.searchButton} 
                          >
                              <SearchIcon className="h-5 w-5 mr-2" />
                              {t.searchButton} 
                          </button>
                      </div>
                  </div>

                  <div className="flex flex-col space-y-3">
                      <h3 className="text-lg font-semibold text-slate-300">{t.resultsTitle}</h3> 
                      <div className="w-full min-h-[24rem] p-4 bg-slate-900/70 border border-slate-700 rounded-lg overflow-y-auto">
                          {isLoading ? (
                              <LoadingSpinner loadingText={t.loading} />
                          ) : error ? (
                              <div className="text-red-400 p-4 bg-red-900/20 rounded-lg">{error}</div>
                          ) : results ? (
                              <div className="text-slate-300 whitespace-pre-wrap leading-relaxed prose prose-invert max-w-none">{results}</div>
                          ) : (
                              <div className="text-slate-500 text-center pt-8">
                                  {t.emptyResults} 
                              </div>
                          )}
                      </div>
                  </div>
              </div>
          </main>
      </div>
    </div>
  );
}
