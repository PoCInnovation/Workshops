# Workshop Krypto Tour - Créer son token

✔ Découverte de la norme ERC-20
✔ Coder son token
✔ Déployer son token sous la norme ERC-20

## Introduction en quelques lignes

### Qu'est-ce qu'un ERC-20 ?

**ERC-20**, qui signifie « Ethereum Request for Comments 20 », est une **norme technique** utilisée pour **créer** et **gérer** des jetons basés sur la **blockchain Ethereum**. Les tokens ERC-20 sont des **actifs numériques** qui peuvent représenter **plusieurs formes** de valeur, telles que des actifs financiers, des points de fidélité, des biens numériques, etc.

### Pourquoi mettre en place une norme ?

Le **premier avantage** de l'ERC-20 réside dans sa facilité d'**adoption** et d'**interopérabilité**. Cette norme **définit un ensemble de règles** et de fonctions qui permettent aux développeurs de **créer des tokens compatibles avec le réseau Ethereum** et les portefeuilles Ethereum existants. Cela signifie que les utilisateurs peuvent stocker, transférer et échanger différents types de tokens ERC-20 **en utilisant les mêmes portefeuilles et interfaces**.

### Avec quelle technologie ?

**Solidity** est un **langage de programmation** spécifiquement **conçu pour développer des contrats intelligents sur la blockchain Ethereum**. Il permet aux développeurs de **créer des contrats auto-exécutables, autonomes et vérifiables** qui définissent des règles et des interactions dans un **environnement décentralisé**.

## Étape 0 - Initialisation

Toute les informations nécéssaires à la mise en place de votre environment de développement sont à retrouver dans [SETUP.md](./SETUP.md) 

## Étape 1 - Création et personnalisation de son token

### 📑 **Description**:

