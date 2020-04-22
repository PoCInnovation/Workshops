# Setup

Vous aurez besoin de:
- [node (version 10 minimum)](https://github.com/nodejs/node) : interpréteur de javascript
- [npm](https://www.npmjs.com/) : gestionnaire de dépendance pour node
- [npx](https://www.npmjs.com/package/npx) : executeur de commandes node
- [sqlite3](https://fr.wikipedia.org/wiki/SQLite) : gestionnaire de base de données

Pour cela:
- sous fedora: `sudo dnf install nodejs sqlite`
- sous ubuntu: `sudo apt install nodejs npm sqlite3`

Puis `sudo npm install -g npx`

Pour commencer à utiliser prisma, rien de plus simple, exécutez la commande suivante:
```sh
curl https://codeload.github.com/prisma/prisma-examples/tar.gz/starter | tar -xz --strip=2 prisma-examples-starter/javascript/starter
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

Vous pouvez utiliser `sqlite3` pour inspecter `prisma/dev.db`. Depuis le dossier `starter`, exécutez:
```sh
# ouvrir la base de donnéee et lancer un shell pour communiquer avec
$ sqlite3 ./prisma/dev.db

# afficher toutes les tables de la base de données
sqlite> .tables
Post  User

#afficher tous les champs de la table User
sqlite> select * from use
sarah@prisma.io|1|Sarah
maria@prisma.io|2|Maria
```

vous pouvez aussi afficher la base de données via une interface web:
```sh
npx prisma studio --experimental
```

Si vous avez fini toutes ces étapes, vous pouvez dès à présent passer aux exercices