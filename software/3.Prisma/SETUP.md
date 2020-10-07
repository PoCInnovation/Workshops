# Setup

## Installation

Vous aurez besoin de:
- [node (version 10 minimum)](https://github.com/nodejs/node) : interpréteur de javascript
- [npm](https://www.npmjs.com/) : gestionnaire de dépendance pour node
- [npx](https://www.npmjs.com/package/npx) : executeur de commandes node

Pour cela:
- sous fedora: `sudo dnf install nodejs`
- sous ubuntu: `sudo apt install nodejs npm`

Puis `sudo npm install -g npx`

Pour commencer à utiliser prisma, rien de plus simple, exécutez la commande suivante:
```sh
curl https://codeload.github.com/prisma/quickstart/tar.gz/master | tar -xz --strip=2 quickstart-master/javascript/starter
```

Cela va vous télécharger un petit projet fournit par les developpeurs de Prisma pour appréhender les bases. Vous n'avez plus qu'à entrer dans votre dossier `starter` fraîchement crée et lancez:

```sh
npm install
```

Ils y a 5 fichiers importants dans le dossier `stater`:

- `package.json`: liste les dépendances npm  
- `prisma/schema.prisma`: le fichier des schémas Prisma qui définit les modèles de la base de données  
- `prisma/.env`: Définit la connection à la base de données avec son URL comme variable d'environnement  
- `prisma/dev.db`: Fichier de base de données SQLite  
- `script.js`: Fichier dans lequel vous allez coder vos fonctions  

vous pouvez aussi afficher la base de données via une interface web:
```sh
npx prisma studio --experimental
```

## Mise en place de prisma dans le code javascript

Nous allons voir ligne par ligne ce qu'il y a dans le fichier `script.js`:
```javascript
const { PrismaClient } = require("@prisma/client");
```
Node va chercher la dépendance `@prisma/client` dans les `node_modules`

<br>

```javascript
const prisma = new PrismaClient();
```
Cette ligne crée une nouvelle instance d'un client prisma.

<br>

```javascript
async function main() {
  // ... you will write your Prisma Client queries here
}
```
Nous créons ici une fonction asyncrone. Elle nous permettera plus tard de gérer nos appels asyncrone plus facilement à l'interieur.  

<br>

```javascript
main()
  .catch(e => {
    throw e
  });
  .finally(async () => {
    await prisma.$disconnect()
  });

```
Pour finir, ce bout de code appelle notre fonction `main`, affiche un message si jamais une erreur s'est produite et déconnecte le client prisma une fois toutes les actions terminées.

Actuellement, si vous faites `npm run dev`, rien ne devrait se produire. Nous allons préparer les bases des exercices suivants, pour cela, ajoutez dans votre fonction main la ligne suivante:
```js
console.log("getUsers:\n", await getUsers())
```

et ajoutez au dessus de votre fonction `main`:
```js
function getUsers() {
  return prisma.user.findMany();
}
```

Si vous relancez la commande `npm run dev`, vous deviez avoir cet output:
```json
getUsers:
 [ { id: 1, email: 'sarah@prisma.io', name: 'Sarah' },
  { id: 2, email: 'maria@prisma.io', name: 'Maria' } ]
```

**Si vous avez fini toutes ces étapes, vous pouvez dès à présent passer aux exercices**
