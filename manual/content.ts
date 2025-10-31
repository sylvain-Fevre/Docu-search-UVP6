// =======================================================================
// INSTRUCTION IMPORTANTE
// =======================================================================
// Copiez et collez ici le contenu COMPLET de votre manuel technique.
// Le texte doit être au format brut (plain text).
// Vous pouvez convertir votre PDF ou DOCX en texte brut en utilisant
// un convertisseur en ligne ou en faisant un copier-coller.
// Remplacez simplement le texte d'exemple ci-dessous par le vôtre.
// =======================================================================
export const manualContent = String.raw`
Guide for UVP6 And UVPapp piloting application.
Contents
1	WARNING and MAIN RECOMMENDATIONS	6
1.1	Hydroptic and Laboratoire d'Océanographie de Villefranche responsibilities	6
1.2	Training courses	6
1.3	Mass memory and downloading issues	6
1.4	UVPapp and firmware versions	6
1.5	Optical alignment	7
1.6	Camera to light cable	7
1.7	Sun light protection	7
1.8	Prevention of connector corrosion	7
1.9	Light unit care	7
1.10	Black cap Porthole protection	8
1.11	Efficiency in turbid water (over exposed)	8
1.12	Remaining water	9
2	SENSOR DESCRIPTION	9
2.1	The UVP6	9
2.2	Communication	10
2.3	Operation modes	10
2.4	Computing the mean power consumption and autonomy of the UVP6 running on battery	11
2.4.1	UVP6HF	11
2.4.2	UVP6LP	11
2.5	Battery	12
2.6	Typical flash sequence	12
2.7	Black images	12
2.8	File safe system	13
2.9	Internal mass storage management	13
3	TYPICAL SEQUENCE OF OPERATIONS	13
3.1	At cruise level	13
3.2	At deployment level	13
3.3	On a daily / regular basis	13
3.4	End of cruise	14
3.5	UVPapp data processing steps	14
4	GUIDE FOR DIFFERENT USAGES OF THE UVP6	14
4.1	Using the UVP6HF for vertical profiles (associated with CTD)	14
4.1.1	UVP6 installation	14
4.1.2	UVP6 cabling	16
4.1.3	UVP6HF deployment in CTD mode	18
4.1.4	UVP6HF programming in CTD mode using UVPapp	19
4.1.5	UVP6HF deployment in AUTO mode (vertical profiles)	20
4.1.6	UVP6HF programming in AUTO mode using UVPapp	20
4.2	Using the UVP6LP on a NKE CTS5 float	21
4.3	Using the UVP6LP on gliders	22
4.3.1	Using the UVP6LP on a SeaExplorer glider	23
4.3.2	Using the UVP6LP on a Seaglider glider managed by the CSCS company	26
4.4	Using the UVP6LP on a mooring/lander	26
4.4.1	UVP6 cabling	26
4.4.2	Programming the UVP6 in AUTO mode	27
4.4.3	Programming the UVP6 in TIME mode	27
4.5	Using the UVP6 as a remote camera	29
4.5.1	Cabling	29
4.5.2	UVP6 running in Livecamera mode	29
4.6	Using the UVP6 on smart platforms (SUPERVISED mode)	30
4.6.1	Cabling	30
4.6.2	Programming the UVP6 in SUPERVISED mode	30
4.7	UVP6 parameterization (piloting) and data download	31
4.7.1	Cabling	31
4.7.2	Using the battery	31
4.7.3	Using the AC power	31
5	UVPapp general information	32
5.1	Computer configuration	32
5.2	Link with EcoPART and EcoTAXA	32
5.3	Versioning and resources	33
5.4	Login	33
5.5	Main page description	33
5.5.1	Sequence area displayed	33
5.5.2	Sample area displayed	34
5.5.3	UVP6 dashboard	34
5.5.4	Background task monitoring	35
5.5.5	Project dashboard	35
5.5.6	Activity dashboard	35
5.5.7	Sample/Sequence management	35
5.6	UVPapp menus	37
5.6.1	File drop-down menu	37
5.6.2	Project drop-down menu	37
5.6.3	Sensor control drop-down menu	43
5.6.4	Data drop-down menu	45
5.6.5	Help and application settings	46
6	MAINTENANCE	48
6.1	In case of flooding suspicion	48
6.2	Inter calibration	48
6.3	Connector maintenance	49
6.4	75Wh Battery (optional for LP instruments)	49
6.5	Battery voltage measurements	49
6.6	Battery charge	49
6.7	Instrument storage and transport	50
7	SPECIFICATIONS	50
7.1	UVP6-LP	50
7.2	UVP6-HF	50
7.3	Standard battery (HYDRPTIC)	50
8	ANNEXE	51
8.1	Regulations	51
8.1.1	HS code	51
8.2	Data downloaded files	51
8.3	RS232 commands for SUPERVISED mode of operation	52
8.3.1	General procedure in SUPERVISED mode	52
8.3.2	Pre-deployments	52
8.3.3	Acquisition commands	53
8.3.4	Other useful commands in USER mode	53
8.3.5	HWconf metadata frame (UVP6 size classes)	54
8.3.6	ACQconf metadata frame	55
8.3.7	Data frames	56
8.4	Instrument dimensions	60
8.4.1	UVP6 Dimensions	60
8.4.2	UVP6 protective Frames	60
8.5	Connector pin configuration on the UVP6 camera	61
8.5.1	DATA, ANALOGUE and POWER (MCBH8M)	61
8.5.2	LIGHT and I/O (MCBH4M)	61
8.5.3	Internal camera cabling	62
8.6	Battery for long deployments	62
8.7	Instrument delivery contents (from Hydroptic)	62
8.7.1	Shipping cardbox:	62
8.7.2	PELICASE	62
1	WARNING and MAIN RECOMMENDATIONS
1.1	Responsabilités Hydroptic et Laboratoire d'Océanographie de Villefranche
Le LOV (CNRS - Sorbonne Université) a développé le capteur UVP6-LP (Low Power) dans le cadre du 
projet européen BRIDGES, auquel Hydroptic a participé. 
Grâce au projet français GOPPI, ils ont également conçu le UVP6-HF (High Frequency) et l'application 
UVPapp.
Hydroptic commercialise le UVP6 sous licence CNRS - Sorbonne Université.
L'application UVPapp est fournie gratuitement. Elle permet le pilotage de l'instrument, le téléchar-
gement, la visualisation et l'export des données. 
Elle facilite aussi l'importation dans les applications EcoPART et EcoTAXA, maintenues gratuitement 
par le LOV. UVPapp simplifie également la programmation du UVP6 pour des vecteurs spécifiques, 
tels que le glider SeaExplorer d'Alseamar.
Tous les outils supplémentaires développés par le LOV (outils Matlab pour gliders et flot-
teurs, disponibles sur GitHub) sont open source et fournis sans assistance, sous licence GPL-
3.0 : 
https://www.gnu.org/licenses/gpl-3.0.en.html. Ces outils ont démontré leur efficacité : ils ont 
permis au LOV de traiter plus de 6000 profils de gliders et d'exploiter des jeux de données de 
flotteurs BGC-ARGO. 
Ils permettent également de reconstituer des échantillons journaliers à partir d'instruments 
mouillés avant leur importation dans EcoPART et EcoTAXA.
Le pilotage des gliders, flotteurs ou tout autre vecteur embarquant un UVP6 n'entre pas dans 
la responsabilité d'Hydroptic ni du LOV, même si une assistance peut être fournie.
1.2	Formations
La Plateforme d'Imagerie de Villefranche-sur-Mer (PIQv) propose des formations. 
Les utilisateurs intéressés sont invités à s'inscrire directement sur le site web correspondant.
1.3	Mémoire de masse et problèmes de téléchargement
Quelques défaillances de la mémoire SD interne ont été signalées. 
Elles surviennent généralement lors de tentatives de téléchargement après un déploiement 
long ayant généré des centaines de milliers de vignettes. La cause probable est une chute de 
tension provoquée lorsque l'utilisateur lance la commande Get File List dans UVPapp. 
Conséquence : les données et images deviennent inaccessibles, même si les autres fonctions 
(par ex. LiveCamera) continuent de fonctionner. 
En cas de suspicion, contacter Hydroptic.
Pour éviter ce problème, ne jamais couper l'alimentation pendant l'exécution de la commande "Get 
File List" 
 attendre la fin complète de la tâche et l'affichage de la liste des séquences. 
En cas de doute, laisser l'instrument sous tension et demander assistance à Hydroptic.
1.4	Versions UVPapp et du firmware
Ce manuel s'applique aux versions UVPapp = 2.30.
Il est compatible avec les UVP6-LP et UVP6-HF.
Si UVPapp signale une incompatibilité du firmware, contacter Hydroptic ou la PIQv pour mise à 
jour de l'instrument, ou utiliser UVPapp 1.02.
Un firmware spécifique est requis pour les flotteurs NKE CTS5 ou lorsque la classification embar-
quée des images est activée.
Ce firmware ne peut être installé que par Hydroptic ou la PIQv.
L'application UVPapp n'est pas compatible avec ce firmware 
 un terminal spécifique OctOs est 
alors nécessaire.
1.5	Alignement optique
Le bras reliant la caméra au module de lumière ne doit jamais être démonté. 
Toute déconnexion entraîne la perte de l'alignement optique et de la calibration, nécessitant le re-
tour de l'instrument pour réglage et inter-étalonnage.
1.6	Cable camera-source lumineuse
Ne jamais débrancher le câble éclairage lorsque l'instrument est sous tension (batterie ou câble 
data/octopus). 
Une telle manipulation annule la garantie et peut endommager les cartes électroniques. 
1.7	Protection contre la lumière solaire
Ne jamais exposer l'instrument directement au soleil. 
Une exposition prolongée peut élever la température interne au-delà des limites admissibles et en-
dommager les optiques.
1.8	Prevention of connector corrosion
Il est obligatoire de suivre les recommandations suivantes : 
une légère corrosion peut entraîner des dysfonctionnements. 
Un petit pot de Molykote 44 est fourni avec l'instrument. 
Consulter les recommandations complètes de SUBCONN.
See SUBCONN complete recommendations
1.9	Light unit care
Even if rated and tested for 6000m use, the camera porthole and the glass cylinders of the light unit 
are fragile. Extreme care must be applied to prevent any scratch or shock on these units. The light 
must be protected with its socket whenever the UVP6 is not in use. The socket prevents scratches on 
the glass and optics protection against U.V. If you suspect any damage, stop using UVP and contact 
Hydroptic.
DANGER : RED LASER DIODE
The light unit emits red light via a laser diode rated class IV. Avoid eye exposure to direct or scattered 
radiation.
1.10	Black cap Porthole protection
The porthole cap must be on when the UVP6 is not in use. The cap is attached with the Light socket 
to not forget to remove both protections before deploying the UVP6. 
1.11	Efficiency in turbid water (over exposed)
Since the UVP6 is an imaging sensor, turbid water can lead to malfunction and biased results, trans-
lated into wrong number or size of objects and/or empty images. This behaviour appears with in-
creasing particle load or turbidity. Two experiments conducted with seabed mud and phytoplankton 
cultures at Laboratoire d'Océanographie de Villefranche sur mer indicated that the UVP6 results 
were correct under the values indicated in the table below.
Limit for normal use of UVP6
Turbidity type
mud
phytoplankton
Transmittance
45%
20%
BBp700 m-1
0.03
0.02
NTU
2.5
2
This type of vignettes indicates that the turbidity is too high for a good functioning of the instrument: 
The "OVER_EXPOSED" indications in the sampleId_data.txt files also indicate that the image is prob-
bly saturated and could not be processed.
20230707-134750-2,17.64,20.44,1:OVER_EXPOSED,7.3%
1.12	Remaining water
It is normal to observe some water in the volume between the glass porthole of the camera and its 
greige retainer ring. This volume is connected with the outside by tiny holes and can be easily flushed 
with some air.
2	SENSOR DESCRIPTION
2.1	The UVP6
The UVP6 consists of a main camera containing a motherboard with a supervising processor, a mez-
zanine image processor unit, an image sensor board, a lens and a passband filter centred on 630 nm 
wavelength and an optional pressure sensor necessary when the hosting vector cannot provide the 
pressure information to the UVP6. The light unit contains a controlling board, a laser diode and 
lenses. It is attached at a fixed distance of the camera using a connecting arm.
There are two versions of the UVP6:
?	The UVP6LP (Low Power) recommended for most application except CTD and fast AUVs
?	The UVP6HF (High Frequency), recommended for CTD and fast AUVs
2.2	Communication
The UVP6 communicates with the UVPapp application or any specifically designed software using the 
RS232 link.
The images and data will be downloaded using the Ethernet link which is activated only on purpose 
by UVPapp. This Ethernet connexion also requires the RS232 link.
The UVP6HF also provides an analogue output to be connected on the CTD input if necessary. This 
output is not always activated on the UVP6LP. Contact Hydroptic to know if your UVP6LP analogue 
output is activated.
2.3	Operation modes
The UVP6 has four main types of configuration settings: AUTO, TIME, SUPERVISED, and REMOTE 
CAMERA, the characteristics of which are summarised in Table 2. The four settings correspond to 
four types of deployments, on different vectors.  The settings are based on a main HW configuration 
table, ten acquisition tables, and an optional timetable. The HW table contains mainly the instrument 
configuration (serial numbers of the camera and light...), the main setup, the parameters issued from 
the tuning and inter-calibration and some functioning settings related to its configuration. The acqui-
sition tables contain the acquisition parameters including the image rate or the triggering method. 
The timetable permits the selection of an acquisition table for period of 30 minutes of the deploy-
ment when the sensor is utilised in TIME mode. 
There are many options to allow all interfacing and usage possibilities from very basic start using the 
power source up to individual image triggering.
Additional documents related to the SUPERVISED piloting of the UVP6 and for the glider integration 
can be provided on demand.
Main setup
Options
Deployment type
Hosting vector
AUTO 
UVP6 starts when powered ON, use 
preset acquisition parameters
CTD (UVP6-HF only) 
UVP6 uses pressure to automatically 
start and stop acquisition
Vertical profiles, analog output 
available
CTD profilers
AUTO 
UVP6 starts after a preset delay, stops 
when OFF
Any vector only capable to 
Power UVP ON and OFF
Gliders 
AUVs 
ROVs 
Short term moor-
ings, landers...
TIME 
UVP6 starts acquisition according to 
a timetable loaded in the instru-
ment
TIME 
UVP6 starts after a preset delay and 
check for programming every 30 min to 
start acquisition using up to 10 sets of 
parameters
Long term deployments (week-
years)
Medium and long 
term moorings, 
landers...
SUPERVISED 
UVP6 waits for the hosting vector to 
start acquisition sending a RS232 
command to select the acquisition 
parameters
CONTINUOUS 
UVP6 acquires images at its preset 
frequency
Any vector capable to 
send/receive RS232 commands
Gliders (SeaEx-
plorer, SeaGlider) 
Floats 
AUVs 
ROVs 
Cabled observato-
ries
PILOTED 
UVP6 acquires images when triggered 
by the vector
Any vector capable to 
send/receive RS232 "frequent" 
commands to trigger images
Floats (NKE CTS5-
USEA) 
Cabled observato-
ries
REMOTE CAMERA
REMOTE CAMERA
Remote camera without image 
analysis through RS232 and 
ETHERNET (>100MB)
Experimental and 
connected station
2.4	Computing the mean power consumption and autonomy of the UVP6 running on battery

EQUATIONS to process the autonomy, adjust the frequence
and evaluate the per hour sampled volume for UVP6LP

UVP6 power computing (LP) for Frequency < 0.8 Hz:
- Image acquisition and process : P_on [W] = 0.8
- Sleep (between images) : P_sleep [W] = 0.02
- Image acquisition duration : T_on [sec] = 0.7
- Frequency : F [Hz]
- Battery capacity : B_capacity [Wh] = 75 / 1700
- Single image volume : V_image [L] = 0.6
- Mean power : P_mean [W]

T_off [sec] = 1/F - T_on

P_mean [W] = F x [ (P_on x T_on) + P_sleep x T_off ]

Theoretical autonomy [h] = B_capacity / P_mean

Sampled vol [L/h] = V_image x F x 3600
2.4.1	UVP6HF
The UVP6HF drains 6 W when in acquisition and 0.02 W in between sequences. It will drain about 2 
W during the 14 s required for booting. A brief maximum power of 30W is requested to charge the 
internal capacitance just when powering ON the UVP6.
2.4.2	UVP6LP
The UVP6LP drains 0.8 W when acquiring and processing images and 0.02 W in between. The typical 
duration of an image acquisition and process is 0.75 s. The mean power consumption is thus com-
puted according to the image rate of the instrument. Saving full images instead of vignettes will add 
about 0.6 s to the image acquisition and process.
Examples of computing the mean power in Watt for frequency under 0.8Hz.
?	typical acquisition at 0.1 Hz saving vignettes : (0.8 x 0.75 + 0.02 x (10-0.75))/10 = 0.08 W
?	typical acquisition at 0.2 Hz saving vignettes : (0.8 x 0.75 + 0.02 x (5-0.75))/5 = 0.14 W
?	typical acquisition at 0.5 Hz saving vignettes : (0.8 x 0.75 + 0.02 x (2-0.75))/2 = 0.32 W
The power is always 0.8W above 0.8Hz.
2.5	Battery
An optional battery (75Wh/21.6V) can be provided with the UVP6. It permits medium range opera-
tions of both UVP6-LP and UVP6-HF instruments. The battery is equipped with a relief valve, allowing 
it to be charged without opening the housing.
The housing can anyhow be easily opened for fast replacement of the battery or if needed for plane 
transportation. The opening is anyhow made at user risk.
In order to keep the battery autonomy, it is recommended to recharge the battery when it is less 
than 50% of its nominal capacity.
The battery provides more than 10 hours (@25°C) recording with UVP6HF while the duration of the 
operations with UVP6LP depends on its programming (image rate mainly) and can extend to one 
month.
This optional battery can be transported in cabin luggage without any limitations.
2.6	Typical flash sequence
The UVP6 sensor sends a series of 3 flashes of 1 sec approximately when the acquisition starts or 
when the AUTOCHECK test is successfully completed. The observation of these 3 flashes when the 
UVP6 is supposed to start to acquire data means that the instrument is ready and functional. 
Note that the 3 flashes will be displayed after a maximum delay of 2 seconds for the UVP6-LP and 15 
seconds for the UVP6HF sensor. The image flashes will then start either immediately or later when a 
delay is set in AUTO mode or the start pressure passed in CTD mode.
2.7	Black images
Black images are images acquired at regular intervals without activating the light of the UVP6. They 
permit measuring the instrument noise and to detect the images which are not influenced by the 
sunlight at the surface (UVP6LP before 2022 only). The frequency of the black images is automati-
cally set or default values proposed when programming the instrument for most modes.
An interval of 50 is recommended for all types of UVP6 (LP and HF) after 2022.
An interval of 10 is recommended at low depths (above 100m) and 40 deeper for UVP6LP before 
2022.
2.8	File safe system
The UVP6 has a storage capacitance which is charged when the instrument is powered. This backup 
power allows the instrument to complete the ongoing image cycle when the power is removed and 
to safely store the image data. This capacitance is charged when the instrument is powered ON 
draining more power than the typical power of the instrument. This capacitance is not able to keep 
maintaining the system during the "Get file list" operation. This is the reason why we do recommend 
to not power off the instrument during this operation.
2.9	Internal mass storage management
The UVP6 is fitted with more than 400GB of mass storage. 10GB or 5GB are by default reserved for 
data storage while the remaining space is used to host images. The data storage is thus never limited 
in usual utilisation. In case the image storage is full, the instrument will continue acquiring and pro-
cessing images but only data files will be saved in the 10-5GB section.
380GB memory allows to record about 80 000 full images when this option is selected while there is 
almost no limit for the vignette storage.
An optional 1TB mass storage can be provided to extend the instrument autonomy when storing full 
images for specific uses.
3	TYPICAL SEQUENCE OF OPERATIONS
This typical sequence of operation is common to all UVP6 usages. Refer to the dedicated chapter of 
this guide to learn how to proceed for each step.
3.1	At cruise level
?	Instrument mounting in its frame or on its hosting platform
?	Instrument connection to Power (AC or battery) and UVPapp
o	Instrument programming according to the type of deployment
o	Time synchronisation
o	Delete data to empty the memory
o	Autocheck
3.2	At deployment level
In case of successive profiles in CTD modes, the battery must be disconnected from the UVP be-
tween profiles (see below).
?	Charge battery (if applicable)
?	Time synchronisation
?	Porthole and light cleaning
?	Deployment (power ON or power piloted by the hosting vector)
?	Recovery (power OFF or power piloted by the hosting vector)
?	Rinsing with fresh water
3.3	On a daily / regular basis
?	Measure the voltage of the battery (if applicable)
?	Data download
?	Merge sequences (if applicable)
?	Sample creation (metadata filling)
?	Sample process and data Quality Control
?	Data backup
?	Delete data in instrument (if necessary)
?	Charge battery (if applicable)
3.4	End of cruise
?	Instrument removing from host vector or frame (never disassemble camera from arm)
?	Instrument cleaning and packing
3.5	UVPapp data processing steps
The data processing steps are listed below as a reminder. The data cannot be processed without fill-
ing the metadata first.
?	Download data
?	Merge sequences (if necessary)
?	Fill in sample metadata
?	Process data
?	Process images
?	Export to ODV (optional) and import into ODV
?	View vignettes (optional)
?	Load on the EcoPART FTP and import in EcoPART and EcoTAXA for image classification
4	GUIDE FOR DIFFERENT USAGES OF THE UVP6
Here we describe the specific usage and programming of the UVP6 sensor to perform deployments 
at sea. 
4.1	Using the UVP6HF for vertical profiles (associated with CTD)
The UVP6HF is equipped with a pressure sensor and designed for vertical deployment at high speeds 
(1-2 m.s-1) associated with CTD or other optical frames.
The typical Hydroptic 75 Wh battery enables an easy operation of the system for casts down to 
6000M at the highest acquisition rate thanks to the provided autonomy.
The UVP6 has a huge data storage capacity, allowing it to record tens of profiles without download-
ing the data. 
The UVP6LP (low power), if fitted with a pressure sensor, can also be utilised in CTD mode for profil-
ing but its relatively low (1.3 Hz) acquisition rate prevents acquiring sufficient data for reliable re-
sults.
4.1.1	UVP6 installation
The UVP6 will be mounted in the CTD frame using the specific mounting kit designed for SBE32 car-
ousel and SBE9+ systems. The positioning will be carefully studied to avoid having any structure in 
the field of view of the camera and to prevent damaging the UVP6 connectors with the NISKIN bot-
tles. The installation of the UVP6 in a 12 bottle frame requires one bottle above the UVP6 to be 
shorter than the others.
4.1.1.1	Mounting in a 24 bottles carousel (SBE32)
The UVP6 camera will be set behind the bottles. It is recommended to place the other optical sensors 
of the CTD in the opposite side of the CTD frame to avoid perturbations from the UVP6 red light.
4.1.1.2	Mounting in a 12 bottles carousel (SBE32)
The UVP6 camera will be set below one bottle. This bottle must be shorter than the other bottles 
to give space to the UVP6 connectors. 
It is recommended to place the other optical sensors of the CTD on the opposite side of the CTD 
frame to avoid perturbations from the UVP6 red light.
The bottom end cap of the UVP6 light unit must be as close as possible to the deck level (2-3 cm 
above only).
4.1.1.3	Control of the position of the UVP6
It is mandatory to download and check the images of the first profile for artefacts which could be 
due to a bad positioning of the instrument.
In case you see artefacts (part of the CTD frame) on the images, just change (rotate or descend) the 
position of the UVP6 till you never get such artefacts.
Example of a vignette focusing on the CTD stainless steel frame
In case you do not perform this check and observe the default afterward, the recorded data and 
images will not be usable at all.
4.1.2	UVP6 cabling
The sensor will be powered via the specific Y cable which connects to the battery.
An optional analogue cable allows the UVP6 to transmit the particle abundance converted as a 0-
5vdc signal and to visualize it on the CTD remote graphical interface.
4.1.2.1	On deck standby between profiles
The battery is disconnected.
In case the analogue output is not connected to the CTD input.
In case the analogue output is connected to the CTD input
4.1.2.2	Battery charge
The battery is directly connected to the charger. 
Note that the battery can easily be removed from its support and charged in the lab. or exchanged 
with another unit.
In case the analogue output is not connected to the CTD input.
In case the analogue output is connected to the CTD input
4.1.2.3	Deployment
In case the analogue output is not connected to the CTD input.
In case the analogue output is connected to the CTD input
4.1.2.4	Data recovery and UVP6 programming
4.1.3	UVP6HF deployment in CTD mode
4.1.3.1	Battery autonomy in CTD mode
The standard Hydroptic battery allows recording data during more than 5 hours which corresponds 
to 2 times the descents down to 6000m or 12 profiles down to 1000m at 1m/s each. It is anyhow 
recommended to check and record the battery voltage between the profiles using a voltmeter or 
the dashboard of the UVPapp.
In order to facilitate the battery maintenance during long consecutive casts, it can be very useful to 
use two batteries, one being in charge whilst the second is in operation on the CTD-rosette.
4.1.3.2	Procedure
The UVP6HF will generally be deployed with the CTD. It will benefit from the CTD soaking to start 
acquisition automatically. You will note the FIRST (beginning of the descent) and END (end of the 
descent) images that will be necessary to create samples from the recorded sequence. Please note 
that the 2 pixels data will also help adjusting the FIRST images of the day profiles when the sun per-
turbates the measurements.
Green : settings of the instrument (UPVPapp)
Blue : metadata to be documented when filling the sample metadata (UVPapp)
Red : instrument acquisition
Black : instrument response
4.1.4	UVP6HF programming in CTD mode using UVPapp
In case of successive profiles in CTD modes, the battery must be disconnected from the UVP (re-
move the battery plug) during more than 5 min between deployments in order to allow the in-
strument to reset.
The CTD mode is designed to record data only during the descent of the instrument to image only 
unperturbed water masses while minimising the use of the battery.
When programmed in CTD mode, the instrument will flash 3 times 14s after being powered on the 
battery. It will then automatically start acquisition 14 s after passing the "Pressure_for_autostart" 
depth and stop automatically when raised within the defined "Pressure_difference_for_auto_stop" 
depth range.
The UVP6HF will always acquire data at its maximum image rate.
The four configurable parameters are :
WARNING: when using the CTD mode, the CTD must not be descended deeper than the "Pres-
sure_difference_for_auto_stop" parameter during the pre-profile rinsing of the sensors. The UVP6 
would otherwise end acquisition when raising up to the surface after the CTD soaking and never re-
start till the battery is disconnected for 5 minutes and the starting procedure restarted.
4.1.5	UVP6HF deployment in AUTO mode (vertical profiles)
This mode is recommended only for very shallow profiles where the Pressure difference for auto stop 
value will not be reached.
Green : settings of the instrument (UPVPapp)
Blue : metadata to be documented when filling the sample metadata (UVPapp)
Red : instrument acquisition
Black : instrument response
4.1.6	UVP6HF programming in AUTO mode using UVPapp
In case of successive profiles in AUTO modes, the battery or power must be disconnected from the 
UVP (remove the battery plug) during more than 5 min between deployments in order to allow the 
instrument to reset.
The AUTO mode can also be utilised for vertical profiles. When programmed in AUTO mode, the in-
strument will flash 3 times 14s after being powered on the battery. It will then automatically start 
acquisition either immediately or just after the preset delay. The instrument will stop acquisition 
when the power is removed by disconnecting the battery. 
This mode is really less efficient than the CTD mode as it records data also during the ascent and 
drains more power thus.
The AUTO mode permits the UVP6 to start using preset parameters just after being powered or after 
a preset delay. The sensor will then stop acquisition when the power is removed.
These parameters offer customization options in AUTO mode, allowing users to set delays, manage 
pressure offset, and adjust acquisition settings based on specific needs, ensuring flexibility and 
adaptability in various applications.
4.2	Using the UVP6LP on a NKE CTS5 float
All UVP6 delivered with NKE CTS5 float are preset to be piloted via the float. They do not have any 
pressure sensor as the depth is transmitted by the float. They also have a specific firmware which 
allows the embedded classification of the images.
The acquisition will be set via the NKE graphical interface as for all sensors. We thus recommend to 
refer to NKE instructions for their operation via the float which will trigger each image acquisition 
and never try to reprogram the UVP6 using UVPapp.
The data will be transmitted after averaging by depth or time slices and transmitted to the data cen-
tres where they will be downloaded by users or automatically by the EcoPART application.
Because these sensors will usually not be recovered and because we want to avoid any possibility of 
changes in the instrument settings, these sensors are usually provided without any data/Octopus 
cable. In case of recovery, the sensors should be sent back for maintenance, inter-calibration and 
data download before re-configuration for further float deployment. 
UVPapp cannot longer be utilised to reprogram a UVP6 for CTS5 floats as a specific firmware needs 
to be set in the UVP6 to be piloted by the float.
As for the Glider data, the LOV proposes a Matlab set of tools available on GitHub which permit to 
process the data from recovered floats. Contact the Plateforme d'Imagerie Quantitative de Ville-
franche for the associated services.
4.3	Using the UVP6LP on gliders
The UVP6 must be equipped with a pressure sensor. The ALSEAMAR Seaexplore glider is the only 
one providing an on-the-shelf integration. We can, on request, provide a document detailing the 
updated situation of the integration of the UVP6 on the Seaexplorer, Seaglider and Slocum gliders.
The operational steps are :
1.	UVPapp Project Setup: Utilise UVPapp to create a project and program the UVP6 for the spe-
cific glider type, ensuring tasks such as emptying memory and Autocheck are performed.
2.	Glider Assembly: Mount the UVP6 on the glider using the specific kit and cable provided ei-
ther by the glider manufacturer or Hydroptic (e.g., SLOCUM).
3.	Glider Programming: Program the glider according to its manual, specifying actions such as 
stopping acquisition at the surface and at the bottom to allow an easy data post processing.
4.	Deployment Process: Deploy the glider and recover it after the mission. Be carful with the 
UVP6 during the manoeuvre. Some data may be displayed on the glider GUI (Glimpse for Se-
aexplorer) during deployment.
5.	Data Download Using UVPapp: Utilise UVPapp to download the data (refer to the UVPapp 
section of this manual for detailed instructions).
6.	Data Management: Get the glider data and metadata, saving them in the correct location 
and format within the UVP6 project.
7.	Get the glider data and metadata and save them at the right place and using the right format 
in the UVP6 project (see below)
8.	Backup Procedure: Make a backup copy of the downloaded data to ensure the conservation 
of the original data integrity.
9.	Raw Data Cleaning: Clean the raw folder by removing sequences acquired before the glider 
deployment.
10.	Sequence Filtering (Seaexplorer): Remove unnecessary sequences recorded at the surface or 
at the bottom (specific to Seaexplorer gliders).
11.	Sequence Merging: If multiple sequences were acquired during descent or ascent, use 
UVPapp to merge them per ascending or descending profile. 
12.	 MATLAB Tool Usage: Utilise provided MATLAB tools to automatically create samples by 
merging glider and UVP6 data.
13.	 Data Quality Check: Check the first and last images of the samples using UVPapp. Recover 
samples that may not have been created correctly by the MATLAB tool. Pay special attention 
to ascent/day samples and verify or correct LAT/LON values.
14.	Data Import to EcoPART and EcoTAXA: Import data into EcoPART and EcoTAXA using the ded-
icated manuals.
Matlab Tool Warnings: Be cautious and read the warnings about the MATLAB tools in Chapter 1 of 
this manual.
4.3.1	Using the UVP6LP on a SeaExplorer glider
4.3.1.1	Cabling and mounting
Any UVP6LP sensor equipped with an optional pressure sensor can be utilized on a SeaExplorer glid-
er (ALSEAMAR company). The instrument will be mounted in the nose of the glider using the AL-
SEAMAR provided mounting. 
Please check the instrument driver and firmware compatibility with both the Alseamar and the 
Hydroptic company. 
4.3.1.2	Programming the UVP6
The UVP6 will be programmed with UVPapp using the specific ALS programming and then piloted via 
the glider tools. 
The ALS glider mode is a specific SUPERVISED mode (see below).
The only parameters that can be changed is the Pressure offset being the vertical distance between 
the pressure sensor and the imaged area. It is usually set to 0 on SeaExplorer gliders where the cam-
era and the light are placed horizontally.
In addition, two custom files can be set for specific use of the sensor. Only the type of recorded im-
ages and the interval for measuring the background images can be set.
The glider must be programmed in order to stop the UVP6 acquisition at the surface (during trans-
mission) and at the bottom in order to ease the automatic processing of the sequences. If any useless 
sequence has been recorded at the bottom, delete it using UVPapp (after doing a backup).
Tips for programming the UVP6 on gliders :
4.3.1.3	Project tips for Seaexplorer glider datasets
It is recommended to create the project using the following naming convention: uvp6_snxxxxxxlp-
YYYY_seaNNN_mKKK_cruise where xxxxxx is the UVP6 serial number, NNN is the SeaExplorer serial 
number and KKK is the glider deployment reference. The cruise acronym is optional but recommend-
ed.
This naming convention and folder arrangement is mandatory to run the Matlab tools and rapidly 
create the samples for UVPapp. Users can anyhow do all operations manually using UVPapp.
The glider downloaded data will be placed in the doc folder of the project following structure to al-
low the Matlab tool to prepare the data. The navigation and science data (gz files) will be placed in 
the logs folders (*gli.sub* in ccu/logs and *pld*raw* in ccu/logs).
4.3.1.4	Samples metadata standards
For data quality the samples metadata must follow those standards:
-	Sample id = Yo_####n_missionID with #### for the number of the yo using 4 digits, n is 'a' or 
'd' for ascent or descent and missionID the unique mission identifier, with the glider id if 
necessary.
-	Station id = empty = ""
-	ARGO sample id = name of the corresponding metadata glider file.
4.3.1.5	UVP6 data cleaning
All downloaded sequences recorded prior to the first glider dive must be removed from the raw fold-
er (check the content of their *_data.txt files and the presence of an images.zip archive. 
4.3.2	Using the UVP6LP on a Seaglider glider managed by the CSCS company
There is no on-the-shelf possible usage of the UVP6 on the Seaglider. Contact CSCS company.
4.4	Using the UVP6LP on a mooring/lander
The UVP6 LP is suitable for this type of deployments thanks to its possibility to adjust the mean pow-
er using the acquisition rate. 
The short deployments (up to one month according to the image rate) can be done using the option-
al 75 Wh battery or a larger battery (Contact Hydroptic for battery recommendations). 
The instrument will usually be installed with its camera in horizontal position or facing down to avoid 
the deposit of particles on its porthole and image blurring. The light must be set on top to also avoid 
any deposit on its active surface.
There are so many possibilities of installation of the UVP on so many different platforms that they 
cannot be described in this guide. Please refer to the UVP6 frame annexe and/or contact Hydroptic.
Two operation modes can be utilised when the UVP6 cannot be piloted by the platform. 
The AUTO mode will permit acquiring data continuously using a unique set of parameters and adjust-
ing the frequency to manage the autonomy of the battery. The TIME mode permits to change the 
configuration of the image acquisition and process according to time and optimise the use of the 
battery resources by adjusting the frequency for the period of time. We do recommend using TIME 
mode.
We do recommend to use the TIME mode as it creates successive sequences in the memory instead 
of a unique huge sequence.
4.4.1	UVP6 cabling
These schematics apply only for the optional battery and cable provided by Hydroptic.
4.4.1.1	Battery charge
4.4.1.2	Running the UVP6
4.4.2	Programming the UVP6 in AUTO mode
Check the related chapter in the CTD section of the manual both for the cabling and the program-
ming.
4.4.3	Programming the UVP6 in TIME mode
The Time programming is highly recommended to secure the acquisition reset at given intervals and 
optimize the battery usage. The acquisition will then start at the first programmed time following the 
deployment. As for most programming modes, the instrument will flash 3 times when powered and 
then sleep till it starts acquisition.
The time mode allows you to program up to 10 acquisition files for an infinite period of time. The 
minimum interval to change settings is 30 minutes allowing a very high flexibility in the program-
ming.
The interface allows you to first set a timetable specifying the acquisition methods (AcqConfig) and 
their duration and then set some essential parameters for each of them.
The instrument checks the timetable every 30 minutes during one minute to detect if there is an 
acquisition to start, meaning that two acquisitions must not overlap. If two acquisitions are slated for 
the same time or if the first one is not finished, the second will be ignored.
It is recommended to test the programming on the instrument prior to deployment to be sure that 
it will work according to your desire by starting acquisition for a period of time covering the timeta-
ble settings and then downloading the data.
The acquisition will not stop until the specified duration of each sequence is achieved and thus not 
check nor run the next programmed sequences. Be thus careful when setting this duration parame-
ter.
If you recover an instrument after a long deployment, be very careful about the downloading pro-
cedure and refer to the warning about the mass memory of the instrument at the beginning of this 
manual.
4.5	Using the UVP6 as a remote camera
If connected to shore via an RS232 and Ethernet connection, the UVP6 can be manually either piloted 
using the RS232 commands or the UVPapp application and pre-set using the AUTO or the SUPER-
VISED modes. 
4.5.1	Cabling
4.5.2	UVP6 running in Livecamera mode
The instrument can also be utilised using the LIVECAMERA mode to record the images on the piloting 
computer. In that later case, users must be aware that the acquisition settings are not controlled and 
no tool is provided for the image analysis. We thus recommend using the remote connection to con-
trol the instrument using one of the programming modes and download the data and images at regu-
lar intervals.
The live camera tool allows the use of the UVP6 sensor as a remote camera and the storage of the 
images in the project in real time using the Ethernet link.
4.6	Using the UVP6 on smart platforms (SUPERVISED mode)
A smart platform is capable of communicating with the UVP6 using the RS232 serial interface. There 
are many possibilities of piloting and users should contact Hydroptic to select the more suitable con-
figurations for their platform. Gliders and profiling floats are examples of smart platforms (see dedi-
cated chapters).
4.6.1	Cabling
4.6.2	Programming the UVP6 in SUPERVISED mode
The tool permits to set 10 sets of parameters and save them in the UVP6. The user will then start 
acquisition, sending a RS232 start message which selects one of the pre-set lists and stop it at the 
end of the sequence using a stop message (see RS232 messages in the annexe). 
This mode opens many possibilities of usages of the UVP6 and is reserved to experts even if we 
limited the adjustable settings in the 10 sets of parameters. The only general parameters that can 
be changed is the Pressure offset being the vertical distance between the pressure sensor (when 
available) and the imaged area. The acquisition settings that can be changed are :
The useful RS232 commands are described in the RS232 section of this guide. An even more detailed 
reference manual can also be provided on demand to detail the UVP6 piloting in SUPERVISED 
mode and the management of the data transmitted by the UVP6 in real time.
4.7	UVP6 parameterization (piloting) and data download
4.7.1	Cabling
The data download or instrument parameterization requires the connection to a personal computer 
via the RS232 serial link and an Ethernet connection (for data download). The power will be provided 
either by the UVP6 battery or from the AC adapter provided with the data cable. 
4.7.2	Using the battery
4.7.3	Using the AC power
No battery installed
A battery is installed and not utilized for data download or programming. Do not use the Y battery 
cable if using the AC power as the battery power will be utilized.
5	UVPapp general information
Go to the HELP menu and configure you connexion to the UVP6 first (see below).
5.1	Computer configuration
UVPapp runs ONLY on Windows 10 and 11 operating systems.
The PC firewall must allow UVPapp to communicate via the Ethernet. In case of doubt, just disable 
the firewall.
The Ethernet link of the UVP6HF is sensitive:
?	Adding an Ethernet switch between the PC and the UVP6 data cable does facilitate the 
Ethernet communication of UVP6HF when cabled with the Y battery cable.
?	See the UVPapp IP address configuration chapter to set your PC
?	In case of Ethernet communication issue, it is suggested to try to set the Ethernet as below to 
force the Speed & Duplex to 100 Mbps Half Duplex :
5.2	Link with EcoPART and EcoTAXA
The UVPapp is designed to pilot the sensor and to prepare and process the data to be later imported 
in the EcoPART application for Particulate data access and in EcoTAXA for image off-line classifica-
tion.
https://EcoTAXA.obs-vlfr.fr/
https://EcoTAXA.obs-vlfr.fr/part/ 
5.3	Versioning and resources
This section applies to version 2.00 and above of UVPapp2. The application is regularly improved, 
some changes may occur in the different screens and some new tools may be implemented.
Any comments about the use of the application or ideas for improvement are welcome. Please send 
them to:
marc.picheral@imev-mer.fr
camille.catalano@imev-mer.fr 
sylvain.fevre@hydroptic.com 
5.4	Login
There is no login protection in UVPapp but it is highly recommended to log in using your personal 
name and email. This information will be stored in the instrument when programming and in the 
datasets for the traceability of the different operations.
5.5	Main page description
The main page contains different sections plus a main area displaying either Sequence or Sample 
information and tools.
5.5.1	Sequence area displayed
5.5.2	Sample area displayed
5.5.3	UVP6 dashboard
The sensor dashboard indicates the information of the connected sensor if a sensor is connected, or 
the information of the sensor defined for a project when a project is selected, and no sensor con-
nected.
It also indicates the remaining memory in the instrument which should be monitored between de-
ployments.
If a sensor is connected and powered and its information not displayed, try the "Connect to sensor" 
tool in the Sensor menu to get the information from the sensor.
5.5.3.1	Battery voltage value
Once the sensor is connected, it becomes possible to check the battery voltage. However, it's im-
portant to note that the value displayed on the dashboard might not be dynamically updated. The 
initially displayed value corresponds to the voltage reading taken at the start of the processing unit 
when the connection was first established.
To update the voltage value, initiate a reboot command from the sensor menu, followed by a con-
nect sensor command. For UVP6 HF, consider adding 0.2V to the displayed value, and potentially 
more if using an extended data/Octopus cable. 
5.5.4	Background task monitoring
The bottom window of the UVP6 dashboard indicates the background task activity of the application 
(data download, data processing, image processing...). The application cannot be stopped when tasks 
are pending. See the File menu to ask to quit at the end of the on-going task without waiting for the 
completion of a list of tasks.
5.5.5	Project dashboard
The project dashboard indicates the path of the active project and enables one to open one in Win-
dows Explorer.
5.5.6	Activity dashboard
The time, the date and the description of all on-going actions by the application is described in this 
board.
5.5.7	Sample/Sequence management
The Sequences management area provides information on the downloaded sequences of the select-
ed project and access to dedicated sequence tools.
The Samples management board indicates the metadata of all created samples (from project se-
quences). It allows editing the metadata of the samples and deleting them and gives access to the 
dedicated sample tools.
Switching between those two boards is made with the Manage Sequences/Manage Samples button.
5.5.7.1	Sequences processing tools
The Sequences management board displays the list of project sequences and a list of buttons: the 
dedicated sequences tools.
 With these tools it is possible to:
?	Create samples from the sequences : double click on a sequence to open the create-sample 
tool
?	ZIP vignettes if not done during download (essential for images process)
?	Erase sequence (quasi empty sequences are often created when an instrument set in AUTO 
mode is powered ON before being connected to UVPapp for data download)
?	Merge sequences
5.5.7.2	Samples processing tools
The Samples management board displays the list of created samples and a list of buttons: the dedi-
cated samples tools.
With these tools it is possible to:
?	Process the data and images of one or all project samples, generating the files in the ECO-
DATA folder of the projects. These files will later be imported in EcoPART and in EcoTAXA for 
image classification
?	Show the vignettes of the sample
?	Make profile plots
?	Export to ODV format
Note : depending on the version of UVPapp, the position of the vignettes from the original UVP6 
acquired image is indicated in the TSV file of the "sample_images.zip" archive of the ecodata folder 
which permits to "re-construct" partially the original image in case of over-segmentation of transpar-
ent objects. The field names are "object_vig_left_position" and "object_vig_top_position" for the top 
left corners of the vignettes.
5.5.7.3	Create-sample tool
This tool allows creating one or more samples (profiles or time series) from a sequence of data down-
loaded from the sensor or merged from the downloaded sequences. A graphical interface separated 
in different sections permits to:
?	Fill in SAMPLE METADATA : the operator will carefully fill in the different fields taking care of 
the sample naming to allow an easy later management of the resulting files
?	Select options for DATA SELECTION : the operator will define the type of dataset between 
TIME and DEPTH options. In case of Depth profile, the data integration level will be automat-
ically set to 1 decibar while the value can be set for Time samples. In that later case, the 
mean pressure of the sample can be manually entered in case the sensor was not fitted with 
a pressure sensor.
?	Check INSTRUMENT METADATA
?	Select the DATA RANGE : the data range will be manually defined with the help of the graph-
ical interface or trying the available tools (blue buttons). Dash lines indicate the beginning 
and the end of the data sample for a profile. The first and last images numbers can also be 
adjusted by hand. You can zoom on axes and move the cursors to shift the scales. The user 
must keep data of the chosen depth range and when the black data are constant meaning 
that they are not influenced by the sun at the surface.
Once saved, the sample will appear in the sample management window of the application.
5.5.7.3.1	Case 1 : wrong first image selection
The first image is defined before the BLACK 2px signal becomes flat thus including corrupted data at 
the start of the sample. It is also set before the descent starts.
5.5.7.3.2	Case 2 : good first image selection
The first image is defined after the BLACK 2px signal becomes flat (no influence of the sunlight) and 
after the descent starts.
5.6	UVPapp menus
5.6.1	File drop-down menu
The File menu allows to open an existing project but also to ask the application to stop and exit at the 
end of the task being processed when a list of tasks is pending.
If a sensor is connected, the user can select only projects related to the same serial number.
5.6.2	Project drop-down menu
5.6.2.1	Create new project
5.6.2.2	Project metadata settings
This page enables the creation of a new project. It is important to carefully fill in all the information 
which will follow the data in EcoPART and EcoTAXA. The instrument serial number will automatically 
be filled if a UVP6 is connected to UVPapp.
The project name cannot be modified via the application. The default name is a standard for all UVP 
projects.
The project name must be unique
 therefore, the date and the cruise acronym are used in the name 
of the project. A Unique project name AND a unique cruise name are mandatory for quality of the 
data.
5.6.2.3	Project folders
UVPapp will create the project folder which contains the following subfolders as a minimum:
?	calibration : users can store here the instrument calibration reports
?	config : contains the acquisition and hardware settings downloaded from the sensor and the 
archives of the previous programming. This folder is checked at every connection to the sen-
sor to check the consistency with the sensor internal settings.
?	CTDdata : a folder where users can place the data downloaded from the CTD which may be 
associated with the UVP6 in the same frame. The filename of the CTD data can be docu-
mented in the sample metadata form.
?	doc : users can store any document related to the project (cruise plans, scans...)
?	ecodata : the folder will contain the particle and image archives of each sample to be im-
ported in EcoTAXA
?	log : the sample may contain logs of the application tasks
?	meta : contains the table of metadata of the samples
?	raw : the folder contains the sequences downloaded from the instrument or, later, merged.
?	results : the folder contains graphs and tables produced by the data processing
5.6.2.4	Manage downloaded sequences
It permits to display the Sequences management area with the list of project sequences and the as-
sociated tools.
The Data files and images.zip files should be set to Y when the files have successfully been down-
loaded from the instrument. The Synth files are usually set to N because they are not recorded by the 
UVP6. The # of the sample informs users about the number of samples which have been created 
from the sequence.
The ZIP vignettes tool is useful only for raw images downloaded apart from UVPapp.
5.6.2.5	Merge sequences
When acquired with different settings a same profile or time series is within multiple sequences. This 
tool allows an easy merging of these sequences to "merged" sequences from which samples will be 
easily created.
The merging must be done prior to the creation of the samples.
This tool is very efficient to process data recovered from float deployment, time series, glider sec-
tions... 
It is recommended to back up the data prior merging them as there is no tool to automatically un-
do the merging of sequences.
The merge can be done manually or with the automatic tool.
5.6.2.6	Manual merge
The manual merge permits to manually select the sequences to be merged.
5.6.2.7	Automatic merge
The automatic merging is very efficient to group many sequences into large ones. As there are infi-
nite filtering options for merging, we recommend to 1) backup the data, 2) rename the raw folder to 
"raw_source", 3) select the sequences to be merged and 4) move them into the raw folder. 
5.6.2.8	Manage Sample
It allows displaying the Sample management board with the list of samples and the associated tools.
Many tools are available in right panel of the board. They are sorted in Per SAMPLE or per PROJECT 
operations to facilitate a global processing of the datasets.
The files issued from the Process Data and process Images tools are saved in the Ecodata folder of 
the project for later importation in EcoPART and EcoTAXA.
The files issued from the Export ODV and Export Plots are saved in the Results folder of the project. 
The ODV exports allows users to easily create text files to be imported in the Ocean Data View (ODV) 
free application (https://odv.awi.de).
5.6.2.9	Edit project metadata
It gives access to the project metadata window and allows to fill or correct the missing information 
about the project.
5.6.2.10	View tools (Project)
The tools permit the visualisation of the instrument configuration, i.e., hardware, acquisition and 
time tables, from the project. It matches the files as they were stored in the instrument at the time 
of its latest connection.
The tables contain the parameters names, its description and its values from the project.
5.6.2.11	Hardware table
5.6.2.12	Acquisition tables
5.6.2.13	Time table
5.6.3	Sensor control drop-down menu
5.6.3.1	Connect to sensor
This is the tool to connect the application to a sensor. This connection stops the acquisition when the 
sensor is recording data at the same time. A successful connection allows to visualize the sensor sta-
tus in the UVP6 dashboard.
When starting, the application automatically tries to set a connection.
5.6.3.2	Reboot and disconnect
The tool allows to reset the sensor in a perfect state immediately after stopping UVPapp or shutting 
OFF the sensor power.
5.6.3.3	Autocheck
The autocheck tool will start a good health test sequence. It will check all components of the sensor 
and store a short sequence on its memory. The autocheck can be run as often as necessary prior to 
instrument deployment.
5.6.3.4	Time tools
The time tools make it possible to check the sensor time and to synchronize it to the computer time 
in UTC.
It is essential to synchronize the sensor time with the computer time prior to any deployment, 
mainly when the UVP6 is not equipped with a pressure sensor for depth interfacing with other sen-
sors during vertical profiles. The UVPapp application will manage to set the sensor in UTC no matter 
the current time of the piloting computer. 
It is important that the computer time is automatically synchronized using the Internet time.
5.6.3.5	View tools (Sensor)
The tools permit the visualization of the instrument hardware, acquisition and time parameters ta-
bles of the connected sensor.
5.6.3.6	Program sensor
The programming tools can be run only if a sensor is connected. The programming tools allow you 
to modify only the relevant settings of the UVP6. See the relevant usage chapters above.
5.6.3.7	Monitor serial port
It opens the serial port window which will display all received and sent messages between the UVP6 
and the computer. It is usually used for troubleshooting.
5.6.3.8	Open OctOs terminal
The OctOs terminal allows to communicate to the UVP6 sensor using a specific terminal and low-level 
commands.
This terminal is dedicated for experts who will act under Hydroptic supervision, mainly for specific 
troubleshooting.
The File Upload tool permits you to manually change any setting of the instrument without any con-
trol. It must not be utilized by users.
5.6.3.9	LiveCamera
The livecamera tool allows the use of the UVP6 sensor as a remote camera. See the relevant usage 
chapters above.
5.6.4	Data drop-down menu
The Data tools can be run only if a sensor is connected.
5.6.4.1	Download data
It opens the download data board to download the data from the sensor to the project on the com-
puter via the Ethernet connexion.
The first step is to use the Get File List button to ask the sensor to inventory the data stored in its 
mass storage SD card. This inventory may take a very long time depending on the quantity of data as 
the SD card can be either 400 GB or 1TB (in option).
The Refresh UVP6 internal file list must be enabled to make an up-to-date inventory (longer).
After getting the files list, the user has the possibility to download the data sequence by sequence or 
let the application download all missing sequences (i.e., sequences that are not yet recovered in the 
project).
It is very important to consider that downloading 400GB via the 100MB Ethernet link may take 
48hours. The instrument will have to stay connected and powered preferably using an AC adapter 
for long downloads.
The data will be downloaded in the RAW folder of the project. Each sequence sub folder is named 
according to the UTC date and time of the first image of the sequence. It will contain a data.txt file 
with all raw particle counting and sensor metadata plus a ZIP archive of all raw image/vignette files.
In case you experience difficulties downloading data due to the Ethernet connection, please go to the 
PC configuration related chapter.
The #vig field indicates the number of recorded vignettes from the original images.
The #image filed indicates the number of recorded images in case this option is selected for the ac-
quisition.
5.6.4.2	Delete data
It is impossible to select the data to delete in the instrument. The tool will reformat the entire mass 
storage, erasing all previous data.
In case very important data has been erased by mistake, you can ask Hydroptic to recover them by 
sending the instrument back. This operation can only be tested if no data has been recorded since 
the formatting of the SD card.
5.6.5	Help and application settings
The Help menu opens the application settings window.
5.6.5.1	Serial port
Ensure that the COM port is properly defined. Connect your UVP6 to the specified COM port, and 
make sure that no other terminal application is using it
If you encounter any issues, adjust the latency timer of FTDI cable serial port by following these 
steps:
In Windows, navigate to Device Manager and open the properties of the Serial Port as illustrated 
below. Within the Port Parameter Tab, click on the Advanced button. Finally, reduce the RS232 la-
tency as needed
5.6.5.2	Serial speed
The serial speed must be set to 38400. In case of communication over a longer data cable, it may be 
necessary to lower this serial speed. Contact Hydroptic to get the specific procedure for changing the 
serial speed in the sensor prior changing it in UVPapp.
5.6.5.3	Serial monitor displayed
Allows to display all incoming and sent messages between the UVP6 and the computer.
5.6.5.4	Local IP (PC configuration)
The Ethernet link is utilised in association with the serial link to download the data from the UVP6 
and to use the LIVECAMERA mode. It is thus essential to properly set it for these purposes. The serial 
link can be sufficient to monitor the instrument status using the UVPapp dashboard (see above).
For UVP6 LP, any IP address can be utilised as the instrument and PC use the MAC address to set the 
communication
For UVP6 HF, the IP address of the Ethernet card of the computer must be 193.49.112.XXX where 
0<XXX<256 and XXX != 100. The local IP (or auto) value should be set to this IP address and "auto" 
avoided as the application would check all the IP addresses of the PC and select one which could be 
wrong in case of the presence of more than one address (WIFI).
Setting the IP Address on the computer
- Click on Start, then type "settings" and select "Settings > Network & internet."
- Choose "Ethernet" on the left and click on the "Modify adapter options" button.
- Select the specific Ethernet connection you are using.
- Click on "Properties."
- Double-click on "Internet Protocol Version 4 (IPv4)."
- Opt for the manual IP configuration and enter the provided IP address as shown below.
6	MAINTENANCE
6.1	In case of flooding suspicion
If you suspect that the UVP6 main pressure case or the light units have flooded, use EXTREME CAU-
TION around the instrument. The best course of action is to take preventive measures to avoid ac-
cidents.
An indication for flooding is that the instrument stops operating or that there is a short-circuit condi-
tion in the instrument. An instrument flooded with salt water will short all of the connector pins to-
gether. An electric continuity test between random pins on any of the bulkheads may confirm this 
suspicion.
In case you suspect any flooding, place the instrument in a safe location and contact HYDROPTIC for 
further instructions.
Never stay in front of the end caps or the glass porthole !
CONTINUE AT YOUR ON RISK!
You should try to depressurize the main pressure case slowly backing off one of the two connectors 
of the connector end cap. When all the pressure has been released the instrument can be stored and 
safely shipped to Hydroptic for repairs.
6.2	Inter calibration
The UVP6 is an imaging sensor. It is thus carefully adjusted and calibrated at Plateforme d'Imagerie 
Quantitative de Villefranche sur mer (PIQv) before delivery. Just like any other sensor, we recom-
mend a regular check and intercalibration to ensure the data consistency. The PIQv, responsible for 
the initial tuning and intercalibration of the instrument, continues to provide routine intercalibration 
for all sensors by performing optical tests. Furthermore, the PIQv consistently inter calibrates its 
own instruments between each cruise. This process ensures the accuracy and reliability of the 
UVP6's imaging capabilities.
Contact the PIQv (piqv@imev-mer.fr ) to request an inter-calibration service.
6.3	Connector maintenance
The UVP6 connectors must be dried each time they are disconnected. They must be greased on a 
regular basis using the provided Molykote 44 transparent and soft grease.
The connectors are provided with dummies. They must never be left without protection.
Handle electrical terminations carefully, as they are not designed to withstand strain. Disconnect the 
cables from the components by pulling on the connector heads and not the cables. Do not twist the 
connector while pulling, as this will damage the connector pins.
Do not use petroleum-based lubricants on Subconn(r) connectors. 
6.4	75Wh Battery (optional for LP instruments)
It is recommended to limit the discharge of the Li-Ion batteries in order to enhance their lifespan. We 
thus recommend using only 50% of the provided battery before charging.
The battery charger is plugged directly to the battery for charging. A relief valve secures the charging 
without requesting to open the battery.
The Y cable provided with the battery permits to power the UVP6 on the battery. It's important to 
note that this cable doesn't support powering the UVP6 using the power from the data cable. If you 
want to use the AC power of the data/Octopus cable, connect the data cable directly to the UVP6 
without utilising the Y cable. 
6.5	Battery voltage measurements
While checking voltages with a voltmeter, use extreme care to avoid shorting the probe leads. A 
shorted power supply or battery can output many amperes of current, potentially harming the user, 
starting fires, or damaging equipment.
Insert the positive probe first, followed by the negative one. When removing the probes, take out the 
negative probe first, and then the positive probe. This sequence ensures safe and proper handling 
during the insertion and removal of the probes.
PIN (MCBH2F, battery bulkhead)
Signal
1
0 vdc
2
Vcc (21.6 volts nominal)
6.6	Battery charge
Use the provided charger to charge the battery. The charger should be disconnected from the AC 
power when connecting or disconnecting the battery.
The charger LED indicates the status of the charge :
•    Red : rapid charge
•    Yellow : intermediate charge
•    Green : charge finishing
The charge will be automatically stopped after 4 hours and the LED will stay green.
6.7	Instrument storage and transport
The camera and light protections should always be kept in place during storage and transport.
The marine connectors must be kept in good condition by rinsing them with freshwater after each 
profile, by drying them and by applying some provided Molykote 44 grease on them when needed. 
Dummy plugs should always be plugged in to avoid dust to be aggregated on the grease.
7	SPECIFICATIONS
7.1	UVP6-LP
?	Operational depth: 0 to 6000 metres
?	Weight in air: 3.2 Kg
?	Weight in water: 1.5 Kg
?	Materials: titanium, glass and POM
?	Input voltage: 8-28 Vdc (0.1Watt@0.1Hz - 0.35Watt@0.5Hz - 1Watt@1.3Hz)
?	Interface: RS232, Ethernet, analog output, I/O
?	Lighting: 635nm, 50-400µS flashs
?	Resolution: 5Mpixels / 0.73µM
?	Field of view: 180 x 151mm x 23mm (0.6 L)
?	Max image frequency: 1.3Hz
?	Real time processing of images
?	Memory: > 400Go (1 TB option)
?	Pressure sensor (option) : 0.1%FS accuracy 
7.2	UVP6-HF
?	Operational depth: 0 to 6000 metres
?	Weight in air: 3.2 Kg
?	Weight in water: 1.5 Kg
?	Materials: titanium, glass, POM and Aluminium (arm)
?	Input voltage: 10-28 Vdc (6 W / 0.02 W, acquisition / standby)
?	Interface: RS232, Ethernet, analog output, I/O
?	Lighting: 635nm, 50-100µS flashs
?	Resolution: 5Mpixels / 0.73µM
?	Field of view: 180 x 151mm x 23mm (0.6 L)
?	Max image frequency: 25Hz
?	Real time processing of images
?	Memory: > 400Go (1 TB option)
?	Pressure sensor: 0.1%FS accuracy
7.3	Standard battery (HYDRPTIC)
?	Operational depth: 0 to 6000 metres
?	Weight in air: 1.4 Kg
?	Weight in water: 0.6 Kg
?	Materials: titanium
?	Power: 75 Wh
?	Voltage: 21.6 Vdc
8	ANNEXE
8.1	Regulations
8.1.1	HS code
8.1.1.1	International
901580
8.1.1.2	French
9015.80.20.00
8.1.1.3	US ECCN
8A992
8.1.1.4	Battery
The UVP6 sensor unit itself does not incorporate a battery. Nevertheless, the additional battery 
housing contains a 6 x 3.3A / 3.6V Li-ion battery with a 75Wh capacity, weighing 0.27 Kg. This option-
al battery housing is designed for convenient transportation, including carriage on planes (in cabin 
only). Prior to travel, it is advisable to consult with your company or relevant authorities to ensure 
adherence to airline regulations and safety standards.
The UN number for such a battery is 3481, classified as "Lithium Ion Batteries contained in equip-
ment." This UN number is part of the classification system used for the transportation of hazardous 
materials, providing specific information about the nature of the contents for regulatory and safety 
purposes.
8.2	Data downloaded files
The data file are named according to the date and time (UTC) of the first image of sequence. Their 
headers contain two metadata lines, one for the instrument hardware configuration and one for the 
acquisition settings utilized for the sequence. 
HW_CONF,000003LP,0,UNDEFINED,0,000124VE,1,150,250,1,0.000,393819,10000,2,192.168.0.128,0,
455,6,20,2342.000,1.136,73,0.670,20200924,202010130814,marc.picheral@obs-
vlfr.fr,40.3,50.8,64,80.6,102,128,161,203,256,323,406,512,645,813,1020,1290,1630,2050

ACQ_CONF,ACQ_ALS_022H,2,0.500,1,1,0,0,1,0,10,2,620,1.5,10,10,0,1000,0,40,marc.picheral@obs-
vlfr.fr,0,393788

The header lines are followed by the Large Particulate Matter (LPM) lines and Black lines at regular 
intervals.
BLACK line (light OFF) : 
20210428-143248,94.65,16.06,0:1,5056,30.9,11.6
2,145,31.4,10.5
3,2,28.3,7.2
 (black line with light 
flag to 0)
LPM line (light ON) : 
20210428_3250,94.18,16.00,1:1,5809,30.5,11.2
2,369,36.0,16.7
3,87,40.6,21.1
4,46,52.4,29.1
5,11,5
4.8,31.4
6,11,58.4,37.5
7,5,49.5,31.9
8,5,72.2,44.9
9,2,85.0,45.3
10,3,87.1,53.1
11,1,57.7,20.5
12,2,8
0.2,51.5
25,1,79.7,45.9
 (data line with linght flag to 1)
The first one indicates the image time, depth (when available, otherwise 'nan'), internal temperature 
a flag indicating the status of the light (ON/OFF) for the image. 
The second section (after the ':') contains the data per pixel size (1), the number of objects for that 
size (5056 or 5809), the mean grey of these objects (30.9 or 30.5) and the stddev of the mean grey 
(11.6 or 11.2).... and then the same data for the 2, 3 and.... pixel sizes.
There might be some "OVER_EXPOSED" lines when the sensor is saturated either by sun light (on 
deck or in water) or by images of too turbid waters.
OVEREXPOSED line (light ON) : 
20210428-134956-1,-0.05,21.38,1:OVER_EXPOSED,22.2%

8.3	RS232 commands for SUPERVISED mode of operation
In order to avoid any subsequent problem with the UVP6, we present only the "USER" command and 
responses. The "SUPER USER" commands are reserved for Hydroptic. The "USER" mode is switched 
by default every time the instrument is powered ON or reboot. We thus present here the typical 
sequence of commands for :
?	Pre deployment checks
?	Acquisition commands
?	Other commands
It is not possible to bypass the UVPapp application (or the OctOs guru terminal) to download imag-
es and raw data from the UVP6 as it requires a specific Ethernet procedure combining the serial 
connexion and the Ethernet connexion in UDP mode.
8.3.1	General procedure in SUPERVISED mode
Please refer to the more detailed manual available on demand. The procedure indicated below 
must be considered as a summary.
It is important to consider the booting time of the instruments which impacts the responding time:
?	The UVP6LP boots in few ms => immediate response to messages
?	The UVP6HF boots in 14 seconds => it may respond after 14seconds
Procedure:
?	The sensor is powered ON
?	Acquisition starts with a START command, including the name of the setting table
?	The sensor returns HW and ACQ data lines (TAXO line if activated)
?	The sensor returns DATA lines
o	On demand by "PT" commands if PILOTED
o	At its own frequency if CONTINUOUS
?	The acquisition is stopped
o	By powering OFF (file safe system)
o	By sending a STOP command (preferable)
?	The sensor is turned OFF (if necessary)
8.3.2	Pre-deployments
Here we present the typical succession of commands that can be utilised to check that the instru-
ment is ready for the deployment.
8.3.3	Acquisition commands
The pre-deployment checks indicated that the "ACQ_ALR1500_0" table is present in slot 0 of the 
instrument memory. It can thus be utilised in that sequence.
Note that the start command includes the date and time and will thus set the instrument date and 
time.
8.3.4	Other useful commands in USER mode
8.3.5	HWconf metadata frame (UVP6 size classes)
The HWconf frames are sent by the instrument after being powered (delay : 1 second for UVP6LP, 14 
second for UVP6HF). 
The last 18 parameters are the lower value of the size classes. These values may be different accord-
ing to the sensor firmware. 
They will always correspond to standard data classes in EcoPART (https://EcoTAXA.obs-vlfr.fr/part/).
HW_CONF,000002LP,0,UNDEFINED,0,000002VE,2,150,250,169559,20.000,393819,2000,2,192.168.0
.128,0,356,6,23,1130.000,1.310,73,0.630,20190207,201907241218,marc.picheral@obs-
vlfr.fr,40.3,50.8,64,80.6,102,128,161,203,256,323,406,512,645,813,1020,1290,1630,2050

HW_CONF
Camera_ref
Acquisition_mode
Default_acquisition_configuration
Delay_after_power_up_on_time_mode
Light_ref
Correction_table_activation
Time_between_lighting_power_up_and_trigger
Time_between_lighting_trigger_and_acquisition
Pressure_sensor_ref
Pressure offset
Storage_capacity
Minimum_remaining_memory_for_thumbnail_saving
Baud_Rate
IP_adress
Black_level
Shutter
Gain
Threshold
Aa
Exp
Pixel_Size
Image_volume
Calibration_date
Last_parameters_modification
Operator_email
40.3
50.8
64
80.6
102
128
161
203
256
323
406
512
645
813
1020
1290
1630
2050
8.3.6	ACQconf metadata frame
The ACQconf frames are sent when the acquisition of a sequence starts even if a delay is then ap-
plied (CTD or AUTO modes)
ACQ_CONF,ACQ_CSCS_002L,3,2.000,1,1,10,30,1,1,10,1,50,1.0,10,10,0,1000,0,40,marc.picheral@ob
s-vlfr.fr,0,381774

rame
Configuration_name
PT_mode
Acquisition_frequency
Frames_per_bloc
Blocs_per_PT
Pressure_for_auto_start
Pressure_difference_for_auto_stop
Result_sending
Save_synthetic_data_for_delayed_request
Limit_lpm_detection_size
Save_images
Vignetting_lower_limit_size
Appendices_ratio
Interval_for_mesuring_background_noise
Image_nb_for_smoothing
Analog_output_activation
Gain_for_analog_out
Minimum_object_number
Maximal_internal_temperature
Operator_email
0
SD card remaining memory (Mbytes)
8.3.7	Data frames
8.3.7.1	Particle frames
The data frame is sent after the acquisition and process of a bloc (batch) of images. The numbers are 
per bloc of images. The concentrations will be calculated using the indicated number of images and 
the image volume from the HWconf frame.
LPM_DATA,27.31,20200110,120542,2,14.25,2051,800,123,50,10,1,0,0,0,0,0,0,0,1,0,0,0,0, 
25,30,27,50,26,100,0,0,0,0,0,0,0,201,0,0,0,0

Unit
Min
Max
LPM_DATA
characters
na
na
Depth
mH2O
Date
YYYYMMDD
Time
HHMMSS
Number of analyzed images
images
1
28
Internal temperature
°C
Cumulated number of objects for class  1
integer
0
216
Cumulated number of objects for class  2
integer
0
216
Cumulated number of objects for class  3
integer
0
216
Cumulated number of objects for class  4
integer
0
28
Cumulated number of objects for class  5
integer
0
28
Cumulated number of objects for class  6
integer
0
28
Cumulated number of objects for class  7
integer
0
28
Cumulated number of objects for class  8
integer
0
Cumulated number of objects for class  9
integer
0
Cumulated number of objects for class  10
integer
0
Cumulated number of objects for class  11
integer
0
Cumulated number of objects for class  12
integer
0
Cumulated number of objects for class  13
integer
0
Cumulated number of objects for class  14
integer
0
Cumulated number of objects for class  15
integer
0
Cumulated number of objects for class  16
integer
0
Cumulated number of objects for class  17
integer
0
Cumulated number of objects for class  18
integer
0
Mean grey level of objects from class  1
integer
0
255
Mean grey level of objects from class  2
integer
0
255
Mean grey level of objects from class  3
integer
0
255
Mean grey level of objects from class  4
integer
0
255
Mean grey level of objects from class  5
integer
0
255
Mean grey level of objects from class  6
integer
0
255
Mean grey level of objects from class  7
integer
0
255
Mean grey level of objects from class  8
integer
0
255
Mean grey level of objects from class  9
integer
0
255
Mean grey level of objects from class  10
integer
0
255
Mean grey level of objects from class  11
integer
0
255
Mean grey level of objects from class  12
integer
0
255
Mean grey level of objects from class  13
integer
0
255
Mean grey level of objects from class  14
integer
0
255
Mean grey level of objects from class  15
integer
0
255
Mean grey level of objects from class  16
integer
0
255
Mean grey level of objects from class  17
integer
0
255
Mean grey level of objects from class  18
integer
0
255
In case the sensor is over exposed (at the surface) by sunlight, it will replace the LPM frame by an 
over exposed frame in which all values for the 18 classes of abundances and grey levels are set to 0.
LPM_DATA,0.25,20200110,120112,0,14.25,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0, 
0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0

8.3.7.2	Black frames
A black frame is sent at preset intervals between particle frames. It contains the number of objects 
from the images acquired without activating the light.
BLACK_DATA,1.23,20200110,120132,2,14.25,1275,251,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0

Unit
Min
Max
BLACK_DATA
characters
na
na
Depth
mH2O
Date
YYYYMMDD
Time
HHMMSS
Number of analyzed images
images
1
255
Internal temperature
°C
Cumulated number of objects for class  1
integer
0
Cumulated number of objects for class  2
integer
0
Cumulated number of objects for class  3
integer
0
Cumulated number of objects for class  4
integer
0
Cumulated number of objects for class  5
integer
0
Cumulated number of objects for class  6
integer
0
Cumulated number of objects for class  7
integer
0
Cumulated number of objects for class  8
integer
0
Cumulated number of objects for class  9
integer
0
Cumulated number of objects for class  10
integer
0
Cumulated number of objects for class  11
integer
0
Cumulated number of objects for class  12
integer
0
Cumulated number of objects for class  13
integer
0
Cumulated number of objects for class  14
integer
0
Cumulated number of objects for class  15
integer
0
Cumulated number of objects for class  16
integer
0
Cumulated number of objects for class  17
integer
0
Cumulated number of objects for class  18
integer
0
8.4	Instrument dimensions
8.4.1	UVP6 Dimensions
8.4.2	UVP6 protective Frames
8.4.2.1	First design
8.4.2.2	Actual design
8.5	Connector pin configuration on the UVP6 camera
8.5.1	DATA, ANALOGUE and POWER (MCBH8M)
PIN (MCBH8M, bulkhead)
Signal
1
0 volt
2
Vin vdc (10 - 28)
3
UVP6 Tx (RS232)
4
UVP6 Rx (RS232)
5
Ethernet (or ANALOGUE gnd)*
6
Ethernet 
7
Ethernet (or ANALOGUE +) *
8
Ethernet 
*The analogue output is always activated on UVP6HF instruments. It has to be activated on UVP6LP 
instrument (on request before delivery)
8.5.2	LIGHT and I/O (MCBH4M) 
PIN (MCBH4M, bulkhead)
Signal
1
0 volt
2
Vout vdc (10-28)
3
Trigger out
4
I/O*
* The I/O permits to pilot any device such as a wiper or a closing operculum (ask Hydroptic about this 
function)
8.5.3	Internal camera cabling
8.6	Battery for long deployments
The Develogic company is providing battery systems which can be utilised for long deployments : 
http://www.develogic.de/products/power-supply-systems/refillable-battery-container/ 
8.7	 Instrument delivery contents (from Hydroptic)
8.7.1	Shipping cardbox:
?	UVP6LP with light cable, dummy and optics covers
8.7.2	PELICASE
?	UVP6HF with light cables and optics covers
?	Octopus cable for serial, ethernet and power inlet
?	Serial to Usb converter
?	Ethernet Switch
?	Grease pot
?	USB key
Optional
?	Battery 
?	Battery charger
?	Y cable for battery
?	Analog cable 
?	CTD mounting kit
1


// =======================================================================
// AJOUT DU DEUXIÈME MANUEL
// =======================================================================
###################################################
## DEBUT DOCUMENT 2 : UVP6 Training
###################################################
3
UVP 2, 3, 4 & 5	UVP 6
Most of the objects seen by the UVP are very small and pixelated
90% of aggregates in the sea
CAMERA HOUSING
PRESSURE
sensor
MOTHER board
Power unit (file safe system)
Supervising unit (SU)
Mass memory (SD card)
• Data & images
• Classification model
Connexions
• RS232
• Ethernet
• Power
• I/O (biofouling protection)
• Analog (option)
IMAGER
board CMOS 4 MP
The UVP are adjusted and calibrated (and intercalibrated) PARTICLE COUNTERS
How often a UVP6 should be calibrated ?
• PIQv-LOV strategy : between each cruise/operation
• Other lab :
• If multiple instrument (cross-validations)
• Return to PIQv
7
Each sensor is provided with a calibration report accessible on the UVPdb WEB depository uvpdb.ecotaxa.org
• LASER DIODE in the light unit
• NEVER DISCONNECT THE LIGHT CABLE
• 
The presence of water is normal
• NEVER DISASSEMBLE THE CONNECTING ARM FROM THE CAMERA
• NEVER OPEN THE PRESSURE HOUSINGS
• PREVENT SCRATCHES ON THE GLASS PARTS
• GREASE CONNECTORS
• Use a RJ45-USB adapter on the Data (Octopus) cable and keep it connected to the PC
• Set the Ethernet adapter IP address (193.49.112.xxx)
• Force the Speed & Duplex to 100 Mbps Half Duplex
HELP
COM PORT
      VERSION MENU
Connected UVP DASHBOARD
BACKGROUND TASK
Logged OPERATOR
    PROJECT PATH TASK MONITORING
Go to Sensor/connect to establish the RS232 serial connexion with UVP6. Retry if necessary.
UVP6 serial number and type (LP/HF)	UVP6 Light serial number
UVP6 pressure sensor presence
UVP6 programming mode
UVP6 memory status
UVP6 COM connexion status
UVP6 power voltage (battery)
It is recommended to create a project with a connected instrument (sn automatically detected). The instrument configuration will be saved in the config folder of the project.
LA
B WORK : create you own project
!
• Go to sensor/autocheck to check the UVP6 functioning (redo if com error)
• Go to Data/Download sequences
Click on Get File List => you will get the list of sequences in the instrument, including the AUTOCHECK one at the end of the list
The images settings are not controlled
==> Uncalibrated images and results
No image processing available
• Connect to UVP6
• Go to the Data/Download menu
• Get File List to recover the list of sequences in the instrument
• Download the missing data (or selected data)
SEQUENCES tab
Switch to Samples board
Individual SEQUENCE TOOLS
Project SEQUENCE TOOLS
Downloaded sequences present in the project
Carefully fill in the SAMPLE metadata
UVPapp : SAMPLE creation
Carefully fill in the SAMPLE metadata
Select PRESSURE for
CTD data
SELECT FIRST and LAST
IMAGE manually and/or using the graph below (also see the deployment graph)
   Values for the vertical black line
  Click on the axis to scroll or shift the axis
of the graph
The LEFT dashed line indicates the FIRST IMAGE
Move the black line to display the values
The RIGHT dashed red dashed line indicates the LAST IMAGE
Think before about a clever way to program the UVP6 !
Overexposed part, Data = 0 in UVPapp
Lots of particles !
SAMPLES tab
• 
Process Data to
• get the particles information
• allow to export PLOTS
• allow to export files to OVD*
• Prepare data for EcoPART
• Process Images to :
• allow to visualize vignettes
• prepare images for EcoTAXA
• View vignettes to check their quality
Visualize the graphs from the Result folder of the project
Visualize the vignettes using the UVPapp tool
It is now possible to delete the data in the instrument by reconnecting to the instrument. Note that the data deletion apply for all recorded sequences.
The maximum duration of the charge is 4 hours. The UVP6 acceptable voltage range is 10-28 Volts. The nominal voltage (fully charged is 25.2 Volts).
The connector must be dried before connexion and grease added.
CONTROL LED
• Red : rapid charge
• Orange : intermediate
• Green : fully charged
It is used to monitor the good health of the instrument.
Do NOT use it without any data process.
AUTO with descents, parks and ascents :
    • uvp6_sn000181lp_20220816_raw AUTO with over-exposed :
• uvp6_sn000004lp_2023_egim
DO NOT forget to IMPORT your data and share them on EcoPART and EcoTAXA.
The UVP project is a folder architecture for configuration, data and work.
The UVP6 mass memory contains:
• One HARDWARE table (image acquisition and process settings => CALIBRATION)
• One to ten ACQUISITION tables (instrument functioning and process settings)
• One optional TIME table (time programming)
• Two optional CLASSIFICATION Models with the associated TAXONOMIC tables
The settings are checked and synchronized from the UVP6 to the selected UVPapp project every time a UVP6 is connected to UVPapp.
The previous parameters are backed up.
HARDWARE table
=> HW file in the config folder
Acquisition table(s)
=> ACQ files (1-10) in the config folder
TIME table
=> timetable file in the config folder
TAXONOMIC table:
=> taxo file in config folder It contains :
• Name of the classification model
• Maximum size for objects to be classified (min. size is set for vignettes in the ACQ table)
• Total number of classes of the model (max = 40)
• The links between the taxonomic category number (00 - 39) and the EcoTAXA corresponding taxonomic Id of the category
Classification models
One folder per acquisition (sequence) dated from the starting time (UTC) of the sequence.
• One *_data.txt file containing the particle raw data
• One images.zip archive containing all the vignettes or raw images
The associated other sensor data (like CTD) can be stored in the CTDdata folder and also in the doc folder. A specific format (*.ctd) must be applied in order to import them in EcoPART along with the UVP6 LPM data.
The *_data.txt file starts with
• the HW line containing the settings from the HW table of the instrument :
HW_CONF,000003LP,0,UNDEFINED,0,000124VE,1,150,250,1,0.000,393819,10000,2,192.168.0.128,0,455,6,20,2342.000,1.136,73,0.670,20200924,202010130814,marc.picheral@obs-  vlfr.fr,40.3,50.8,64,80.6,102,128,161,203,256,323,406,512,645,813,1020,1290,1630,2050

• the ACQ line containing the content of the selected ACQ table for the sequence :
ACQ_CONF,ACQ_ALS_022H,2,0.500,1,1,0,0,1,0,10,2,620,1.5,10,10,0,1000,0,40,marc.picheral@obs-vlfr.fr,0,393788

• the TAXO line containing the content of the selected TAXO table for the sequence if activated:
TAXO_CONF,TAXO_NKE_0,Mglob_20220421,65535,20,93382,56693,85123,27642,45074,11514,13381,56317,11758,342,25942,85008,93973,84963,85076,85011,85024,93491,85039,85025,0,0,  0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0

There are 4 types of data lines
1. The data lines from "OVER-EXPOSED" images (saturation by sun light (in water or on deck) or turbid waters) :
20210428-134956-1,-0.05,21.38,1:OVER_EXPOSED,22.2%

2. The "BLACK" data lines acquired with no light (to measure the noise, instrumental or environmental) :
20210428-143248,94.65,16.06,0:1,5056,30.9,11.6
2,145,31.4,10.5
3,2,28.3,7.2

3. The LPM data lines acquired with the light :
20210428_3250,94.18,16.00,1:1,5809,30.5,11.2
2,369,36.0,16.7
3,87,40.6,21.1
4,46,52.4,29.1
5,11,54.8,31.4
6,11,58.4,37.5
7,5,49.5,31.9
8,5,72.2,44.9
9,2,85.0,45.3
10,3,87.1,
53.1
11,1,57.7,20.5
12,2,80.2,51.5
25,1,79.7,45.9

4. The classification lines when the embedded classification is activated
TAXO:2,13,19738,91,13,4633,105
LPM data lines (acquired with the light ON) :
Frame METADATA

	6,11,58.4,37.5
7,5,49.5,31.9
8,5,72.2,44.9
9,2,85.0,45.3
10,3,87.1,53.1
11,1,57.7,20.5
12,2,80.2,51.5
25,1,79.7,45.9

Frame DATA
OFF) are the same except that the light statu is 0
OVER EXPOSED Data lines:
20210428-132512-442,94.18,16.00,1:
1
Frame METADATA
An image frame is considered as OVER EXPOSED by the UVP6 firmware when:
• the sensor is saturated by sun light
• the turbidity is too high
Embedded classification data lines :
Frame METADATA	Frame TAXO DATA
The related metadata of the UVP6 frame are provided in the preceding LPM data line.
Once a first sample has been created, a header table is created in the meta folder of the project.
Every time the table is edited to create or edit a sample, the previous table is archived as a backup.
The ecodata folder contains one sub folder per processed sample.
Each sub folder contains :
• a ZIP file of particle data for EcoPART
• a ZIP file of images for EcoTAXA
The sample_Particule.zip archive contains :
• a metadata file of the sample
• a CSV file containing the raw particule data (same format than the downloaded data.txt file)
The sample_images.zip archive contains :
• the png vignettes stored in sub folders of 500 vignettes
• a compute_vignettes.txt files which indicates to EcoTAXA how to process the vignettes (scale bar, inversion, gamma...)
• a TSV file containing all metadata and features for the importation of the vignettes in EcoTAXA
Once processed in UVPapp, the result folder contains a file that can be dragged and dropped in the ODV application.
If processed, it also contains the graphs of the profiles for quality control purposes (the data are smoothed using a mean average)
DO NOT forget to IMPORT your data and share them on EcoPART and EcoTAXA.
CRUISE START :
• Assemble the instrument in a safe place
• Configure the PC
• Connect the UVP6 to the PC with the Data cable and the battery
• UVPapp
• Connect
• Create a project
• Program the UVP6 in CTD mode
• Synchronise the UVP6 time
• Autocheck
• Mount the instrument in the CTD frame
• Connect the analogue cable to CTD
• Configure CTD input to record the UVP6 analogue data
• Install the Data (Octopus) cable if necessary
• Charge the battery
Protection cap
Battery
Battery charger Battery charger
Battery
UVP6 Camera
Connector grease
Dummy
Data (Octopus cable)
USB-serial adapter
Analog cable
Y cable Connecting arm
Light cable
Light (hiden)
Battery fixation rings
CTD Kit
* The UVP6 could also be powered using the data cable AC power unit and connecting the cable directly on the UVP6 camera but we DO NOT recommend this procedure as the many connexions on the camera may damage the bulhead connector (MCBH8M)
or
In this example, the UVP6 analogue cable is connected on the Auxiliary connector 3.
The analogue cable is designed to have the UVP6 connected either on voltage 0, 2, 4 or 6 unless a Y cable provided by Seabird is utilised to connect two sensors on the same auxiliary connector.
A1 : the concentration of particles/Litre equivalent to 1 vdc.
=> Gain_for_analog_out / 5
UVPapp : CTD programing
Gain for analog out : the concentration of particles/Litre equivalent to the 5 vdc maximum output of the analogue connexion (a saturation of the output to 5 vdc due to a low gain value will not damage the UVP6 or the CTD input).
Frame top view
Frame top view
D	C
A	B
The UVP6 can be mounted in any of the 4 "corners" of the CTD frame (A, B, C or D). The UVP6 camera and connectors are just behind the bottles.
The arm is not parallel with the CTD frame (red dashed lines).
The bottle above the UVP6 camera must be smaller than the others. The bottom of the light unit is 3-4 cm above the ship deck.
The Data connector is accessible but also protected.
The bottom of the battery is by 1 cm above the screw of the light. Add some rubber between the kit and the CTD frame
DATA connector
Shorter bottle above camera
BATTERY dummies
• Pressure offset : the vertical distance between the pressure sensor (on top of the camera when in vertical position) and the imaged area (usually set to 0.5m)
• Pressure for auto start : pressure allowing the UVP6 to boot and start acquisition (typically 10 dbars for a 20-35m soaking of the CTD)
• Pressure difference for auto stop : the pressure difference to stop the acquisition when the UVP6 is raised up at the end of a profile (typically 50m)
• Gain for analogue out : the number of particles equivalent to the 5 vdc maximum output of the analogue connexion (a saturation of the output to 5 vdc due to a low gain value will not damage the UVP6 or the CTD input).
UVP6 deployment in CTD mode
• Connect to UVP6
• Go to the Data/Download menu
• Get File List to recover the list of sequences in the instrument
• Download the missing data (or selected data)
Before disconnecting the Data (Octopus) cable and the Power from the battery after downloading the data, it is recommended to perform :
1. Synchronize time
2. Autocheck
Carefully fill in the SAMPLE metadata
Select PRESSURE for
CTD data
SELECT FIRST and LAST
IMAGE manually and/or using the graph below (also see the deployment graph)
   Values for the vertical black line
  Click on any of the axis to scroll or shift the axis of the graph
The LEFT dashed line indicates the FIRST IMAGE
Move the black line to display the values
The RIGHT dashed red dashed line indicates the LAST IMAGE
• Process Data to
• get the particles information
• allow to export PLOTS
• allow to export files to OVD*
• Prepare data for EcoPART
• Process Images to :
• allow to visualize vignettes
• prepare images for EcoTAXA
• View vignettes to check their quality (EcoTAXA imported images are labelled and contain an scale bar)
You can visualize the graphs from the Result folder of the project
Yovu can isualize the vignettes using the UVPapp viewing tool
It is now possible to delete the data in the instrument by reconnecting to the instrument. Note that the data deletion apply for all recorded sequences.
DO NOT forget to IMPORT your data and share them on EcoPART and EcoTAXA.
CTD samples:
• uvp6_sn000130hf_2023_apero_pp_ctd
Aqualog profiler (UVP6LP)	Bioness multinet (UVP6HF)
GEOMAR CV0 mooring	AWI Antaros Svalbard mooring (under ice)
BAY of BREST
VISUTRAP
DUO
VISUTRAP SINGLE
BAY of BREST	BERMUDA reef	WEDDEL sea
75Wh Hydroptic battery
1700Wh Develogic
battery
No solution today =>
• Orient both the camera and the light downward
• Organise mechanical cleaning if in shallow waters
The UVP6 can be set to start automatically the acquisition either immediately or after a defined delay
The vertical "distance" between the pressure sensor and the
imaged field can be documented
The acquisition frequency can be up to 20 Hz for HF and up to 1.3Hz for LP. If set to a higher value, the UVP6 will do its best.
The RS232 data can be sent after the analysis of blocs of images
(a bloc can be 1 image or more)
Activate the sending if you want to monitor/record the RS232 data frames. It drains a little bit more power and slows the
acquisition.
The vertical "distance" between the pressure sensor and the imaged field can be
documented
The acquisition frequency can be up to 20 Hz for HF and up to 1.3Hz for LP. If set to a high value, the UVP6 will do its best.
The RS232 data can be sent after the analysis of blocs of images (a bloc can be 1 image or more)
           Activate the sending if you want to monitor/record the RS232 data frames. It drains a little bit more power and slows the
acquisition.
The UVP6 will look at the timetable for acquisition to start every 30min.
The first step is to MERGE the sequences (if necessary).
Day/Week/Month ???
The second step is to create the samples from the sequence list.
ENABLE the TIME option (it should be a time series)
• Set the integration time (binning) for EcoPART : memory / resolution (ex: 1h / month, 1min / 1H)
• Set the constant depth if no pressure sensor on the UVP6
NO pressure data
In this sequence, you can create :
• 3 TIME samples
• 1 PRESSURE sample
Pressure data recorded
In this sequence, some images are overexposed.
It could happen at the surface (check BLACK 2 px) or near the bottom due to the resuspension of particles (no impact on BLACK 2px).
TIME with merge:
• uvp6_sn000004lp_2023_dyfamed_ visutrap_stock
DO NOT forget to IMPORT your data and share them on EcoPART and EcoTAXA.
Seaexplorer gliders (alseamar)	Seaglider (CSCS)	Slocum (Teledyne-CSCS)
Seaexplorer gliders (alseamar)
CONTINUOUS
PT_mode = 2
• the platform starts/stops the acquisition
• the UVP6 acquire and process the image frames at its own frequency using the pressure from its own pressure sensor if available
   The vertical "distance" between the pressure sensor and the imaged field can be documented (set to 0 as the UVP6 is placed horizontally)
• The glider must be programmed in order to stop the UVP6 acquisition at the surface (during satellite transmission) and at the bottom in order to ease the automatic processing of the sequences.
• We recommend to keep the same configuration for a whole deployment/cruise/project to keep the same sampling effort.
• Depending on the available power, we recommend to use the highest sampling rate.
Same sampling rate configuration
Depth slice
Images per bloc
UVP6
images bloc frequency
Background noise measurement interval
UVP6 config
Mean power consumption
all
1 image/bloc
0.3Hz
1 black every 10
ACQ_ALS_022H
0.22W
Depth adapted configuration
There are 10 usable acquisition configurations with different image and black frequencies
• The 2Hz frequency forces the UVP6 to run at its faster speed
• The 0.5Hz frequency is excluded as it create more noise than the other frequencies (see BLACK measurements)
The UVP6 records one sequence per acquisition
It may be necessary to merge the sequences from the same profile in case of depth depending configuration (from the same ascent for example)
NO UNDO ! Safety backup before
Hundreds of sequences
We developed a Matlab script to create the many samples automatically
UVP6_samples_creation https://github.com/ecotaxa/UVP_toolbox
- There is a "How To" at the beginning of the uvp6_create_samples.m file
- It requires the "flying" data from the glider and a precise organization of the files in the uvp6 project.
*raw*.#.gz files in a Seaexplorer uvp6 project	p[sn]####.nc files in a Seaglider uvp6 project
• The sample/profiles are automatically named.
• The Lat/Long are computed from the glider data.
• The first and last image are automatically detected.
GLIDER sample creation :
• uvp6_sn000003lp_2022_sea002_m496
DO NOT forget to IMPORT your data and share them on EcoPART and EcoTAXA.
NKE CTS5 float
Examples of the trajectories of few profiling floats
PILOTED
PT_mode = 0
• the float starts/stops the acquisition
• the float triggers each bloc of image frames sending a command containing the pressure information (the pressure sensor is useless)
The programming is done by OctOs for now
UVP configurations
Images per bloc
Image
frequency in a bloc
Background	noise
measurement interval
Embedded recognition
ACQ_NKE_0
1 image/bloc
NA
1 black every 40
NO
ACQ_NKE_1
1 image/bloc
NA
1 black every 10
NO
ACQ_NKE_2
1 image/bloc
=1.3Hz
1 black every 10
TAXO_NKE_0
ACQ_NKE_3
2 image/bloc
=1.3Hz
1 black every 40
TAXO_NKE_0
ACQ_NKE_4
5 image/bloc
=1.3Hz
1 black every 40
TAXO_NKE_0
ACQ_NKE_5
10 image/bloc
=1.3Hz
1 black every 40
TAXO_NKE_0
ACQ_NKE_6
1 image/bloc
=1.3Hz
1 black every 10
TAXO_NKE_1
ACQ_NKE_7
2 image/bloc
=1.3Hz
1 black every 40
TAXO_NKE_1
ACQ_NKE_8
5 image/bloc
=1.3Hz
1 black every 40
TAXO_NKE_1
ACQ_NKE_9
10 image/bloc
=1.3Hz
1 black every 40
TAXO_NKE_1
APMT software from NKE
APMT software from NKE : UVP6 configuration
The different acquisition configurations allow the float to change the uvp6 images frequency and black frequency for the parking and the ascent.
The float sends data averaged by depth slices.
Recommended settings
It is recommended to keep the same sampling efforts during a project and possibly keep the following setting all times (power depending) to make data fully inter-comparable between float.
As for gliders, it is recommended to avoid using the 0.5Hz acquisition frequency to limit the internal noise of the sensor.
The UVP6 data are available on the ARGO portal. The files are provided in a netcdf format.
• The data and metadata delivered by the UVP6 to the float are available.
• The LPM and TAXO concentrations are computed as well as the adjusted pressure.
• The netcdf format is described in an official document to be published ASAP.
There is no official pipeline from the ARGO- netcdf yet but there are many tools to read the netcdf files from ARGO (Matlab, R, Python...).
In the near future, EcoPART will get the data automatically from the ARGO portal if people create their associated projects in the application and properly set the link.
In most cases, people recovering a float with a UVP do not have the cable to download their data. The UVP6 must not be dismounted (do not remove the camera and light from the UVP6 connecting arm for shipment).
The UVP6 deployed on floats do not have any pressure sensor to drop their cost and their power requirement (the pressure comes from the float sensor). Their usage for other purposes is thus limited.
In addition, the recovered UVP6 had spent many months at sea and requires a possible upgrade for further deployment (the float will also be maintained and upgraded by NKE).
• The UVP6 should be sent to PIQv for post-cruise calibration, data download and possible firmware upgrade
• The UVP6 will then sent to NKE to be set again on a new or upgraded float
CHECK with PIQv for post-cruise maintenance (calibration, data download)
In case of a recovery of the float, a Matlab pipeline exist to process the raw data downloaded from the UVP6.
There is one sequence per UVP6 type of acquisition or zone.
There are multiple acquisitions per sample/profiles and per parking
Merge the sequences from the same profile and from the same parking
Hundreds of sequences
The Laboratoire d'Océanographie de Villefranche developed a Matlab script (loaded on GitHub) to create samples automatically from the float metadata.
UVP6_samples_creation : https://github.com/ecotaxa/UVP_toolbox
• A "How To" is provided at the beginning of the uvp6_create_samples.m file
• The tool requires the data from the float (from ARGO) and a precise organization of the files in the uvp6 project.
*.nc files in a recovered nke float uvp6 project
The metadata from the float must be recovered from the ARGO portal.
• The samples are automatically named.
• The Lat/Long are obtained from the float data.
• The first and last image are automatically detected.
NKE CTS5 float
Seaexplorer ALSEAMAR gliders
Seaglider
Coastal EGIM platform
EMSO ANTARES @ 2300m	VICTOR ROV
The vertical "distance" between the pressure sensor and the imaged field can be
documented
PT_mode = 0 for piloted and 2 for continous.
The acquisition frequency can be up to 20 Hz for HF and up to 1.3Hz for LP. If set to a high value, the UVP6 will do its best.
The RS232 data can be sent after the analysis of blocs of images (a bloc can be 1 image or more)
Number of blocs per platform's command
(USELESS, keep to 1)
          Activate the sending if you want to monitor/record the RS232 data frames and the
commands acknowledgment.
CONTINUOUS
PT_mode = 2
• the platform starts/stops the acquisition
• the UVP6 acquire and process the image frames at its own frequency using the pressure from its own pressure sensor if available
PILOTED
PT_mode = 0
• the platform starts/stops the acquisition
• the platform trigger each bloc of image frames sending a command containing the pressure information (the pressure sensor is useless)
We can provide a document to help setting a complete autonomous piloting by any platform.
The Ethernet data & image download is not included.
General protocol in SUPERVISED mode
- The sensor is powered ON
- Acquisition starts with a START command, including the name of the setting table
- The sensor returns HW and ACQ data lines (TAXO line if activated)
- The sensor returns DATA lines
- On demand by "PT" commands if PILOTED
- At its own frequency if CONTINUOUS
- The acquisition is stopped
- By powering OFF (file safe system)
- By sending a STOP command (preferable)
- The sensor is turned OFF (if necessary)
PILOT Commands
descriptions
UVP6 responses
$USER

Switch to user mode. Default mode after power on
$start:NNNNNNNN

Starts acquisition using the acq config name NNNNNNNN
$startack

$start:NNNNNNNN,YY YYMMDD,HHMMSS

Starts acquisition using the acq config name NNNNNNNN. Adjusts the date and time.
$startack

$stop

Stops the acquisition.
$stopacq

$pt

Triggered a bloc of frames in PT_mode=0. PP.PPP is the pressure from the platform.
$autocheck

Starts the autocheck of the instrument
$RTCread

Read the UVP6 time
$RTCset:YYYYMMDD,H HMMSS

Set the UVP6 date and time
$VERSION

Ask for the firmware version
$POWERPUset:1

Power ON the processing unit of the instrument
$POWERPUset:0

Power OFF the processing unit of the instrument
$PU:makefs

Empty the whole memory. Need the PU to be ON.
It is possible to get all detailed information about the acceptable commands to send to the SUPERVISING UNIT by typing the $HELP
 command.
It is possible to get all detailed information about the acceptable commands to send to the PROCESSING UNIT by typing the $PU:help
 command after powering the processing unit ON sending the specific command to the supervising unit.
Error message
description
comment
$starterr:21

START_ERROR_POWER_BACKUP_MODE: the UVP has lost the main power supply.
If in acquisition, the UVP6 will stop acquisition (send $stopacq
 message) and properly close the data and image files before shutting down completely
If in sleeping mode, it will wait till the power is turned ON again (and send a
$starter:20
 message at that time). If the internal backup battery drops, it will shut down completely.
This message is normal if the power supply has been intentionally removed.
$starterr:22

START_ERROR_POWER_RECOVERED: Following a switch to safety mode (power backup mode), the UVP informs that the main power supply has been restored.
$starterr:30

START_ERROR_INVALID_COMMAND: the UVP does not recognize the received command because :
- wrong syntax 

- nonexistent command

- SU command sent in USER mode.
Check and send again the command.
$starterr:31

START_ERROR_CMD_BAD_INTERPRETATION: the UVP recognizes the command, but cannot interpret it because the number or type of parameters received is incorrect.
Check and send again the command
$starter:33

START_ERROR_CMD_RECEIVED_WHILE_SLEEPING: the UVP fails to interpret a command received during a sleep period. The reception of the command has caused a wake-up, but part of the characters have been lost, making it impossible to interpret.
A delay of 5 seconds is launched after the error, in order to allow the command to be resent.
Send again the command.
The error can be send while the UVP6 is busy like during an acquisition or usually when in sleeping mode between image frames.
$starterr:44

START_ERROR_OVEREXPOSED: The image is not processed, but the acquisition cycle continues normally.
A frame with 0 fields will be transmitted to the vector (the frame follows the error). Do not take it into account. This error will appear when the vector approaches the surface during the day or when the turbidity is too high.
When the UVP6 is powered ON, it responds :
• the HW line containing the settings from the HW table of the instrument :
HW_CONF,000003LP,0,UNDEFINED,0,000124VE,1,150,250,1,0.000,393819,10000,2,192.168.0.128,0,455,6,20,2342.000,1.136,73,0.670,20200924,202010130814,marc.picheral@obs-  vlfr.fr,40.3,50.8,64,80.6,102,128,161,203,256,323,406,512,645,813,1020,1290,1630,2050

When the ACQUISITION starts, the UVP6 responds :
• the ACQ line containing the content of the selected ACQ table for the sequence :
ACQ_CONF,ACQ_ALS_022H,2,0.500,1,1,0,0,1,0,10,2,620,1.5,10,10,0,1000,0,40,marc.picheral@obs-vlfr.fr,0,393788

• the TAXO line containing the content of the selected TAXO table for the sequence if activated:
TAXO_CONF,TAXO_NKE_0,Mglob_20220421,65535,20,93382,56693,85123,27642,45074,11514,13381,56317,11758,342,25942,85008,93973,84963,85076,85011,85024,93491,85039,85025,0,0,  0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0

• The acknoledgement of the command:
$startack

When an ACQUISITION stops, the UVP6 responds
• The stop message:
$stopack

For each bloc of images, the UVP6 sends
1. The "BLACK" data frames acquired with no light (to measure the noise, instrumental or environmental) :
BLACK_DATA,1554.02,20220223,040051,1,23.69,48,0,4,0,2,0,1,0,1,1,1,2,0,0,1,0,0,2

or
1. The classification frames present when the embedded classification is activated (before the LPM frame)
TAXO_DATA,1,10,759485,157,8,6966,43,8,17181,59,8,4778,41

2. The LPM data lines acquired with the light :
LPM_DATA,1554.16,20220223,040054,1,23.69,38,0,6,1,4,0,0,2,0,1,1,3,0,0,1,0,0,2,23,0,18,20,21,0,0,22,0,32,31,31,0,0,42,0,0,51

In case of an overexposed frame
1. The overexposed error is sent before the data frames:
$starter:44

2. The frames have "0" in place of numerical data:
TAXO_DATA,0
 LPM_DATA,542.46,20220202,085445,0,26.69,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0

or BLACK_DATA,0.00,20220210,134759,0,24.25,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0

LPM data frames (acquired with the light ON) :
LPM_DATA,1554.16,20220223,040054,1,23.69,
38,0,6,1,4,0,0,2,0,1,1,3,0,0,1,0,0,2,
23,0,18,20,21,0,0,22,0,32,31,31,0,0,42,0,0,51

METADATA
Type
Pressure
Date
Time
Number of images used
Temperature
LPM_DATA
1554.16
20210428
040054
1
23.69
DATA
Overexposed frame have "0" for the number of images used and for all data
Black data frames (acquired with the light OFF) :
BLACK_DATA,1554.02,20220223,040051,1,23.69,48,0,4,0,2,0,1,0,1,1,1,2,0,0,1,0,0,2

METADATA
Type
Pressure
Date
Time
Number of images used
Temperature
LPM_DATA
1554.16
20210428
040054
1
23.69
DATA
Class number
#1
#2
#3
#4
#5
#6
#7
#8
#9
#10
#11
#12
#13
#14
#15
#16
#17
#18
Number of part
38
0
6
1
4
0
0
2
0
1
1
3
0
0
1
0
0
2
Overexposed frame have "0" for the number of images used and for all data
TAXO data frames :
,8,17181,59,8,4778,41

METADATA
DATA
Overexposed frame have "0" for the number of images used and no data
Volume in cubic pixels (px^3) Grey level (0-255)
The embedded classification lets the UVP6 to predict, store and send a classification of large objects (same as downloaded vignettes). This function is essential for vectors that cannot be recovered as profiling floats. It may also be useful on gliders to modify the mission (providing that the glider can send the classification data to shore).
The LOV has published a "universal" classification model that can be used. This model is set in all UVP6 installed on NKE float since 2022. This model will not be modified for years as we want to keep a continuity in the results. The new released float will thus be deployed with this version for many years.
It is also possible to create your own classification model using EcoTAXA and a toolbox available on GitHub.
The acquisition table provides a new parameter pointing to a taxonomic table
TAXONOMIC table:
taxo file in config folder It contains :
• Name of the classification model
• Maximum size for objects to be classified
• Total number of classes
• The links between the taxonomic category number (00 - 39) and the EcoTAXA corresponding taxonomic Id of the category
Classification models Taxonomic settings (cat-Id)
The classification model must be store in the memory of the UVP6 with OctOS
Ricour et al.
The classification model will be published by Ricour et al. (2024). It is based on a large learning set of UVP6 images visible on EcoTAXA and uses the features-based classifier XGBoost algorithm.
It is optimized to reduce to the loading and computing times and save the energy provided by the CTS5-NKE float.
Only object bigger than 645µm are classified in 20 morphological classes/categories.
The classes/categories Ids and the images issued from EcoTAXA
Ricour et al.
A toolbox is available to create your own classification model : https://github.com/ecotaxa/uvpec
The toolbox allows you to train a model from a learning set, evaluate it from a test set and create the model and the associated UVP6 taxonomic configuration file to be loaded in the UVP6.
The learning set can be exported from EcoTAXA.
There is no tool to create a test set from a learning set or to manipulate a set of images.
DO NOT forget to IMPORT your data and share them on EcoPART and EcoTAXA.
Raw images are used in special cases that need a homemade process.
Raw image mode:
- The vignettes are not created by the UVP6
- All raw images are saved
- The particles data may be computed normally as well (depending on the selected acquisition parameter)
Particle trajectories control figure
M. Laget et al. (submitted, 2023)
BAY of BREST
VISUTRAP
DUO
VISUTRAP SINGLE
DO NOT forget to IMPORT your data and share them on EcoPART and EcoTAXA.
The ecodata folder contains one sub folder per processed sample.
Each sub folder contains :
• a ZIP file of particle data for EcoPART
• a ZIP file of images for EcoTAXA
Creation of a site in Filezilla :
Host :	plankton.obs-vlfr.fr
Protocol :	FTP - File Transfer Protocol
Encryption :	Only use plain FTP (insecure)
Logon Type :	Normal
User :	ftp_plankton
Password :	Pl@nkt0n4Ecotaxa
1. Create or open the folder of your institution/lab.
2. Copy the whole uvp6_sn... project in that folder
1. Log In EcoPART
2. Go to the PARTICULE PROJECT MANAGEMENT in EcoPART.
3. Create a new Particle project
Clic to browse the FTP depository
Expand and browse the FTP Data to import to find the project that you imported via Filezilla
Useless section
Select the project
The title is automatically defined using the project name
The project manager is the registered people (can be modified)
The associated EcoTAXA project is automatically created and named
• The instrument type and serial number are automatically detected
• The operator, chief scientist, data owner, cruise,ship and project information are issued from the UVPapp project metadata. These information are essential as they will be associated with the data downloaded from EcoPART. If not documented, they should be edited in the original UVPapp project, updated on the FTP and read again in this window
The descent filter is automatically applied for pressure profiles
The main project page indicates the useful information such as the calculated delays. It provides the link to the Import sample tool and allows to edit or reimport the project metadata.
Privacy calculated delays
The top of the Import page provides information on the procedure and the list of samples waiting to be imported.
It also indicates the path to the data (FTP).
The bottom of the import page provides the list of already imported samples.
The next screen shows the process of the task.
The importation task may take a while but it is asynchronous and continues after closing the browser.
END of PROCESS
You can visualise (DO NOT EDIT) the
sample metadata.
You MUST check the imported data
You check the DATA selection (in red) related to the First and Last image selected in UVPapp.
Read the info
The legend of the different colors is available
The colors of the dots indicates your permissions on the data
Use the filters or the graphical selection
Check the selection statistics
1. Select the corresponding project in EcoTAXA (same file name than in EcoPART)
2. Go to the Import images and metadata menu
3. Select the WHOLE project (not the WORK folder)
4. Wait for the vignettes to be imported
The vignettes are now inverted (white background) and a scale bar is added
PIQv website : https://piqv.imev-mer.fr
DO NOT forget to IMPORT your data and share them on EcoPART and EcoTAXA.
###################################################
## FIN DOCUMENT 2
###################################################

// =======================================================================
// AJOUT DU troisieme MANUEL
// =======================================================================
###################################################
## DEBUT DOCUMENT 3 : ECOTAXA_Import_UVP6_data_in_Particule_Module
###################################################
ECOTAXA_Import_UVP6_data_in_Particule_Module.
Summary
1 Preliminary verification using UVPapp	2
2 General procedure	2
2.1 General information	2
2.2 Load project into the Ecotaxa FTP depository	3
2.3 Ecotaxa Importing steps	3
2.3.1 Standard procedure	3
2.3.2 Procedure for project whichi images are already imported in Ecotaxa	3
2.4 Project creation in EcoPart	4
2.5 Import sample	5
2.6 Quality Check : Images start & last for Depth profiles (samples)	5
2.7 Verification of positions of the samples	7
2.8 Quality Check : Large Particulate Data	9
2.9 Import images	9
1 Preliminary verification using UVPapp
The data processing application is UVPapp.
The data to be imported in Ecotaxa and Ecopart must be checked for complete processing of all samples (profiles) in UVPapp.
All metadata, including "first image" value should be carefully filled in the sample metdata sections before processing.
The Project metdata must be documented before you import the data in EcoPart.
We do consider that the original project is on your drive, possibly copied into the PIQv image drive and that any change must be done on the project using UVPapp and then propagated to the EcoPart/EcoTaxa projects by re-importing the metadata and data.
2 General procedure
2.1 General information
We recommend that you read the information form the information button on top of the Particle module page in order to get information about EcoPart.
You must also be registered user in Ecotaxa and obtain the Project Creation permission to create a new project in Ecopart. Request this permission if necessary.
2.2 Load project into the Ecotaxa FTP depository
See the dedicated TUTORIAL for the FTP transfer of your data to be imported (do only the FTP transfer). The importation of the images in Ecotaxa will be done AFTER the particles data have been imported in EcoPart.
The project must not be zipped to allow its importation in EcoPart. The file transfer may thus take long time. An alternative solution can be to send the PIQv a USB drive containing the projet or load a zipped project and ask us to unzip it into the local project drive of the server. The PIQv cannot guaranty a rapid service as we may be busy with other tasks but we will always keep you informed.
2.3 Ecotaxa Importing steps
Here we detail the standard procedure for new projects. Users can reuse this information to proceed with the second procedure in case images have already been imported.
If used at sea on a mobile instances of Ecopart/Ecotaxa, the importation procedure can be repeated everytime new samples get available in the project. A final import of the particle data will be necessary when back on land, using the FTP transfer of the data while the classified vignettes can be imported separately after a backup export in ecotaxa.
2.3.1 Standard procedure
1. Create the project in EcoPart
2. Check project metadata
3. Import samples
4. Check imported data
5. Import images in Ecotaxa
2.3.2 Procedure for project whichi images are already imported in Ecotaxa
1. Create the project in EcoPart
2. Check project metadata
3. Link the Ecotaxa project (by selecting the proper project)
4. Import samples
5. Check imported data
2.4 Project creation in EcoPart
It is recommended that you read all information buttons in the page if you are not familiar with EcoPart.
? On the Ecotaxa home page, click on "Action" button > "Particle projects management" tool > "Create a new Particle project" green button
? Name your project (Particle Project title) by coying the name of the Project to be imported. Select the root folder of your project from the FTP or the local UVP drives. The project name should start by "UVP6" according to the model of your instrument.
? The metadata from the "cruise_info.txt" file of the project will be automatically filled when your press "Read metadata" :
If the values are not correct or documented, you can edit the Project metadata in UVPapp, re- upload the header file from the meta folder into the FTP and then click on "Read Metadata" button to update.
? The standard procedure is to use the "Create Ecotaxa project" tool to create a new project in which you will later import the images from the project. The alternative option is to link an existing Ecotaxa project if you already loaded the images (not recommended).
? Set carefully the project owner from the list of Ecotaxa registered users. This people will be the only person allowed to later access to the project management page.
? Change the different delays if necessary
? Click on the "Save" button
You get then to the Project sample dashboard which will be empty at the start of the operations.
2.5 Import sample
Select the "Import sample from disk" tool to import the samples.
2.6 Quality Check : Images start & last for Depth profiles (samples)
Click on " SHOW IMPORTATION RESULT GRAPH "
The control figures will be displayed, use the selected zoom setting :
The name of your cast from the raw folder
The red line represents the range of images (between First and Last images) used for the treatments
The first image must to correspond at the depth where the UVP6 started to provide good data (after start of the descent and not impacted by sunlight).
The last image must to correspond at the depth where the UVP6 finished the dive and avoid keeping the data from the bottom standby if exists.
Procedure to modify the range of images:
1. Use UVPapp to edit the sample (profile) metadata and change the first and last image information (if necessary).
2. Re-process the DATA and IMAGES in UVPapp
3. Re-import the header file from the meta folder of project (via FTP if necessary)
4. Re-import the files (*_Images.zip and *_Particule.zip) of the corrected samples (profiles) from the Ecodata folder of the project
5. Redo the step ? to read the updated metadata
6. Re-import the samples in EcoPart
2.7 Verification of positions of the samples
It is then usefull to check that the samples (profiles) are correctly positioned on the map.
1. On the Ecotaxa home page, click on "Action" button > "Particle Module" tool
2. Choose your project in the "Particle Project" field
3. Click on the "Apply filters" button to select the samples of your project
4. Zoom in the map to check their positions
Procedure to correct the positions :
We do recommend that you correct the positions in the project using UVPapp and then import the metadata again instead of correcting these values in the sample editor of EcoPart.
1. Use the Edit Sample tool in UVPapp and check/correct the LAT/LON using the information from the datashets or the automatically recorded positions from the CTD files.
2. Re-import the header file from the meta folder of the project (via FTP if necessary)
3. Redo the step ? to read the updated metadata
4. Re-import samples selecting the "Import metadata only" option
2.8 Quality Check : Large Particulate Data
It is recommended to visualize the vertical profiles of particle abundance and biovolumes in EcoPart to check that all profiles are coherent.
2.9 Import images
After you completed the import of the particle profiles, you can import the images in the EcoTAXA project that was automatically created along with the particle project. You will provide the permissions to the EcoPART project by inviting annotators in this EcoTAXA project.
IMPORTANT WARNING :
You must select the project folder in EcoTAXA and not the individual ZIP archives of each sample from the ecodata folder of the project.
###################################################
## FIN DOCUMENT 3
###################################################

// =======================================================================
// AJOUT DU quatrieme MANUEL
// =======================================================================
###################################################
## DEBUT DOCUMENT 4 : UVP6 Specifications for supervised piloting
###################################################

UVP6
Specifications for supervised piloting and
the processing of real time data


1.
Introduction ........................................................................................................................................... 3
2. General description of the functioning of the UVP6 ............................................................................. 3
3. Description of the global metadata and data flows .............................................................................. 3
4.
Instrument check sequence .................................................................................................................. 6
5. Acquisition sequence............................................................................................................................. 8
5.1. Acquisition strategies .................................................................................................................... 8
5.2. Communications ............................................................................................................................ 8
5.3.
Summary of the data stream from the UVP6 ................................................................................ 9
6. UVP6 to vector transmitted metadata and data L0 ............................................................................ 10
6.1. UVP6 to vector metadata L0 ....................................................................................................... 10
6.2. UVP6 to platform or vector LPM data L0 .................................................................................... 15
6.3. UVP6 to vector black data L0 ...................................................................................................... 16
6.4. UVP6 to platform or vector taxo data L0 .................................................................................... 16
7. Reduction process by the piloting platform or vector ........................................................................ 17
7.1. Description .................................................................................................................................. 17
7.2.
LPM data example ....................................................................................................................... 19
7.3.
Taxo data example ...................................................................................................................... 19
8. Changes from older versions ............................................................................................................... 20
8.1. Version 2022.01 ........................................................................................................................... 20
8.2. Version 2021 and older ............................................................................................................... 23
2

1. Introduction
This document presents the specifications for the supervised piloting and the real time process of the
UVP6 data by an autonomous vector. It first describes the instrument checks and piloting commands
needed to pilot the UVP6. It also describes the UVP6 transmitted data, gives advises for the data processing
by the vector and what is expected to be received on land.
Detailed information about the UVP6 instrument can be found in the user manual.
This document applies for versions more recent than 2022.01. Changes compared to older versions are
described at the end of the document.
2. General description of the functioning of the UVP6
Communication between the UVP6 and the vector are done by rs232 serial port. The downloading of the
raw UVP6 data using the Ethernet connexion is not described in this document.
The UVP6 will automatically send an information frame when powered. Other information, like the
acquisition configurations present in the UVP6, can be checked by special commands. This has to be part
of an initial checking procedure by the vector in order to verify that the programming of the UVP is correct.
There are three different kinds of configurations: the hardware configuration “hw”, the acquisition
configuration “acq” and the taxonomic configuration “taxo”. The hw configuration is about instrument
parameters such as serial number and calibration. The acq configurations are 10 config files with the
parameters for 10 acquisitions, such as images frequency and image trigger mode. The taxo configurations
are config files describing and aiming at a classification model.
Each acquisition configuration of the UVP6 allows to select different frame rates, black frame rates, size of
frames blocs, etc. The configurations are pre-set in the UVP6 and will be selected depending on the uses
of the instrument. The vector will start an acquisition by selecting the chosen configuration, and will stop
it with a simple command. During an acquisition, the UVP6 will record data and sending a data frame per
bloc of images until receiving a stop command (or being powered OFF).
For the UVP6 embedded classification, the UVPapp application permits to load only one standard
classification model even if expert operators can create their own models using the tools designed at
Laboratoire d’Océanographie de Villefranche and available on GitHub.
The UVP6 data could be too large to be entirely transmitted by satellite. The vector must thus reduce the
size of the data, mostly by depth average. The complete data could be recovered with the recovery of the
sensor.
3. Description of the global metadata and data flows
The metadata and data flow described is the “remote data flow” through satellite. The path goes through
the vector before transmission to the land. Communication between the uvp6 and the vector is essential,
3

as well as the satellite transmission. This could limit the data flow and require the vector to apply a
reduction process to the data. Metadata and data must be formatted on land to fill the EcoPART standard.
REMOTE Dataflow : data and piloting |
[RECOVER Dataflow : raw data, images and piloting |
Figure 1: uvp6 remote and recover data flow. Picheral et al 2021
The instrument metadata are hardware, acquisition and taxonomic configurations. They are all recovered
from the uvp6 during the instrument check sequence at the beginning of the mission and transmitted
directly to land. The metadata flow steps include a transmission from the uvp6 to the vector, a
transmission from the vector to land and a final formatting.
4

Metadata flow
UVP6
Oyen
Renee
vector
Data center
eee
Remsuulesieu)
Under vector responsibility
Uvp6 metadata frame
©Uvp6 metadata in vector
Uvp6 metadata after satellite
transmission
Uvp6 metadata formatted
for ecopart
The data flow is for particles, black and taxonomic data. They are transmitted to land after acquisition and
when possible. Due to the limited satellite transmission, an additional step, the reduction process, is made
by the vector to aggregate data by depth or time slices. The rarer black data are never reduced.
5

Data flow
UVP6
vector
Data center
Uvp6 to vector
transmission
Reduction
[elnetereis
Satellite
transmission
Uvp6 data frame
Uvp6 data in vector
Uvp6 data after the
reduction process
Uvp6 data after satellite
transmission
Uvp6 data formatted for
ecopart
Only data and metadata send by the uvp6 to the vector (L0) are described in this document.
Advices for the reduction process are also given.
4. Instrument check sequence
The goal of the check sequence is to verify that the uvp6 contains the right configurations that will be used
during the mission.
At the beginning of the mission, the vector should check the configurations of the instrument. After
powering on the instrument, the vector can have access to the hw configuration, the different acq
configurations and the possible taxo configurations.
The acq configuration names from the uvp should be checked against the acq configuration names set in
the vector. All the uvp configurations should be recovered from the UVP6 and sent to land at the beginning
of the mission (as a minimum).
In addition, an autocheck procedure should be run in the uvp6. A failure to that procedure tell that the
uvp has a problem and can not go into mission.
The last field of the HW frame indicates the UVP6 version of the firmware. This document applies for
versions more recent than 2022.01.
Configuration checking sequence
Ask for hw conf
6
TT!O

$HWCONFread

Answer the hw conf line
$HWCONFread:000175LP,0,UNDEFINED,0,000180VE2,0,250,,0.600,393857,10000,2,0,40000,0,16,234
0.000,1.300,73,0.660,UNDEFINED,202204270906,camille.catalano@imev-
mer.fr,50.8,64,80.6,102,128,161,203,256,323,406,512,645,813,1020,1290,1630,2050,2580,ver2022.01


Ask for the first acq conf
$ACQCONFread:0

Answer the acq conf line 0
$ACQCONFread:0,ACQ_00,2,0.100,1,1,0,0,1,0,10,2,620,1.5,50,10,0,1000,0,60,alice.pierret@imev-
mer.fr,1,2,0,NO_RE,393675

Ask for the second acq conf
$ACQCONFread:1

Answer the acq conf line 1
$ACQCONFread:1,ACQ_01,2,0.100,1,1,0,0,1,0,10,2,620,1.5,50,10,0,1000,0,60,alice.pierret@imev-
mer.fr,1,2,0,TAXO_00, 393675

…
Ask for the first taxo conf
$TAXOCONFread:0

Answer the taxo conf line 0
$TAXOCONFread:0,TAXO_0,MODEL_14,65535,12,100000,100001,100002,100003,100004,100005,100
006,100007,100008,100009,100010,100011,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0

The ACQ configuration are saved in a slot (0-9) and have named (typically ACQ_XX) utilized to call the table
via a RS232 command.S
The vector should check the presence of the acq configurations set in its programing (i.e. fi the programing
of the vector require the use of a given UVP6 configuration, this configuration must be present in the UVP
memory).
Autocheck sequence
7

Start the autocheck
$USER

$autocheck

Answer
$autocheckpassed

5. Acquisition sequence
5.1. Acquisition strategies
Each of the ten acquisition configurations of the UVP6 allows to select different frame rates, black frame
rates, size of frames blocs, etc. The configurations are pre-set in the UVP6 and will be selected depending
on the operational requirements. It means that different configurations can be used at different depth,
thus inside a unique profile/sample. The reconstruction of the profile/sample data will be done by the
vector or by a post process on land.
5.2. Communications
Starting an acquisition is made with a $start command possibly including date and time (in UTC) to
synchronize the UVP6 time on the vector-GPS time. Following a start command the uvp replies with the
acq conf line and a potential taxo conf line, and confirms the beginning of the acquisition with a $startack

message.
During the acquisition, the uvp6 sends a data frame per bloc of images, or bloc of black images. The
number of images in the bloc, and the bloc images frequency are defined in the acq configuration. If the
classification is activated, a taxo line is sent before each lpm line.
If the Black image measurement is activated (default setting), an acquisition starts with a black bloc of
images.
Stopping an acquisition is made with a $stop
 command. The uvp can be busy/sleepy so the $stop

command must always be sent twice unless a $stopack
 response is obtained after the first sending.
Confirmation of the end of the acquisition is made with a $stopack
 message.
If a command is sent while the instrument is busy/sleepy, it will send an error message : $starterr:33

If the ambient light is too high and the instrument is overexposed during an acquisition, it is not going to
analyse the image. The potential taxo line only indicates that zero image has been analysed. The lpm data
contains the metadata of the image bloc and only zeros for particules data. Those lines arrive after an
“overexposed error” $starterr:44

Example:
8

$starterr:44

TAXO_DATA,0

LPM_DATA,542.46,20220202,085445,0,26.69,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0
,0,0,0,0

5.3. Summary of the data stream from the UVP6
This is a complete example of an acquisition with black and taxo activated.
bold : commands sent by vector
Italic : answers sent by UVP6
underline : comments
Just after powering ON -> HW conf frame
HW_CONF,000175LP,0,UNDEFINED,0,000180VE2,0,250,,0.600,393857,10000,2,0,40000,0,16,2340.00
0,1.300,73,0.660,UNDEFINED,202204270906,camille.catalano@imev-
mer.fr,50.8,64,80.6,102,128,161,203,256,323,406,512,645,813,1020,1290,1630,2050,2580,ver2022.01


Start acquisition with config ACQ_XX and time setting (UTC) of the UVP6
$start:ACQ_XX,20220223,040051

Two or three (taxo) frames to confirm the beginning of the chosen acquisition
ACQ_CONF,ACQ_XX,2,0.100,1,1,0,0,1,0,10,2,620,1.5,50,10,0,1000,0,60,alice.pierret@imev-mer.fr,
1,2,0,TAXO_0,393675

TAXO_CONF,TAXO_0,MODEL_14,65535,12,100000,100001,100002,100003,100004,100005,100006,10
0007,100008,100009,100010,100011,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0

$startack

First black frame
BLACK_DATA,1554.02,20220223,040051,1,23.69,48,0,4,0,2,0,1,0,1,1,1,2,0,0,1,0,0,2

Data frames, coming after a taxo frame
TAXO_DATA,1,8,1299,43,8,17085,49,8,12379,50

LPM_DATA,1554.09,20220223,040052,1,23.69,33,0,4,2,1,0,1,1,0,1,1,2,0,0,1,0,0,2,23,0,17,21,20,0,21,1
9,0,29,30,35,0,0,43,0,0,50

TAXO_DATA,1,8,1451,42,8,17728,49,8,11166,53

LPM_DATA,1554.16,20220223,040054,1,23.69,38,0,6,1,4,0,0,2,0,1,1,3,0,0,1,0,0,2,23,0,18,20,21,0,0,22
,0,32,31,31,0,0,42,0,0,51

9

…
Black frame
BLACK_DATA,1555.81,20220223,040453,1,24.19,42,0,5,0,1,0,1,1,0,0,0,0,0,0,0,0,1,3

Data frames
TAXO_DATA,1,10,759485,157,8,6966,43,8,17181,59,8,4778,41

LPM_DATA,1555.81,20220223,040454,1,24.19,49,0,1,2,0,1,1,1,0,0,0,0,0,0,0,0,1,3,22,0,17,21,0,19,21,2
3,0,0,0,0,0,0,0,0,41,86

…
Frame to stop the acquisition
$stop

Usual error answer because the instrument is generally busy/sleepy
$starterr:33

Instant re-sent of the stop acquisition frame
$stop

Acquisition stopped
$stopack

6. UVP6 to vector transmitted metadata and data L0
6.1. UVP6 to vector metadata L0
The three metadata frames are described in details here. The first sets of UVP6 may have slightly different
HW and ACQ frames (read about versioning above).
The HWconf frame is automatically sent when the instrument is powered on. The according ACQconf
frame is sent when an acquisition is started, following by the possible associated TAXOconf.
HWconf variable name Type
text
Camera_ref
Acquisition_mode
text
integer
Unit
Explanation
frame name
UVP6 serial number (XXXXXXXX)
0: SUPERVISED mode, 1: AUTONOMOUS mode (including
CTD mode), 2: TIME-programmed mode
Example
HW_CONF
000176LP
1
10

Default_acquisition_con
figuration
Delay_after_power_up_
on_time_mode
Light_ref
Correction_table_activa
tion
Time_between_lighting
_trigger_and_acquisitio
n
Pressure_sensor_ref
Pressure_offset
text
Name of the acquisition configuration automatically
launched when Acquisition_mode = 1
integer min
text
boolean
Optional delay before starting image acquisition when
Acquisition_mode = 1 (AUTONOMOUS)
Light unit serial number
Selection of the lighting correction LUT -> 0: no
correction, 1: light unit correction #1, 2: light unit
correction #2 (default : 1)
integer
µS
Delay between light unit trigger and image sensor
shutter
text
float
M
Pressure sensor serial number (empty if no sensor
installed)
Vertical distance between the image plan and the
pressure measurement point ( >0 if pressure sensor
above image field, if undefined, set 999)
Storage_capacity
Minimum_remaining_m
emory_for_thumbnail_s
aving
Baud_Rate
Black_level
Shutter
Gain
Threshold
Aa
Exp
Pixel_Size
Image_volume
Calibration_date
Last_parameters_modifi
cation
integer MB
integer MB
SD card storage capacity, automatically updated by UVP6
when parameters are modified, do not edit
Minimal memory remaining in the SD card to keep saving
images or vignettes, do not edit
integer
integer
integer
integer
integer
12 bits gray
level
µS
dB
8 bits gray
scale
integer µM²
integer
integer µM
float
date
date
L
YYYYMMDD
HHMM
YYYYMMDD
HHMM
UVP6 RS232 baud rate selection -> 0: 9600 bauds, 1:
19200 bauds, 2: 38400 bauds
Image sensor black level parameter
Image sensor integration time (shutter)
Image sensor gain, do not edit
Threshold for image segmentation (pixels <= Threshold
are considered background)
Calibration parameter (corresponding area in the scene
represented by each pixel)
Calibration parameter (adjusting for specular reflections)
Uncalibrated pixel size (side of the pixel in the image
field)
Image volume
Calibration date for the values in this table
Automatically updated by UVP6 when hardware
parameters are modified
0,6
ACQ_CAL_F
ULL
0
000178VE2
1
250
393857
10000
2
0
64
6
20
2300
1,136
73
0,55
20220504
2,02206E+1
1
11

Operator_email
email
Identification of the operator filling this configuration
table
Min_esd_class_01
Min_esd_class_02
Min_esd_class_03
Min_esd_class_04
Min_esd_class_05
Min_esd_class_06
Min_esd_class_07
Min_esd_class_08
Min_esd_class_09
Min_esd_class_10
Min_esd_class_11
Min_esd_class_12
Min_esd_class_13
Min_esd_class_14
Min_esd_class_15
Min_esd_class_16
Min_esd_class_17
Min_esd_class_18
Firmware_version
float
float
float
float
float
float
float
float
float
float
float
float
float
float
float
float
float
float
text
µM
µM
µM
µM
µM
µM
µM
µM
µM
µM
µM
µM
µM
µM
µM
µM
µM
µM
verYYYY.nn
Lower Equivalent Spherical Diameter for class 01
Lower Equivalent Spherical Diameter for class 02
Lower Equivalent Spherical Diameter for class 03
Lower Equivalent Spherical Diameter for class 04
Lower Equivalent Spherical Diameter for class 05
Lower Equivalent Spherical Diameter for class 06
Lower Equivalent Spherical Diameter for class 07
Lower Equivalent Spherical Diameter for class 08
Lower Equivalent Spherical Diameter for class 09
Lower Equivalent Spherical Diameter for class 10
Lower Equivalent Spherical Diameter for class 11
Lower Equivalent Spherical Diameter for class 12
Lower Equivalent Spherical Diameter for class 13
Lower Equivalent Spherical Diameter for class 14
Lower Equivalent Spherical Diameter for class 15
Lower Equivalent Spherical Diameter for class 16
Lower Equivalent Spherical Diameter for class 17
Lower Equivalent Spherical Diameter for class 18
Firmware version : prefix, year and no
ACQconf variable name Type
Configuration_name
PT_mode
text
integer
Unit
Explanation
frame name
Name used to launch this configuration
0: Triggered by vector, 1: Asks for pressure and time, 2:
Use UVP6 Acquisition_frequency, 3: CTD mode
(mandatory Pressure Sensor)
Acquisition_frequency
Frames_per_bloc
Pressure_for_auto_star
t
float
integer
integer
Hz
frame
decibar
Acquisition frequency (maximum value)
Nb of frames to accumulate and synthesize to send
When in CTD mode (PT_mode= 3), pressure value to
automatically start the acquisition
12
alice.pierre
t@imev-
mer.fr
50,8
64
80,6
102
128
161
203
256
323
406
512
645
813
1020
1290
1630
2050
2580
ver2022.01
Example
ACQ_CONF
ACQ_NKE_
0
0
2
1
0

Pressure_difference_fo
r_auto_stop
Result_sending
Save_synthetic_data_fo
r_delayed_request
Save_images
Vignetting_lower_limit
_size
Appendices_ratio
Interval_for_measuring
_background_noise
Image_nb_for_smoothi
ng
Analog_output_activati
on
Gain_for_analog_out
Maximal_internal_tem
perature
Operator_email
integer
boolean
boolean
decibar
When in CTD mode (PT_mode= 3), pressure drop from
deepest value to automatically stop the acquisition
0/false: results are never sent - 1/true: synthesized results
are sent through RS232 after each bloc
0/false: do not save - 1/true: save synthetic data for a
potential delayed
request (usefull only for
troubleshooting)
integer
integer µM
How to save Images -> 0: don't save, 1: save whole raw
image, 2: save selected vignettes only
When saving vignettes (Save_images= 2), minimum
object size (ESD) to save vignette, utilizes Aa and Exp,
(default : 645)
float
integer
integer
boolean
integer
integer
email
object
°C
bloc
frame
When saving vignettes (Save_images= 2), vignette size to
actual object size ratio (default : 1.5)
Background
noise measured every 'interval' (bloc
acquired without flashing). Disabled if zero
Nb of images to measure temperature (for safety stop)
and average particle abundance for the analog output
Activation of the particle abundance analog output :
0/false: disabled - 1/true
Smoothed number of counted objects for 5 volts analog
output voltage
Maximum internal temperature to cause a security stop
Identification of the operator filling this configuration
table
Aux_mode
integer
Auxiliary output activation mode (0 : disabled, 1 : enabled
all sequence, 2 : enabled during Aux_param_1 at the start
of the acquisition and before the start of the sequence,
during Aux_param_2 after the sequence and before the
end of the acquisition and 3 : enabled and no image
processed during the sequence)
Aux_param_1
Aux_param_2
Taxo_conf
Remaining_memory
Integer
integer
text
integer MB
Duration of activation for mode 2 at the start of the
aquisition
Duration of activation for mode 2 at the end of the
aquisition
Taxonomic classification configuration for this acquisition
(let it empty to disable embedded recognition)
NO_RE
SD card remaining memory at the start of the acquisition 383008
10
0
1000
60
marc.piche
ral@obs-
vlfr.fr
0
2
645
0
1
0
1,5
40
20
13

TAXOconf variable
name
Configuration_name
Model_reference
Max_size_for_classifica
tion
Model_nb_classes
Taxo_ID_for_class_00
Taxo_ID_for_class_01
Taxo_ID_for_class_02
Taxo_ID_for_class_03
Taxo_ID_for_class_04
Taxo_ID_for_class_05
Taxo_ID_for_class_06
Taxo_ID_for_class_07
Taxo_ID_for_class_08
Taxo_ID_for_class_09
Taxo_ID_for_class_10
Taxo_ID_for_class_11
Taxo_ID_for_class_12
Taxo_ID_for_class_13
Taxo_ID_for_class_14
Taxo_ID_for_class_15
Taxo_ID_for_class_16
Taxo_ID_for_class_17
Taxo_ID_for_class_18
Taxo_ID_for_class_19
Taxo_ID_for_class_20
Taxo_ID_for_class_21
Taxo_ID_for_class_22
Type
Unit
Explanation
Example
frame name
text
text
integer
integer
integer
integer
integer
integer
integer
integer
integer
integer
integer
integer
integer
integer
integer
integer
integer
integer
integer
integer
integer
integer
integer
integer
integer
pixel
Name used to set this configuration into the field
Taxo_conf, from the Acquisition configuration file
Taxonomic classification model to be used. Automatically
filled during model creation/export
Maximum vignette size to perform the embedded
classification
Number of classes used by the classification model.
Automatically filled during model creation/export
Ecotaxa taxonomic unique identifier for model's class 00
Ecotaxa taxonomic unique identifier for model's class 01
Ecotaxa taxonomic unique identifier for model's class 02
Ecotaxa taxonomic unique identifier for model's class 03
Ecotaxa taxonomic unique identifier for model's class 04
Ecotaxa taxonomic unique identifier for model's class 05
Ecotaxa taxonomic unique identifier for model's class 06
Ecotaxa taxonomic unique identifier for model's class 07
Ecotaxa taxonomic unique identifier for model's class 08
Ecotaxa taxonomic unique identifier for model's class 09
Ecotaxa taxonomic unique identifier for model's class 10
Ecotaxa taxonomic unique identifier for model's class 11
Ecotaxa taxonomic unique identifier for model's class 12
Ecotaxa taxonomic unique identifier for model's class 13
Ecotaxa taxonomic unique identifier for model's class 14
Ecotaxa taxonomic unique identifier for model's class 15
Ecotaxa taxonomic unique identifier for model's class 16
Ecotaxa taxonomic unique identifier for model's class 17
Ecotaxa taxonomic unique identifier for model's class 18
Ecotaxa taxonomic unique identifier for model's class 19
Ecotaxa taxonomic unique identifier for model's class 20
Ecotaxa taxonomic unique identifier for model's class 21
Ecotaxa taxonomic unique identifier for model's class 22
14
AXO_CONF
TAXO_NKE
_0
MODEL_ge
om
65535
8
94022
84963
85050
85079
94024
94023
94021
94020
0
0
0
0
0
0
0
0
0
0
0
0
0
0
0

Taxo_ID_for_class_23
Taxo_ID_for_class_24
Taxo_ID_for_class_25
Taxo_ID_for_class_26
Taxo_ID_for_class_27
Taxo_ID_for_class_28
Taxo_ID_for_class_29
Taxo_ID_for_class_30
Taxo_ID_for_class_31
Taxo_ID_for_class_32
Taxo_ID_for_class_33
Taxo_ID_for_class_34
Taxo_ID_for_class_35
Taxo_ID_for_class_36
Taxo_ID_for_class_37
Taxo_ID_for_class_38
Taxo_ID_for_class_39
integer
integer
integer
integer
integer
integer
integer
integer
integer
integer
integer
integer
integer
integer
integer
integer
integer
Ecotaxa taxonomic unique identifier for model's class 23
Ecotaxa taxonomic unique identifier for model's class 24
Ecotaxa taxonomic unique identifier for model's class 25
Ecotaxa taxonomic unique identifier for model's class 26
Ecotaxa taxonomic unique identifier for model's class 27
Ecotaxa taxonomic unique identifier for model's class 28
Ecotaxa taxonomic unique identifier for model's class 29
Ecotaxa taxonomic unique identifier for model's class 30
Ecotaxa taxonomic unique identifier for model's class 31
Ecotaxa taxonomic unique identifier for model's class 32
Ecotaxa taxonomic unique identifier for model's class 33
Ecotaxa taxonomic unique identifier for model's class 34
Ecotaxa taxonomic unique identifier for model's class 35
Ecotaxa taxonomic unique identifier for model's class 36
Ecotaxa taxonomic unique identifier for model's class 37
Ecotaxa taxonomic unique identifier for model's class 38
Ecotaxa taxonomic unique identifier for model's class 39
0
0
0
0
0
0
0
0
0
0
0
0
0
0
0
0
0
6.2. UVP6 to platform or vector LPM data L0
One rs232 data frame is transmitted per block of images. All the images of the block are not necessarily
used (in case of overexposed). For each pixel class size, the total number of objects of the bloc is
transmitted, as well as the average per object of their grey level.
The number of fields of the LPM data frame is always the same.
LPM_DATA,P,date,time,IMG,T,Nbi,Nbi+1,...GGj,GGj+1 [...] 

Where :
- P : pressure (float)
- Date : date in YYYYMMDD
- Time : time in HHMMSS
- IMG : number of images used. (integer 0-255)
- T : internal temperature (float)
- Nbi : number of objects of the category i (integer 0-4294967295 or 65535 for category higher than 12)
15

- GGi : average Grey level of the objects i (integer 0-255)
All fields are delimited by ",".
“i” the number of categories goes from 1 to 18.
The frame ends with a “
”.
Example :
LPM_DATA,4.42,20220607,133012,1,26.88,3375,81,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,34,32,0,0,0,0,0,0,0,0,0,
0,0,0,0,0,0,0

One frame, at pressure 4.42 bars, the 07/06/2022 at 13h30min12s UTC. The internal temperature of the
UVP is 26.88°C. There are 3375 objects of one pixel, with an average level of grey of 34.
6.3. UVP6 to vector black data L0
The rs232 black data frame is the same as the LPM data frame but starting by “BLACK_DATA” and not
‘LPM_DATA”. The only difference is there is no information on grey level.
Example :
BLACK_DATA,1555.81,20220223,040453,1,24.19,42,0,5,0,1,0,1,1,0,0,0,0,0,0,0,0,1,3

One frame, at pressure 1555.81 bars, the 23/02/2022 at 04h04min53s UTC. The internal temperature of
the UVP is 24.19°C. There are 42 objects of one pixel.
6.4. UVP6 to platform or vector taxo data L0
One rs232 data frame per block of images contains 25 objects per frame maximum. All the images of the
block are not necessarily used (analysis of the images stops after 25 objects). For each detected and
identified object, the predicted category, the spherical equivalent volume of the object and the average
grey level are transmitted.
The number of fields of the taxo frame is variable depending on the number of identified objects. Metadata
are transmitted in the lpm data frame.
TAXO_DATA,IMG,NNi,VVi,GGi,NNi+1,VVi+1,GGi+1 [...] 

Where:
- IMG : number of images in which the taxo was performed. (integer 0-255)
- NNi : N° of the category of the object i (integer 0-39)
- VVi : Volume of the object i (integer 0-65535 ??? 1.2620e+07 ??? TBD)
- GGi : Grey level of the object i (integer 0-255)
All the fields are delimited by ",". All fields are integers.
The frame ends with a “
”.
16

Example :
TAXO_DATA,1,8,65,39,8,43,41,9,175,61

One image, 3 objects, 2 of category 8 and 1 of category 9.
TAXO_DATA,5,8,37,42

Five images, 1 object of category 8
TAXO_DATA,3

Three images analysed containing no object to be identified.
7. Reduction process by the piloting platform or vector
7.1. Description
In order to reduce the transmitted data and transmission time, it is recommended to aggregate the LPM
and TAXO data by depth slices. This process must be conducted by the vector along an uvp acquisition or
sample (i.e. profile). The black data are never aggregated because of the low data quantity and because of
the need to keep a detailed monitoring of this data.
A similar (by time) aggregation process can be applied for time series.
The typical depth slices used depends on the precision needed, so on the depth. It is possible to reduce
the transmitted data using different depth slices for the LPM and the Taxo data. Here is an example:
Depth slices aggregation by the vector
Depth ranges
0 – 2 m
2 – 100 m
100 – 500 m
500 – 1000 m
1000 – XXXX m
LPM depth slice size
Raw data
5 m
10 m
20 m
20 m
TAXO depth slice size
Raw data
5 m
10 m
20 m
40 m
It is also recommended to select the ACQ frequency and bloc sizes plus the slice width to keep the
theoretical number of images constant for all slices. The consquence is that a lower acquisition rate implies
a wider depth (or time) slice. The ascending or descending speed, if not constant can also be taken in
consideration when setting these parameters.
For each depth slice, the aggregation is a compression of all the bloc data from the slice. Different
operations must be conducted on the different fields.
17

- DateTime, (latitude and longitude) are taken from the first bloc of images
- The numbers of images are summed
- The pressures and the temperature are averaged over the blocs (can be weighted by the real
number of processed images per bloc)
- The number of particles and the number of taxo objects are summed for all the images of the slice.
The taxo number of objects must be enumerated by the vector.
- The grey and volume should be an average per objects. Since the uvp6 already send an average
per object in a bloc (L0), the reduction process of the vector must be a weighted average per object
across the different blocs.
Some of the divisions could be conducted on land in order to transmit only integers.
The different reduction processes are summarized here, for each final expected on-land variable:
Columns header
Format
Description
DATE_TIME
PRES_decibar
LATITUDE_decimal_degree
YYYYMMDDT
hhmmss
Float
Float
LONGITUDE_decimal_degree Float
Int
IMAGE_NUMBER_PARTICLES
Float
TEMP_PARTICLES
NB_SIZE_SPECTRA_PARTICLES
_class_#
GREY_
SIZE_SPECTRA_PARTICLES_cla
ss_#
Int
Int
Date and time of the slice
Average pressure of the slice
Latitude, if available
Longitude, if available
Number of uvp images in the
slice
Average uvp temperature of
the slice
Particles data
Average number of particles
per image of class #
Average grey level per particles
of class #
Taxo data
Int
NB_OBJECTS_class_#
Int
VOLUME_OBJECTS_class_#
Average number of objects per
image of class #
Average volume per object of
class #
Sum over all blocs
Average
per
number of objects
18
Sum over all blocs
Weighted
average
per number of
objects
Vector’s
aggregation
operation
From first bloc
Average per bloc
From first bloc
From first bloc
Sum over all blocs
Average per bloc

Int
GREY_OBJECTS_class_#
7.2. LPM data example
To better understand the example, the reduction process is divided into two operations: sum or weighted
sum, then division for the average.
The number of particles is just summed.
The grey level is multiplied by the number of particles in the bloc then summed together, and finally
divided by the total number of particles in the slice.
L0 (L1a) format send by the uvp6:
LPM_DATA,4.42,19050926,120000,1,26.88,1010,1020,…,5,18,…
LPM_DATA,5.43,19050926,120002,4,26.88,4000,4000,…,10,8,…
LPM_DATA,6.45,19050926,120004,2,26.88,0,0,…,0,0,…
Sum operations:
LPM_DATA,16.3,19050926,120000,7,80.64,5010,5020,…,45050,50360,…
Division operations for the average:
LPM_DATA,5.43,19050926,120000,7,26.88,5010,5020,…,8.99,10.03,…
7.3. Taxo data example
To better understand the example, the reduction process is divided into three operations: counting the
objects, sum or weighted sum, then division for the average.
The counting operation counts and adds the number of objects in each category. The volume and grey are
simply summed at the same time.
The number of objects is then summed over the blocs.
The volume and the grey level are summed and then divided by the total number of objects in the slice.
L0 (L1a) format send by the uvp6:
TAXO_DATA,1,1,1010,11,8,1020,12,…
TAXO_DATA,4,1,1030,13,1,1050,15…
19
Average grey level per object
of class #
Average
per
number of objects

Counting operation:
TAXO_DATA,1,1,1,1010,11,8,1,1020,12,…
TAXO_DATA,4,1,2,2080,28,…
TAXO_DATA,0

Sum operations:
TAXO_DATA,5,1,3,3090,39,8,1,1020,12,…
Division operations for the average:
TAXO_DATA,5,1,3,1030,13,8,1,1020,12,…
Remark: the slice metadata has to be recovered from the corresponding slice particles data.
8. Changes from older versions
This document is for more recent version than ver2022.01. Older versions have changes in configuration
frames. Functioning and data frame stay the same, unless the missing embedded classification for the
older versions than 2022.01.
On-land L2 data and metadata should be adapted.
The changes are listed in this section for information.
8.1. Version 2022.01
The 2022.01 version has small changes in the HWconf frame and the ACQconf frame compared to more
recent versions. It misses the Firmware_version variable in the HWconf frame and the Aux_mode,
Aux_param_1 and Aux_param_2 variables in the ACQconf frame.
HWconf variable name Type
text
Camera_ref
Acquisition_mode
Default_acquisition_con
figuration
Delay_after_power_up_
on_time_mode
Light_ref
text
integer
text
integer min
text
Unit
Explanation
frame name
UVP6 serial number (XXXXXXXX)
0: SUPERVISED mode, 1: AUTONOMOUS mode (including
CTD mode), 2: TIME-programmed mode
Name of the acquisition configuration automatically
launched when Acquisition_mode = 1
Optional delay before starting image acquisition when
Acquisition_mode = 1 (AUTONOMOUS)
Light unit serial number
20
Example
HW_CONF
000176LP
1
ACQ_CAL_F
ULL
0
000178VE2

Correction_table_activa
tion
Time_between_lighting
_trigger_and_acquisitio
n
Pressure_sensor_ref
Pressure_offset
boolean
Selection of the lighting correction LUT -> 0: no
correction, 1: light unit correction #1, 2: light unit
correction #2 (default : 1)
integer
µS
Delay between light unit trigger and image sensor
shutter
text
float
M
Pressure sensor serial number (empty if no sensor
installed)
Vertical distance between the image plan and the
pressure measurement point ( >0 if pressure sensor
above image field, if undefined, set 999)
Storage_capacity
Minimum_remaining_m
emory_for_thumbnail_s
aving
Baud_Rate
Black_level
Shutter
Gain
Threshold
Aa
Exp
Pixel_Size
Image_volume
Calibration_date
Last_parameters_modifi
cation
Operator_email
integer MB
integer MB
SD card storage capacity, automatically updated by UVP6
when parameters are modified, do not edit
Minimal memory remaining in the SD card to keep saving
images or vignettes, do not edit
integer
integer
integer
integer
integer
12 bits gray
level
µS
dB
8 bits gray
scale
integer µM²
integer
integer µM
float
date
date
email
L
YYYYMMDD
HHMM
YYYYMMDD
HHMM
UVP6 RS232 baud rate selection -> 0: 9600 bauds, 1:
19200 bauds, 2: 38400 bauds
Image sensor black level parameter
Image sensor integration time (shutter)
Image sensor gain, do not edit
Threshold for image segmentation (pixels <= Threshold
are considered background)
Calibration parameter (corresponding area in the scene
represented by each pixel)
Calibration parameter (adjusting for specular reflections)
Uncalibrated pixel size (side of the pixel in the image
field)
Image volume
Calibration date for the values in this table
Automatically updated by UVP6 when hardware
parameters are modified
Identification of the operator filling this configuration
table
Min_esd_class_01
Min_esd_class_02
float
float
µM
µM
Lower Equivalent Spherical Diameter for class 01
Lower Equivalent Spherical Diameter for class 02
0,6
1
250
393857
10000
2
0
64
6
20
2300
1,136
73
0,55
20220504
2,02206E+1
1
alice.pierre
t@imev-
mer.fr
50,8
64
21

Min_esd_class_03
Min_esd_class_04
Min_esd_class_05
Min_esd_class_06
Min_esd_class_07
Min_esd_class_08
Min_esd_class_09
Min_esd_class_10
Min_esd_class_11
Min_esd_class_12
Min_esd_class_13
Min_esd_class_14
Min_esd_class_15
Min_esd_class_16
Min_esd_class_17
Min_esd_class_18
float
float
float
float
float
float
float
float
float
float
float
float
float
float
float
float
µM
µM
µM
µM
µM
µM
µM
µM
µM
µM
µM
µM
µM
µM
µM
µM
ACQconf variable name Type
Configuration_name
PT_mode
text
integer
Unit
Lower Equivalent Spherical Diameter for class 03
Lower Equivalent Spherical Diameter for class 04
Lower Equivalent Spherical Diameter for class 05
Lower Equivalent Spherical Diameter for class 06
Lower Equivalent Spherical Diameter for class 07
Lower Equivalent Spherical Diameter for class 08
Lower Equivalent Spherical Diameter for class 09
Lower Equivalent Spherical Diameter for class 10
Lower Equivalent Spherical Diameter for class 11
Lower Equivalent Spherical Diameter for class 12
Lower Equivalent Spherical Diameter for class 13
Lower Equivalent Spherical Diameter for class 14
Lower Equivalent Spherical Diameter for class 15
Lower Equivalent Spherical Diameter for class 16
Lower Equivalent Spherical Diameter for class 17
Lower Equivalent Spherical Diameter for class 18
Explanation
frame name
Name used to launch this configuration
0: Triggered by vector, 1: Asks for pressure and time, 2:
Use UVP6 Acquisition_frequency, 3: CTD mode
(mandatory Pressure Sensor)
Acquisition_frequency
Frames_per_bloc
Pressure_for_auto_star
t
Pressure_difference_fo
r_auto_stop
Result_sending
Save_synthetic_data_fo
r_delayed_request
float
integer
integer
integer
boolean
boolean
Hz
frame
decibar
decibar
Acquisition frequency (maximum value)
Nb of frames to accumulate and synthesize to send
When in CTD mode (PT_mode= 3), pressure value to
automatically start the acquisition
When in CTD mode (PT_mode= 3), pressure drop from
deepest value to automatically stop the acquisition
0/false: results are never sent - 1/true: synthesized results
are sent through RS232 after each bloc
0/false: do not save - 1/true: save synthetic data for a
potential delayed
request (usefull only for
troubleshooting)
22
80,6
102
128
161
203
256
323
406
512
645
813
1020
1290
1630
2050
2580
Example
ACQ_CONF
ACQ_NKE_
0
0
2
1
0
0
1
0

Save_images
integer
Vignetting_lower_limit
_size
Appendices_ratio
Interval_for_measuring
_background_noise
Image_nb_for_smoothi
ng
Analog_output_activati
on
Gain_for_analog_out
Maximal_internal_tem
perature
Operator_email
integer µM
How to save Images -> 0: don't save, 1: save whole raw
image, 2: save selected vignettes only
When saving vignettes (Save_images= 2), minimum
object size (ESD) to save vignette, utilizes Aa and Exp,
(default : 645)
float
integer
integer
boolean
integer
integer
email
object
°C
bloc
frame
When saving vignettes (Save_images= 2), vignette size to
actual object size ratio (default : 1.5)
Background
noise measured every 'interval' (bloc
acquired without flashing). Disabled if zero
Nb of images to measure temperature (for safety stop)
and average particle abundance for the analog output
Activation of the particle abundance analog output :
0/false: disabled - 1/true
Smoothed number of counted objects for 5 volts analog
output voltage
Maximum internal temperature to cause a security stop
Identification of the operator filling this configuration
table
Taxo_conf
Remaining_memory
text
integer MB
Taxonomic classification configuration for this acquisition
(let it empty to disable embedded recognition)
10
0
1000
60
marc.piche
ral@obs-
vlfr.fr
NO_RE
SD card remaining memory at the start of the acquisition 383008
2
645
1,5
40
8.2. Version 2021 and older
This section is valid for ver2021 and older.
The 2020 firmware version is the first stable version of the UVP6 firmware and has been widespread with
the first functioning unit. It has been simplified and improved to optimized the interaction with
autonomous vectors. It has the same missing variables as the ver2022.01 with additional variables:
Time_between_lighting_power_up_and_trigger and IP_adress for
the HWconf
 Blocs_per_PT,
Limit_lpm_detection_size, Minimum_object_number and Taxo_flag for the ACQconf.
This version does not have any embedded classification option. No taxonomic configurations and frames
exist.
HWconf variable name Type
Unit
text
Camera_ref
text
Explanation
frame name
UVP6 serial number (XXXXXXXX)
Example
HW_CONF
000176LP
23

Acquisition_mode
Default_acquisition_con
figuration
Delay_after_power_up_
on_time_mode
Light_ref
Correction_table_activa
tion
Time_between_lighting
_power_up_and_trigger
Time_between_lighting
_trigger_and_acquisitio
n
Pressure_sensor_ref
Pressure_offset
integer
0: SUPERVISED mode, 1: AUTONOMOUS mode (including
CTD mode), 2: TIME-programmed mode
text
integer min
text
boolean
Name of the acquisition configuration automatically
launched when Acquisition_mode = 1
Optional delay before starting image acquisition when
Acquisition_mode = 1 (AUTONOMOUS)
Light unit serial number
Selection of the lighting correction LUT -> 0: no
correction, 1: light unit correction #1, 2: light unit
correction #2 (default : 1)
integer
integer
µS
µS
Delay between light unit powering and trigger
Delay between light unit trigger and image sensor
shutter
text
float
M
Pressure sensor serial number (empty if no sensor
installed)
Vertical distance between the image plan and the
pressure measurement point ( >0 if pressure sensor
above image field, if undefined, set 999)
Storage_capacity
Minimum_remaining_m
emory_for_thumbnail_s
aving
Baud_Rate
IP_adress
Black_level
Shutter
Gain
Threshold
Aa
Exp
Pixel_Size
integer MB
integer MB
SD card storage capacity, automatically updated by UVP6
when parameters are modified, do not edit
Minimal memory remaining in the SD card to keep saving
images or vignettes, do not edit
integer
text
integer
integer
integer
integer
12 bits gray
level
µS
dB
8 bits gray
scale
integer µM²
integer
integer µM
UVP6 RS232 baud rate selection -> 0: 9600 bauds, 1:
19200 bauds, 2: 38400 bauds
UVP6 IP address for Ethernet communication
Image sensor black level parameter
Image sensor integration time (shutter)
Image sensor gain, do not edit
Threshold for image segmentation (pixels <= Threshold
are considered background)
Calibration parameter (corresponding area in the scene
represented by each pixel)
Calibration parameter (adjusting for specular reflections)
Uncalibrated pixel size (side of the pixel in the image
field)
24
0,6
1
ACQ_CAL_F
ULL
0
000178VE2
1
150
250
393857
10000
2
193.49.112.
100
0
64
6
20
2300
1,136
73

Image_volume
Calibration_date
Last_parameters_modifi
cation
Operator_email
float
date
date
email
L
Image volume
YYYYMMDD
HHMM
YYYYMMDD
HHMM
Calibration date for the values in this table
Automatically updated by UVP6 when hardware
parameters are modified
Identification of the operator filling this configuration
table
Min_esd_class_01
Min_esd_class_02
Min_esd_class_03
Min_esd_class_04
Min_esd_class_05
Min_esd_class_06
Min_esd_class_07
Min_esd_class_08
Min_esd_class_09
Min_esd_class_10
Min_esd_class_11
Min_esd_class_12
Min_esd_class_13
Min_esd_class_14
Min_esd_class_15
Min_esd_class_16
Min_esd_class_17
Min_esd_class_18
float
float
float
float
float
float
float
float
float
float
float
float
float
float
float
float
float
float
µM
µM
µM
µM
µM
µM
µM
µM
µM
µM
µM
µM
µM
µM
µM
µM
µM
µM
ACQconf variable name Type
Configuration_name
PT_mode
text
integer
Unit
Lower Equivalent Spherical Diameter for class 01
Lower Equivalent Spherical Diameter for class 02
Lower Equivalent Spherical Diameter for class 03
Lower Equivalent Spherical Diameter for class 04
Lower Equivalent Spherical Diameter for class 05
Lower Equivalent Spherical Diameter for class 06
Lower Equivalent Spherical Diameter for class 07
Lower Equivalent Spherical Diameter for class 08
Lower Equivalent Spherical Diameter for class 09
Lower Equivalent Spherical Diameter for class 10
Lower Equivalent Spherical Diameter for class 11
Lower Equivalent Spherical Diameter for class 12
Lower Equivalent Spherical Diameter for class 13
Lower Equivalent Spherical Diameter for class 14
Lower Equivalent Spherical Diameter for class 15
Lower Equivalent Spherical Diameter for class 16
Lower Equivalent Spherical Diameter for class 17
Lower Equivalent Spherical Diameter for class 18
Explanation
frame name
Name used to launch this configuration
0: Triggered by vector, 1: Asks for pressure and time, 2:
Use UVP6 Acquisition_frequency, 3: CTD mode
(mandatory Pressure Sensor)
0,55
20220504
2,02206E+1
1
alice.pierre
t@imev-
mer.fr
50,8
64
80,6
102
128
161
203
256
323
406
512
645
813
1020
1290
1630
2050
2580
Example
ACQ_CONF
ACQ_NKE_
0
0
25

Acquisition_frequency
Frames_per_bloc
Blocs_per_PT
Pressure_for_auto_star
t
Pressure_difference_fo
r_auto_stop
Result_sending
Save_synthetic_data_fo
r_delayed_request
Limit_lpm_detection_si
ze
Save_images
Vignetting_lower_limit
_size
Appendices_ratio
Interval_for_measuring
_background_noise
Image_nb_for_smoothi
ng
Analog_output_activati
on
Gain_for_analog_out
Minimum_object_num
ber
Maximal_internal_tem
perature
Operator_email
float
integer
integer
integer
integer
boolean
boolean
Hz
Acquisition frequency (maximum value)
frame
bloc
decibar
decibar
Nb of frames to accumulate and synthesize to send
Nb of blocs to acquire before a new acquisition or asking
for a new pressure information
When in CTD mode (PT_mode= 3), pressure value to
automatically start the acquisition
When in CTD mode (PT_mode= 3), pressure drop from
deepest value to automatically stop the acquisition
0/false: results are never sent - 1/true: synthesized results
are sent through RS232 after each bloc
0/false: do not save - 1/true: save synthetic data for a
potential delayed
request (usefull only for
troubleshooting)
integer µM
integer
integer µM
Minimum size (ESD) to count and analyze objects, utilizes
Aa and Exp
How to save Images -> 0: don't save, 1: save whole raw
image, 2: save selected vignettes only
When saving vignettes (Save_images= 2), minimum
object size (ESD) to save vignette, utilizes Aa and Exp,
(default : 645)
float
integer
integer
boolean
integer
integer
integer
email
object
object
°C
bloc
frame
When saving vignettes (Save_images= 2), vignette size to
actual object size ratio (default : 1.5)
Background
noise measured every 'interval' (bloc
acquired without flashing). Disabled if zero
Nb of images to measure temperature (for safety stop)
and average particle abundance for the analog output
Activation of the particle abundance analog output :
0/false: disabled - 1/true
Smoothed number of counted objects for 5 volts analog
output voltage
Smoothed minimum number of objects to cause a
security stop (not implemented)
Maximum internal temperature to cause a security stop
Identification of the operator filling this configuration
table
Taxo_flag
Remaining_memory
boolean
integer MB
Taxonomic classification flag for this acquisition (not
implemented)
10
0
1000
0
60
marc.piche
ral@obs-
vlfr.fr
0
SD card remaining memory at the start of the acquisition 383008
26
10
2
645
2
1
1
0
0
1
0
1,5
40

27



;

`

