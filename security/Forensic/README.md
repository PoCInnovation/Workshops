lien archive : <https://epitechfr-my.sharepoint.com/:u:/g/personal/yoel_edery_epitech_eu/EXolIqXtDU5Ds9N9kxSCY_IB0L7uGkme9BeBOkWstrkIpg?e=L6S7Z9>
ou <https://t.ly/5mU0>
MDP archive : PoC_Workshop_Secu_Forensic_2021


## Chall-1:
Je viens de récupérer cet ordinateur et j'aimerais savoir qui sont, ces utilisateurs.

Flag : PoC{USERNAME1,USERNAME2}

## Chall-2:
J'ai intercepté des connexions vers le site <https://www.poc-innovation.fr/> mais j'arrive pas à retrouver de quel programme cela peut venir.

Flag : PoC{PID + Owner}

## Chall-3
Maintenant, que nous connaissons le pid j'aimerais plus d'information sur son exécution.

Nous attendons le flag en hash sha1 de la ligne de commande entière.

FLAG : PoC{HASH(SHA1)}

## Chall-4
Tiens Tiens...
Je vois un mauvais programme sur cet ordinateur, j'aimerais faire une sauvegarde de tout ce processus, bien évidemment en mode binaire.

FLAG : PoC{HASH(SHA512)}

## Chall-5
À vous de jouer maintenant, utilisez toutes vos connaissances pour retrouver le contenu de ce programme malveillant.

FLAG : PoC{FLAG}

## Chall-6
Si vous êtes parvenue jusqu'ici, ce challenge est pour vous.
J'aimerais retrouver l'adresses mémoire du processus qui nous montre la version de python.

Le hash sha384 du dump mémoire décompressé est : eaf86b887f64c5db77d878645d78da544b52c00f76b3967a8128546a3740ad443994d08166e6b5b071def6a63d776d45

FLAG : PoC{MemoryAddress}
