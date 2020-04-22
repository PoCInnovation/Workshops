# Workshop 3 - API Prisma2

Dnas ce workshop, nous allons voir comment créer des API GraphQL à l'aide de [Prisma2](https://www.prisma.io/)

## Step 0: initialisation
Toutes les informations requises pour installer les dépendances du workshop sont disponibles dans [SETUP.md](./SETUP.md)

## Step 1: Récuprer les utilisateurs
Pour commencer, copiez ce début de code:
```javascript
const { PrismaClient } = require("@prisma/client")

const prisma = new PrismaClient()

async main()
{

}

main()
.catch(e => { throw e })
.finally(async () => { await prisma.disconnect() })
```

nous allons voir ligne par ligne ce qu'il fait:
```javascript
const { PrismaClient } = require("@prisma/client")
```
Node va chercher la dépendance `@prisma/client` dans les `node_modules`
> Attention: il s'agit d'une dépendance dite "intéligente", des informations seront stockées à l'interieur.

```javascript
const prisma = new PrismaClient()
```
Cette ligne crée une nouvelle instance d'un client prisma.

```javascript
async main()
{

}
```
Nous créons ici une fonction asyncrone. Elle nous permettera plus tard de gérer nos appels asyncrone plus facilement à l'interieur.  
Le javascript ne demande pas de main pour s'executer, il est interprété de manière linéaire.  

```javascript
main()
.catch(e => { throw e })
.finally(async () => { await prisma.disconnect() })
```
Pour finir, ce bout de code apelle notre fonction `main`, affiche un message si jamais une erreur s'est produite et déconnecte le client prisma une fois toutes les actions terminées.

## Authors
- [Paul Monnery](https://github.com/PaulMonnery/)
- [Naoufesse Berrada](https://github.com/nowlow/)
- [Cyril de Lajudie](https://github.com/Axoloot/)
