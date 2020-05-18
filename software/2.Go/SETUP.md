# Setup

## 1. Sqlite3 | Database

Vous aurez besoin de [sqlite3](https://fr.wikipedia.org/wiki/SQLite), un moteur de base de données portables. Pour cela:
- sous fedora: `sudo dnf install sqlite`
- sous ubuntu: `sudo apt install sqlite3`

La base de données est contenue dans le fichier [dev.db](./dev.db)

Si vous voulez intéragir avec votre base de donnée:
```sh
# ouvrir la base de donnéee et lancer un shell pour communiquer avec
$ sqlite3 dev.db

# afficher toutes les tables de la base de données
sqlite> .table
Posts  Users

#afficher tous les champs de la table Users
sqlite> select * from users;
1|Taddeo|Taddeo@epitech.eu
2|Dael|Dael@epitech.eu
3|Damara|Damara@epitech.eu...
```

Ou utilisez une interface graphique de gestion de base de donnée pour visualiser votre db ([dbeaver](https://dbeaver.io/) par exemple)

## 2. Go

Dans ce workshop, nous allons utiliser les modules Go.  
Vous aurez donc besoin de Go en version **1.12 minimum**

```sh
# par exemple

$ go version
go version go1.12.10 linux/amd64 # OK
```
Ensuite, téléchargez le code du workshop [ici](https://downgit.github.io/#/home?url=https://github.com/PoCFrance/Workshops/tree/master/software/2.Go), puis vous pouvez lancer le server en allant dans le dossier [src](./src)
```sh
# pour simplement lancer le server
$ go run ./

# ou avec go build si vous voulez optenir un executable
$ go build ./
```

**Si vous obtenez `Server runs on http://localhost:8080`, vous avez fini le setup et vous pouvez passer aux exercices**
