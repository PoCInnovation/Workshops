# Workshop Krypto Tour - Créer sa cryptomonnaie (ERC-20)

✔ Découverte de la norme ERC-20

✔ Coder sa cryptomonnaie

✔ Déployer sa cryptomonnaie sur la blockchain Polygon

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

### 📑 **Description** :

Pour créer notre token, nous allons devoir coder un smart contract. Nous utiliserons le language [Solidity](https://fr.wikipedia.org/wiki/Solidity).

>💡 *Un smart contract est un programme informatique autonome qui s'exécute automatiquement sur une blockchain lorsque des conditions prédéfinies sont remplies. Il permet d'automatiser et de sécuriser des accords sans intermédiaire, de manière transparente et immuable.*

### 📌 **Tâches** :

Premièrement, vous aller avoir besoin d'utiliser la bibliothèque de smart contrats d'OpenZeppelin: OpenZeppelin est une organisation qui fournit des smart contracts sécurisés et reconnus pour la blockchain Ethereum. Pour l'installer, entrez cette commande dans votre terminal:

```sh
forge install OpenZeppelin/openzeppelin-contracts
```

C'est le moment de coder !
- Ouvrez votre projet foundry `krypto-tour` dans VScode.
- Supprimez les fichiers `script/Counter.s.sol`, `test/Counter.t.sol` et `src/Counter.sol`.
- Créez un fichier `erc20.sol` dans le dossier `src/` et écrivez ces lignes:

**Version et import**
```js
// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.20;

import {ERC20} from "lib/openzeppelin-contracts/contracts/token/ERC20/ERC20.sol";
```

La directive `SPDX-License-Identifier` est une convention pour spécifier la licence du code source.\
Les mots-clés `pragma solidity` permettent de spécifier la version de Solidity à utiliser. Ici, nous utilisons la version 0.8.20.\
`import` est une fonctionnalité qui vous permet d'utiliser du code depuis d'autres fichiers dans votre programme actuel. Ici on importe le contrat ERC20 d'OpenZeppelin.

**Contract**
```js
contract Token is ERC20 {
}
```

`contract` en Solidity est un conteneur pour le code (ses fonctions) et les données (son état) qui résident à une adresse spécifique sur la blockchain.
Le mot-clé `is` en Solidity indique l'héritage. C'est à dire que notre contrat `Token` va pouvoir utiliser toutes les fonctions et événements définis dans le contrat `ERC20`.

```js
constructor() ERC20("KRYPTO-POC", "POC") {
	_mint(msg.sender, 100000 * 10 ** decimals());
}
```

- `constructor()` : C'est le constructeur du contrat, c'est lui qui est en charge de créer le smart contract. Il est appelé une seule fois, lors du déploiement du contrat sur la blockchain.
- `ERC20("KRYPTO-POC", "POC")` :
    - Ceci appelle le constructeur du contrat parent ERC20.
    - "KRYPTO-POC" est le nom complet du token: **vous pouvez le personnaliser !**
    - "POC" est le symbole du token (comme "BTC" pour Bitcoin): **vous pouvez le personnaliser !**
- `_mint(msg.sender, 100000 * 10 ** decimals());` :
    - `_mint` est une fonction interne de ERC20 qui crée de nouveaux tokens.
    - `msg.sender` est l'adresse qui déploie le contrat. Les nouveaux tokens seront envoyés à cette adresse.
    - `100000 * 10 ** decimals()` calcule le nombre total de tokens à créer :
        - `100000` est le nombre de tokens entiers.
        - `10 ** decimals()` ajoute les décimales. Par défaut, `decimals()` renvoie 18 pour la plupart des tokens ERC20.
        - Donc, si `decimals()` est 18, cela créera 100000 * 10^18 unités de base du token.

## Étape 2 - Déploiement

### 📑 **Description** :

Maintenant que vous avez codé et personnalisé votre token, vous allez pouvoir déployer votre smart contract sur la blockchain [Polygon](https://polygon.technology/).

### 📌 **Tâches** :

Commençons par créer un wallet temporaire qui va nous permettre de déployer notre token sur la blockchain Polygon. Pour cela, entrez cette commande dans votre terminal :

```sh
cast wallet new
```

Mettez de côté l'adresse et la clé privée du wallet généré, vous allez en avoir besoin.

Remplissez le formulaire suivant avec votre adresse email et l'`address` générée par la commande précédente : [https://forms.gle/ZXDvPHJwP4TN7aWeA](https://forms.gle/ZXDvPHJwP4TN7aWeA). Cela nous permettra de vous envoyer des tokens `MATIC` afin de payer les frais de déploiement.

C'est le grand moment ! Entrez cette commande, et votre token devrait se déployer ! Pensez simplement à remplacer `PRIVATE_KEY` par la clé privée de votre wallet temporaire.

```sh
forge create src/erc20.sol --rpc-url https://polygon-mainnet.g.alchemy.com/v2/m1TWeG_zxjMLlLQD1Y1ldDhoBXE_vO2H --private-key PRIVATE_KEY
```

La commande `forge create` permet de déployer un smart contract, ici notre token ERC20.

Le paramètre `--rpc-url` correspond à l'URL d'un noeud RPC de la blockchain Polygon. Un noeud RPC est un serveur qui permet de communiquer avec la blockchain.

La private key est une clé secrète qui permet de signer les transactions. Elle est nécessaire pour déployer un smart contract sur la blockchain.

## Étape 3 - Transfert des tokens sur son wallet Tangem

### 📑 **Description** :

Maintenant que votre token est déployé sur la blockchain Polygon, vous allez pouvoir le transférer sur votre wallet Tangem.

### 📌 **Tâches** :

Avant de transférer vos tokens, assurez-vous d'avoir configurer votre wallet Tangem et de l'avoir connecté à l'application. Vous pouvez ensuite récupérer l'adresse de votre wallet, vous en aurez besoin pour transférer vos tokens.

Entrez cette commande pour transférer vos tokens sur votre wallet Tangem. Pensez à remplacer `AMOUNT` par le nombre de tokens que vous souhaitez transférer, `ADDRESS` par l'adresse de votre wallet Tangem et `PRIVATE_KEY` par la clé privée de votre wallet temporaire.

```sh
cast send "transfer(address,uint256)" ADDRESS $(cast to-wei AMOUNT) --rpc-url https://polygon-mainnet.g.alchemy.com/v2/m1TWeG_zxjMLlLQD1Y1ldDhoBXE_vO2H --private-key PRIVATE_KEY
```

La commande `cast send` permet de déclencher une fonction d'un smart contract. Ici, nous utilisons la fonction `transfer` du contrat ERC20 pour envoyer des tokens à une adresse spécifique.

Enfin, rendez-vous sur l'application de votre carte Tangem, vous devriez y aperçevoir votre token !

## Conclusion

Vous venez de créer votre propre ERC-20, bravo ! Au cours de ce workshop, vous avez appris ce qu'était un ERC-20, mais vous avez également créé votre propre token et l'avez déployé sur la blockchain Polygon. Vous avez également pu découvrir les wallets Tangem et apprendre à utiliser l'application associée.

J'espère que vous avez apprécié ce workshop !

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
