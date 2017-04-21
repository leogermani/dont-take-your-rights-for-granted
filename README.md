# dont-take-your-rights-for-granted
Dont take your rights for granted 

Para ver o site: https://leogermani.github.io/dont-take-your-rights-for-granted/src/


## Colocando informações sobre os países

As informações sobre os países ficam no arquivo info.json.

Crie uma entrada para o país que quer colocar informações, indicando o país pelo código (veja lista abaixo).

Cada país deve ter as seguintes informações:

* name: nome do país
* scale: escala de 1 a 5 para indicar a cor que vai usar (o padrão é zero, para pegar cor neutra)
* description: Um texto
* list: uma lista de textos curtos, que vai ser exibido como uma lista de tópicos

Exemplo:

```

{   
    "BRA": {
        "name": "Brasil",
        "scale": 2,
        "description": "No Brasil a legislação ....",
        "list": [
            "Problema 1",
            "Lei sinistra 2",
            "Lei sinistra 3"
        ]
    },
    "USA": {
        "name": "Estados Unidos",
        "scale": 4,
        "description": "Nos EUA a legislação ....",
        "list": [
            "Problema 1",
            "Lei sinistra 2",
            "Lei sinistra 3"
        ]
    }
}

```

### Lista de código de países

```
AFG: Afghanistan
AGO: Angola
ALB: Albania
ARE: United Arab Emirates
ARG: Argentina
ARM: Armenia
ATA: Antarctica
ATF: French Southern and Antarctic Lands
AUS: Australia
AUT: Austria
AZE: Azerbaijan
BDI: Burundi
BEL: Belgium
BEN: Benin
BFA: Burkina Faso
BGD: Bangladesh
BGR: Bulgaria
BHS: The Bahamas
BIH: Bosnia and Herzegovina
BLR: Belarus
BLZ: Belize
BMU: Bermuda
BOL: Bolivia
BRA: asdsa
BRN: Brunei
BTN: Bhutan
BWA: Botswana
CAF: Central African Republic
CAN: Canada
CHE: Switzerland
CHL: Chile
CHN: China
CIV: Ivory Coast
CMR: Cameroon
COD: Democratic Republic of the Congo
COG: Republic of the Congo
COL: Colombia
CRI: Costa Rica
CUB: Cuba
-99: Northern Cyprus
CYP: Cyprus
CZE: Czech Republic
DEU: Germany
DJI: Djibouti
DNK: Denmark
DOM: Dominican Republic
DZA: Algeria
ECU: Ecuador
EGY: Egypt
ERI: Eritrea
ESP: Spain
EST: Estonia
ETH: Ethiopia
FIN: Finland
FJI: Fiji
FLK: Falkland Islands
FRA: France
GAB: Gabon
GBR: United Kingdom
GEO: Georgia
GHA: Ghana
GIN: Guinea
GMB: Gambia
GNB: Guinea Bissau
GNQ: Equatorial Guinea
GRC: Greece
GRL: Greenland
GTM: Guatemala
GUF: French Guiana
GUY: Guyana
HND: Honduras
HRV: Croatia
HTI: Haiti
HUN: Hungary
IDN: Indonesia
IND: India
IRL: Ireland
IRN: Iran
IRQ: Iraq
ISL: Iceland
ISR: Israel
ITA: Italy
JAM: Jamaica
JOR: Jordan
JPN: Japan
KAZ: Kazakhstan
KEN: Kenya
KGZ: Kyrgyzstan
KHM: Cambodia
KOR: South Korea
CS-KM: Kosovo
KWT: Kuwait
LAO: Laos
LBN: Lebanon
LBR: Liberia
LBY: Libya
LKA: Sri Lanka
LSO: Lesotho
LTU: Lithuania
LUX: Luxembourg
LVA: Latvia
MAR: Morocco
MDA: Moldova
MDG: Madagascar
MEX: Mexico
MKD: Macedonia
MLI: Mali
MLT: Malta
MMR: Myanmar
MNE: Montenegro
MNG: Mongolia
MOZ: Mozambique
MRT: Mauritania
MWI: Malawi
MYS: Malaysia
NAM: Namibia
NCL: New Caledonia
NER: Niger
NGA: Nigeria
NIC: Nicaragua
NLD: Netherlands
NOR: Norway
NPL: Nepal
NZL: New Zealand
OMN: Oman
PAK: Pakistan
PAN: Panama
PER: Peru
PHL: Philippines
PNG: Papua New Guinea
POL: Poland
PRI: Puerto Rico
PRK: North Korea
PRT: Portugal
PRY: Paraguay
QAT: Qatar
ROU: Romania
RUS: Russia
RWA: Rwanda
ESH: Western Sahara
SAU: Saudi Arabia
SDN: Sudan
SSD: South Sudan
SEN: Senegal
SLB: Solomon Islands
SLE: Sierra Leone
SLV: El Salvador
-99: Somaliland
SOM: Somalia
SRB: Republic of Serbia
SUR: Suriname
SVK: Slovakia
SVN: Slovenia
SWE: Sweden
SWZ: Swaziland
SYR: Syria
TCD: Chad
TGO: Togo
THA: Thailand
TJK: Tajikistan
TKM: Turkmenistan
TLS: East Timor
TTO: Trinidad and Tobago
TUN: Tunisia
TUR: Turkey
TWN: Taiwan
TZA: United Republic of Tanzania
UGA: Uganda
UKR: Ukraine
URY: Uruguay
USA: United States of America
UZB: Uzbekistan
VEN: Venezuela
VNM: Vietnam
VUT: Vanuatu
PSE: West Bank
YEM: Yemen
ZAF: South Africa
ZMB: Zambia
ZWE: Zimbabwe
```