Pour créer notre token, nous allons devoir coder un smart contract. Nous utiliserons le language [Solidity](https://fr.wikipedia.org/wiki/Solidity).

>💡 *Un smart contract est un programme informatique autonome qui s'exécute automatiquement sur une blockchain lorsque des conditions prédéfinies sont remplies. Il permet d'automatiser et de sécuriser des accords sans intermédiaire, de manière transparente et immuable.*

### 📌 **Todo**:

Premièrement, vous aller avoir besoin d'utiliser OpenZeppelin: OpenZeppelin est une bibliothèque pour créer des tokens ERC20. Elle fournit des implémentations standards, testées et réutilisables, simplifiant le développement de smart contracts conformes et sûrs. Installez-le en tapant

```sh
forge install OpenZeppelin/openzeppelin-contracts
```

C'est le moment de coder !
- Ouvrez votre projet foundry `krypto-tour` dans VScode.
- Créez un fichier `erc20.sol` dans le dossier `src/` et écrivez ces lignes:

**Directive d'import & pragma** 
```js
// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.20;

import {ERC20} from "lib/openzeppelin-contracts/contracts/token/ERC20/ERC20.sol";
```

Le mot-clé `pragma` peut être utilisé pour activer certaines fonctions ou vérifications du compilateur.
Import est une fonctionnalité qui vous permet d'utiliser du code depuis d'autres fichiers ou modules dans votre programme actuel. Ici on importe le code ERC20 d'OpenZeppelin.

**contract**
```js
contract Token is ERC20 {
}
```

`contract` en Solidity est un conteneur pour le code (ses fonctions) et les données (son état) qui résident à une adresse spécifique sur la blockchain.
Le mot-clé `is` en Solidity indique l'héritage. Notre contrat va donc hériter de toutes les fonctions et événements définis dans le standard ERC20 d'OpenZeppelin.

```js
constructor() ERC20("KRYPTO-POC", "POC") {
	_mint(msg.sender, 100000 * 10 ** decimals());
}
```

- `constructor()` : C'est le constructeur du contrat. Il est appelé une seule fois, lors du déploiement du contrat sur la blockchain.
- `ERC20("KRYPTO-POC", "POC")` :
    - Ceci appelle le constructeur du contrat parent ERC20.
    - "KRYPTO-POC" est le nom complet du token: **vous pouvez le personnaliser !**
    - "POC" est le symbole ou ticker du token (comme "BTC" pour Bitcoin): **vous pouvez le personnaliser !**
- `_mint(msg.sender, 100000 * 10 ** decimals());` :
    - `_mint` est une fonction interne de ERC20 qui crée de nouveaux tokens.
    - `msg.sender` est l'adresse qui déploie le contrat. Les nouveaux tokens seront envoyés à cette adresse.
    - `100000 * 10 ** decimals()` calcule le nombre total de tokens à créer :
        - `100000` est le nombre de tokens entiers.
        - `10 ** decimals()` ajoute les décimales. Par défaut, `decimals()` renvoie 18 pour la plupart des tokens ERC20.
        - Donc, si `decimals()` est 18, cela créera 100000 * 10^18 unités de base du token.

## Étape 2 - Déploiement

### 📑 **Description**:

Maintenant que vous avez codé et personnalisé votre token, vous allez déployer le déployer sur la blockchain [Polygon](https://polygon.technology/).

### 📌 **Todo**:

- [ ] Setup son compte Tangem

Premièrement, récupérez le fichier `DeployToPolygon.s.sol` sur GitHub et enregistrez le dans le dossier `script/`

Il faut indiquer à votre projet que l'on souhaite intéragir avec la blockchain Polygon. Pour ce faire, ajoutez ces lignes dans votre fichier foundry.toml

```toml
[rpc_endpoints]
polygon = "${POLYGON_RPC_URL}"
```

Récupérez la clée privée de votre wallet sur Tangem. Ensuite, il vous faut créer un fichier `.env` et y ajouter votre clée privée comme ceci

```env
POLYGON_RPC_URL=https://polygon-rpc.com
PRIVATE_KEY=votre_clé_privée_ici
```

>💡 *Le fichier .env vous permet de personnaliser vos variables d'environnement de travail individuelles.*


C'est le grand moment ! Entrez cette commande, et votre token devrait se déployer !

```sh
forge script script/DeployToPolygon.s.sol:DeployToPolygon --rpc-url $POLYGON_RPC_URL --broadcast --verify
```

Enfin, rendez-vous sur l'application de votre carte Tangem, vous devriez y aperçevoir votre token !

## Conclusion

Vous venez de créer votre propre ERC-20, bravo ! Au cours de cet atelier, vous avez appris ce qu'était un ERC-20, mais vous avez également créé votre propre implémentation. Vous pouvez trouver une implémentation célèbre [ici](https://github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts/token/ERC20/ERC20.sol), si vous le souhaitez, vous pouvez comparer votre implémentation avec la vôtre et éventuellement y ajouter des fonctionnalités.

J'espère que vous avez apprécié l'atelier !

## Authors

| [<img src="https://github.com/Sacharbon.png" width=120><br><sub>Sacha Dujardin</sub>](https://github.com/Sacharbon) |
| :-----------------------------------------------------------------------------------------------------------------: |
<h2 align=center>
Organization
</h2>

<p align='center'>
    <a href="https://www.linkedin.com/company/pocinnovation/mycompany/">
        <img src="https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white" alt="LinkedIn logo">
    </a>
    <a href="https://www.instagram.com/pocinnovation/">
        <img src="https://img.shields.io/badge/Instagram-E4405F?style=for-the-badge&logo=instagram&logoColor=white" alt="Instagram logo"
>
    </a>
    <a href="https://twitter.com/PoCInnovation">
        <img src="https://img.shields.io/badge/Twitter-1DA1F2?style=for-the-badge&logo=twitter&logoColor=white" alt="Twitter logo">
    </a>
    <a href="https://discord.com/invite/Yqq2ADGDS7">
        <img src="https://img.shields.io/badge/Discord-7289DA?style=for-the-badge&logo=discord&logoColor=white" alt="Discord logo">
    </a>
</p>
<p align=center>
    <a href="https://www.poc-innovation.fr/">
        <img src="https://img.shields.io/badge/WebSite-1a2b6d?style=for-the-badge&logo=GitHub Sponsors&logoColor=white" alt="Website logo">
    </a>
</p>

> 🚀 Don't hesitate to follow us on our different networks, and put a star 🌟 on `PoC's` repositories.
