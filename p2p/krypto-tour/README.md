# Workshop - Découverte du Développement Blockchain et des Outils

✔ 📖 **Découvrez Foundry**  
✔ 🛠️ **Déployez un Smart Contract sur une Blockchain Locale**  
✔ 🚀 **Appelez ce Smart Contract**

## Introduction

Cet atelier présente le développement blockchain et les outils nécessaires pour déployer et interagir avec des smart contracts. Nous vous guiderons à travers le déploiement de votre premier smart contract en utilisant Foundry sur une blockchain locale, et nous l’appellerons pour voir comment il fonctionne.

### Qu'est-ce qu'un Smart Contract ?
Un smart contract est un contrat auto-exécutable avec des actions directement écrits dans le code. Une fois déployé sur une blockchain, il peut être interagi comme n'importe quel autre logiciel, mais il est décentralisé, ce qui signifie que personne ne peut le modifier une fois qu'il est en ligne.

## Prérequis

Cet atelier ne nécessite **aucune connaissance préalable**. Tout ce dont vous avez besoin est un ordinateur et une connexion Internet.

## Étape 1 - Installer VSCode

VSCode est un éditeur de texte que les développeurs utilisent pour écrire du code. Pensez-y comme `Word` de Microsoft office mais spécialisé pour écrire du code. C'est ici où vous allez écrire votre smart contract.

1. Allez sur le [site officiel](https://code.visualstudio.com/download) et téléchargez la version de VSCode pour votre système d'exploitation.
2. Suivez les instructions d'installation sur le site, et une fois installé, ouvrez-le. Vous l'utiliserez pour écrire votre smart contract plus tard.

## Étape 2 - Installer Foundry et initialiser un projet

Toutes les étapes d'installation de Foundry sont dans le [fichier SETUP.md](./SETUP.md). Suivez les instructions pour installer Foundry sur votre ordinateur.

### Supprimer les Fichiers Inutiles
Certains fichiers fournis avec le projet de démarrage ne sont pas nécessaires pour cet atelier.

1. Supprimez les dossiers et fichiers suivants :
   - Dossier `test`
   - Dossier `script`
   - Fichier `Counter.sol` dans le dossier `src`

2. Maintenant, ajoutez le fichier `HelloWorld.sol` dans le dossier `src`. C'est le smart contract que vous allez déployer.
   - Le smart contract n'a qu'une seule fonction `hello()` qui renvoie le message `Hello world`.

> **Pourquoi un "Hello World" ?**  
> Le programme "Hello World" est souvent le premier exemple de code que les développeurs écrivent lorsqu'ils apprennent un nouveau langage de programmation. Cette tradition remonte à 1972, lorsqu'il a été utilisé dans le livre "The C Programming Language" pour illustrer la syntaxe de base et l'affichage à l'écran.


## Étape 4 - Démarrer la Blockchain Locale

### Qu'est-ce qu'une Blockchain Locale ?

Une blockchain locale est comme un simulateur de blockchain fonctionnant sur votre ordinateur. Elle vous permet de tester vos smart contracts sans utiliser de l'argent réel ou interagir avec une blockchain publique.

1. Pour démarrer votre blockchain locale, exécutez la commande suivante dans le terminal :

   ```shell
   anvil
   ```

   Anvil démarrera une blockchain locale et vous fournira une liste de portefeuilles pré-créés. Chaque portefeuille contient une crypto-monnaie fictive afin que vous puissiez déployer des smart contracts sans avoir besoin d'argent réel.

2. **Copiez l'une des clés privées** de la liste. Vous utiliserez cette clé pour déployer votre smart contract à l'étape suivante.
  exemple: `0xac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80`
  > **Qu'est-ce qu'une clé privée ?**
    > Une clé privée est une chaîne de caractères qui permet d'accéder à un portefeuille de crypto-monnaie. C'est comme un mot de passe, mais plus long et plus sécurisé. Ne partagez jamais votre clé privée avec quelqu'un d'autre, car cela leur donnerait accès à votre portefeuille.

## Étape 5 - Déployer le Smart Contract

### Que signifie Déployer ?
Lorsque vous déployez un smart contract, vous le publiez sur une blockchain afin qu'il puisse être utilisé. Une fois déployé, il est en ligne et prêt à être utilisé.

1. Pour déployer votre smart contract, exécutez la commande suivante :

   ```shell
   forge create --private-key PRIVATE_KEY src/HelloWorld.sol:HelloWorld
   ```

   Remplacez `PRIVATE_KEY` par la clé privée que vous avez copiée plus tôt depuis la blockchain locale.

2. Après avoir exécuté la commande, vous verrez quelques informations sur le déploiement. Recherchez la partie qui dit `deployed to`, suivie d'une adresse. **Copiez cette adresse**, car c'est là que se trouve votre smart contract sur la blockchain, et vous en aurez besoin à l'étape suivante.

## Étape 6 - Appeler le Smart Contract

### Que signifie Appeler un Smart Contract ?
Appeler un smart contract signifie interagir avec lui en exécutant l'une de ses fonctions. Pour cet atelier, vous allez appeler la fonction `hello()` du smart contract, qui renverra un message.

1. Exécutez la commande suivante pour appeler la fonction `hello()` :

   ```shell
   cast call CONTRACT_ADDRESS "hello()" | tr -d '\n' | cast to-ascii
   ```

   Remplacez `CONTRACT_ADDRESS` par l'adresse du smart contract que vous avez copiée précédemment.

2. Vous devriez voir la sortie `Hello world`. 

   Voici ce que fait chaque partie de la commande :
   - `cast call` est utilisé pour appeler une fonction dans le smart contract.
   - Le premier argument est l'adresse du smart contract.
   - Le deuxième argument est la fonction à appeler (`hello()` dans ce cas).
   - `tr -d '\n'` supprime le caractère de nouvelle ligne à la fin de la sortie.
   - `cast to-ascii` convertit la sortie de l'hexadécimal en texte lisible (ASCII).

## Conclusion

Félicitations ! Vous avez déployé et appelé un smart contract sur une blockchain locale. Vous avez fait vos premiers pas dans le développement blockchain, et j'espère que cet atelier vous a donné un aperçu de la puissance de cette technologie.

N'hésitez pas à explorer davantage, à modifier le smart contract et à plonger plus profondément dans Foundry et la blockchain !

## Auteurs 👋

| [<img src="https://github.com/Intermarch3.png" width=120><br><sub>Lucas LECLERC</sub>](https://github.com/Intermarch3) |
| :--------------------------------------------------------------------------------------------------------------------: |

<h2 align="center">Organisation</h2>
<br/>
<p align='center'>
    <a href="https://www.linkedin.com/company/pocinnovation/mycompany/">
        <img src="https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white" alt="Logo LinkedIn">
    </a>
    <a href="https://www.instagram.com/pocinnovation/">
        <img src="https://img.shields.io/badge/Instagram-E4405F?style=for-the-badge&logo=instagram&logoColor=white" alt="Logo Instagram">
    </a>
    <a href="https://twitter.com/PoCInnovation">
        <img src="https://img.shields.io/badge/Twitter-1DA1F2?style=for-the-badge&logo=twitter&logoColor=white" alt="Logo Twitter">
    </a>
    <a href="https://discord.com/invite/Yqq2ADGDS7">
        <img src="https://img.shields.io/badge/Discord-7289DA?style=for-the-badge&logo=discord&logoColor=white" alt="Logo Discord">
    </a>
</p>
<p align="center">
    <a href="https://www.poc-innovation.fr/">
        <img src="https://img.shields.io/badge/WebSite-1a2b6d?style=for-the-badge&logo=GitHub Sponsors&logoColor=white" alt="Logo Site Web">
    </a>
</p>

> 🚀 N'hésitez pas à nous suivre sur nos différentes plateformes et à donner une étoile 🌟 aux dépôts de PoC.