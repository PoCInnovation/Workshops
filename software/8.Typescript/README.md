# Workshop 8 - Typescript avec Express

✔ Apprendre à créer un serveur HTTP avec express.

✔ Comprendre les bases et les bonnes pratiques du développement web.

✔ Sécuriser les routes de votre serveur avec des frameworks de validation.

✔ Explorer les ressources d'une requête, leur localisation et leur utilité.

## Step 0 : Setup

Toutes les infos relatives à la préparation du workshop sont disponibles dans le [SETUP.md](./SETUP.md).

Veillez à avoir terminé ses étapes avant de passer à la suite.

## Step 01 : Le Hello World du serveur web

Pour créer un serveur web en TS, vous allez avoir besoin du package [express](https://github.com/expressjs/express).

```sh
npm install express @types/express
```

Le but de cet exercice est de mettre en place un serveur qui expose une route `/hello` qui retourne `world` lorsque vous l'appelez avec la méthode **GET**.

- Créer une variable `server` qui vas instancier votre serveur express.
- Lancer le serveur en écoutant sur le port `8080`.
- Définir une route **GET** `/hello` qui renvoie `ẁorld`

> Une pratique basique lorsque vous lancer un serveur est d'afficher un message avec l'adresse du serveur afin de pouvoir y accéder facilement.

**Rendu :** `src/server.ts`.

#### Ressources :
- [Express](https://github.com/expressjs/express)
- [Serveur HTTP](https://developer.mozilla.org/en-US/docs/Learn/Common_questions/What_is_a_web_server)
- [Méthode HTTP](https://developer.mozilla.org/fr/docs/Web/HTTP/M%C3%A9thode)

## Step 02 : Abuser des bonnes choses

En HTTP, les paramètres de votre demande peuvent être exprimés à différents endroits :

- `body`
- `parameter`
- `query`
- `cookie`
- `header`

Pour parser les données venant de ces différents endroits, vous aurez besoin d'installer des middlewares utilisés par express :
```sh
npm install body-parser cookie-parser @types/cookie-parser
```

Votre application express devra par la suite utiliser (`use()`) sur ces 2 parsers pour les appliquer à l'ensemble du serveur.
  
À présent, il ne vous reste plus qu'à créer ces différentes routes :

- Créer une route **GET** `/repeat-my-query`
  - Prend un paramètre query `message`
  - Renvoie le message donné en paramètre
  - Si aucun message n'est donné
    - Définir le statut 400
    - Renvoyer `Bad Request`

- Créer une route **GET** `/repeat-my-param/:message`
  - Prend un paramètre `message`
  - Renvoie le message donné en paramètre

- Créer une route **POST** `/repeat-my-body`
  - Renvoie le `messsage` donné dans le corps de la requête
  - Si le corps est vide
    - Définir le statut 400
    - Renvoyer `Bad Request`

- Créer une route **GET** `/repeat-my-header`
  - Cherche un header `X-Message`
  - Renvoie le message écrit dans celui-ci
  - Si aucun message n'est donné
    - Définir le statut 400
    - Renvoyer `Bad Request`

- Créer une route **GET** `/repeat-my-cookie`
  - Cherche un cookie `message`
  - Renvoie le message donné dans le cookie
  - Si aucun message n'est donné
    - Définir le statut 400
    - Renvoyer `Bad Request`

> [Postman](https://www.postman.com/) peut être utile pour tester vos routes HTTP.

**Rendu :** `src/server.ts`.

#### Ressources :
- [Les cookies dans Express](https://github.com/expressjs/cookie-parser)
- [Les headers dans Express](https://flaviocopes.com/express-headers/)

## Step 03 : Toujours penser au scaling

Les variables d'environnement sont des variables utilisées par votre système d'exploitation dans de nombreux domaines. Elles sont visibles en tapant `env` dans votre terminal. 

Ces variables sont utilisées lors que vous déployez une application en production pour sécuriser des mots de passes et identifiants privés. Il est donc essentiel de savoir comment les utiliser dans votre code.
 
Pour cela, nous allons utiliser le package [env-var](https://github.com/evanshortiss/env-var) qui permet de charger automatiquement des variables d'environnement depuis un fichier :

```sh
npm i env-var
```

Par la suite, créez un fichier `.envrc` qui exportera les variables d'environnement suivantes :
  - SERVER_PORT=8080
  - HELLO_MESSAGE=world

:warning: Vous devrez également installer [direnv](https://direnv.net/) afin de charger les variables dans votre environnement avec la commande `direnv allow`.

Dans le fichier `src/serverConfig.ts`, récupérez les deux variables d'environnement et exportez-les.

:bulb: La manière la plus propre est d'avoir une fonction prenant en paramètre la `key` de la variable si elle est obligatoire, puis qui vous renvoie sa valeur. De plus, n'hésitez pas à typer vos variables d'env grâce aux méthodes proposées par le package.

> Il est commun dans une API d'avoir un fichier spécifique à la configuration, il vous permet de garder une architecture propre et constante.

Adaptez le code du serveur express pour utiliser le port défini dans l'environnement de préférence, et si non défini, utilisez le port `8080`.

Enfin, adaptez le code de la route **GET** `/hello` pour utiliser la variable `HELLO_MESSAGE` comme réponse.
  - Si la variable n'est pas présente :
      - Définir le statut 404
      - Renvoyer `No Message Defined`

Si votre `.envrc` contient des variables privées, il est impératif de ne pas le push sur un repo en temps normal.
La bonne pratique est de créer un fichier `envrc.example` contenant les différentes variables mais sans leurs valeurs, afin d'indiquer ce qui sera par la suite nécessaire, puis de le remplir et de le renommer en `.env`.

> Il est important de penser depuis le début de l'application à l'intégration de votre serveur dans une architecture Web en plaçant le maximum de variables susceptibles de changer dans l'environnement.
>
> :warning: Il n'est pas rare de stocker des informations confidentielles dans l'environnement, veillez donc à ne jamais push votre environnement. Optez plutôt pour un fichier `env.example` qui spécifie les variables à rentrer par le développeur.

**Rendu :** `src/serverConfig.ts` et `src/server.ts`.

#### Ressources :
- [Env-var](https://github.com/evanshortiss/env-var)
- [Direnv](https://direnv.net/)

## Step 03 : Les statuts HTTP

Une API REST renvoie de la donnée en fonction de ce qu'un client demande, mais si jamais ce dernier tentait d'accéder à des données qui ne lui appartiennent pas, ou qui n'existent pas, notre api ne pourra pas lui envoyer ce qu'il demande.

Un code HTTP permet de déterminer le résultat d'une requête ou d'indiquer une erreur au client. Ces codes sont essentiels au bon fonctionnement des services communiquant en HTTP. Il est donc tout autant essentiel de bien coder son serveur pour renvoyer les codes adaptés à la situation.

Créer une route **GET** `/health` qui renvoie tout le temps le statut `200`.
Si jamais lors de vos tests cette route ne fonctionne plus, c'est que votre serveur n'est pas lancé ou ne fonctionne pas.

Il est commun d'utiliser la dépendance `http-status-codes` pour expliciter vos status dans votre code.

Installez la dépendance avec la commande suivante :

```sh
npm i http-status-codes
```

Remplacez vos status-codes écrits en dur par ceux proposés dans le package.

**Rendu :** `src/server.ts`.

#### Ressources :
- [Les principaux codes HTTP](https://medium.com/@sahelasumi/http-status-codes-31644d99fb1)
- [Liste complète des codes](http://www.standard-du-web.com/liste_des_codes_http.php)
- [Utiliser les status HTTP en Typescript](https://github.com/prettymuchbryce/http-status-codes)

## Step 05 : Testing time

Quand on crée des routes, on a envie de pouvoir tester simplement si elles fonctionnent, et si leur implémentation n'a pas cassé les autres routes.<br>
C'est dans ce cas de figure que Postman peut s'avérer très utile.

Vous allez donc créer une collection Postman contenant des tests sur toutes les routes précédemment codées.<br>
Une fois vos requêtes créées, vous devriez pouvoir lancer une test-suite sur votre serveur.

> Nous vous recommandons de mettre à jour cette collection pour toutes les routes des exercices suivants.

#### Ressources :
- [Collection Postman](https://learning.postman.com/docs/sending-requests/intro-to-collections/)
- [Test suite Postman](https://www.postman.com/use-cases/api-testing-automation/)
- [Environnement Postman](https://learning.postman.com/docs/sending-requests/managing-environments/)

## Step 06 : Qui utilise du texte brut ?

Formatter les données renvoyées est obligatoire pour faciliter l'utilisation de votre API !<br>
Vous pouvez renvoyer des informations sous diverses formes. La plus commune étant un tableau d'objet. 

- Créez une route **GET** `/repeat-all-my-queries` :
  - Renvoie un tableau d'objets de la forme suivante :
    ```json
    [
        {
            "key": "<key of the query>",
            "value": "<value of the query>"
        }
    ]
    ```

> Le retour étant un tableau d'objets, créer une `interface` peut s'avérer utile.

> Les paramètres de la requête sont un objet, n'oubliez pas ce détail.

**Rendu :** `src/server.ts`.

#### Ressources :
- [Travailler avec un objet](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Object)

## Step 07 : Un peu de logique 🤯

Formatter les données c'est bien. Travailler avec, c'est mieux !

- Créez une route **POST** `/are-these-palindromes`
  - Reçoit en paramètre un body JSON de la forme suivante :
    ```json
    [
        "meow",
        "lol"
    ]
    ```
  - Doit renvoyer un tableau d'objets de la forme suivante :
    ```json
    [
        {
            "input": "meow",
            "result": false
        },
        {
            "input": "lol",
            "result": true
        }
    ]
    ```

**Rendu :** `src/server.ts`.
 
#### Ressources :
- [Méthode applicable sur une string](https://www.tutorialspoint.com/typescript/typescript_strings.htm)

## Step 08 : Les bodyguards des serveurs

En web, il est important de savoir quels types de donnée sont envoyés à votre API.<br>
Cela vous permet d'avoir un code stable et sécurisé.

Envoyez un body vide à la route précédente, vous devriez obtenir une erreur en retour. Ce genre d'erreur n'est pas acceptable pour une API.

Pour assurer la sécurité d'une API, il existe un système que l'on appelle `Middleware`.

Voici la structure d'un middleware dans une API express :

```typescript
/**
 * req  - Requête entrante
 * res  - Réponse
 * next - Fonction suivante à executer dans la route
*/
const monMiddleware = (req: Request, res: Response, next: NextFunction) => {
  // Logique du middleware
}
```

> Les Middlewares peuvent également servir à mettre en place un logger, une gestion des permissions etc.

Nous allons utiliser le framework [Zod](https://github.com/vriad/zod) afin de vérifier nos entrées.<br>
Zod permet de récupérer un body prédéfini et typé, ce qui est essentiel en Typescript !

Installer zod grâce à la commande :

```sh
npm i zod@beta
```

Ajoutez la ligne `"strictNullChecks": true` dans votre `tsconfig.json` afin d'exploiter toutes les features de Zod.

### Créer le schéma

Zod fonctionne selon un système de `schema`.<br>
La première étape est donc de créer un objet zod `palindromeSchema` avec les exigences du body attendu.<br>
Vous écrirez tout cela dans le fichier `serverSchema.ts`.

> Vos schémas peuvent être utilisés comme des types grâce à zod.infer, c'est l'une des grandes forces de ce framework car vous n'avez pas à dupliquer vos types.

### Écrire le middleware

Dans le fichier `serverMiddlewares`, écrivez un middleware `verifyPalindromeRoute` qui va vérifier le body de la route `/are-these-palindromes`.<br>
En cas de body invalide, renvoyer le status `400` et la raison du refus.

Pour ajouter un middleware à une route spécifique, il vous suffit de l'appeler comme ci-dessous :

```typescript
route.get('/my-route', myMiddleware, (req: Request, res: Response) => {...});
```

> `server.use(myMiddleware())` permet d'appliquer votre middleware à toutes vos routes.

**Rendu :** `src/serverSchema.ts`, `src/serverMiddlewares` et `src/server.ts`.

#### Ressources :
- [Zod](https://github.com/vriad/zod)
- [Middleware](https://expressjs.com/en/guide/using-middleware.html)

## Step 09 : La forteresse automatique ⚙

Écrire des middlewares, c'est très bien mais imaginons que nous ayons 10 routes à vérifier, nous n'allons pas écrire un middleware par schéma.

Le but de cet exercice est donc de créer un middleware générique.

Pour cela : 
- Écrivez une fonction `validateMiddleware` qui prend en paramètre un `schema` et une `location` et qui renvoie un middleware.
- Ce middleware doit:
   - Selon la localisation, analyser la donnée de la requête :
     - En cas de requête invalide : Renvoyer le status `400` et la raison de l'erreur
     - En cas de succès : continuer sur la route
- Remplacer le middleware `verifyPalindromeRoute` par le nouveau middleware et vérifier que tout fonctionne.

> Si vous avez bien tout compris, il s'agit bien d'une fonction qui retourne une fonction 🤯. Les [arrow functions](https://basarat.gitbook.io/typescript/future-javascript/arrow-functions) sont adaptées à ce genre d'usage

Les signatures des fonctions peuvent être imbriquées comme ci-dessous :

```typescript
const validate = (schema: any, location: string): void => (req: Request, res: Response, next: NextFunction): void => your logic goes here
```

:warning: Le type du schéma est `any`, car il n'y a pas de type générique disponible pour un schéma zod (à moins que...).


> Vous pouvez bien évidemment mettre une location par défaut pour faciliter la lecture du code.
>
> Les résultats du parsing de Zod étant typés, vous pouvez stocker son résultat dans la requête sans crainte.
>
> Il est important de penser à créer des middlewares quand une même action se répète souvent dans vos routes, cela rend le code plus agréable à lire et assure une maintenabilité.

**Rendu :** `src/serverMiddlewares.ts` et `src/server.ts`

#### Ressources :
- [Middleware express](https://expressjs.com/en/guide/using-middleware.html)
- [Arrow function](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions)

## Step 10 : Souvenez-vous, Coder bien pour soi et pour les autres

À ce point là du sujet, vous avez donc un fichier avec plusieurs routes :
- Quelques unes qui récupèrent du contenu de la requête
- D'autres qui analysent des palindromes

Il s'agirait d'organiser ces routes dans différents fichiers et de les importer dans le **serveur**.

- Créer un dossier `routes`
  - Dedans vous aurez toutes vos routes :
    - `repeat.ts`
    - `palindromes.ts`
  - Déplacer vos routes dans les fichiers correspondant
- Trouver un moyen de les utiliser dans votre `server.ts`. 

> Protip : `Express.Router()` sera très utile.

> Lorsque vos middlewares ou vos routes se multiplient, il peut être utile de d'abord les grouper dans un fichier `serverRoutes.ts` et `serverMiddleware.ts` avant de les utiliser dans `server.ts`. Vous conservez ainsi une architecture simple et solide.

**Rendu :** `src/routes/repeat.ts`, `src/routes/palindromes.ts` et `src/server.ts`.

#### Ressources :
- [Router express](https://expressjs.com/fr/guide/routing.html)

## Step 11: Winston au rapport !

Vous avez maintenant une architecture correcte. Il manque néanmoins quelque chose... Notre API ne renvoie aucune information !
Comment savoir quel utilisateur utilise votre API ? Quelle requête ? Comment voir un problème côté serveur ?

La solution à ce problème réside dans un **logger**. C'est une chose primordiale autant lors du développement que lors de la mise en production.

Nous allons pour cela utiliser le logger [winston](https://github.com/winstonjs/winston). Il a la particularité d'être facilement configurable tout en restant simple d'utilisation.

```sh
npm install winston 
```

### Winston ! Debout

Vous allez maintenant setup le logger dans votre API.

Dans le fichier `src/serverLogger.ts`, exportez un logger winston avec les propriétés suivantes :
  - Le format de sortie doit être le suivant : `"[{timestamp}] [{severity}]": {message}`
  - Les logs doivent s'écrire sur la sortie standard mais aussi dans le fichier `/var/log/api.log`
  - Les logs écris sur la sortie standard doivent être en couleur

> Winston fonctionne avec un système de transport, vous pouvez donc en ajouter plusieurs en même temps. Un système de _severity_ est également intégré afin de classer les logs selon leur importance. Une good practice consiste à sauvegarder les logs d'erreur dans un fichier `/var/log/error.log` afin de simplifier les recherches de problèmes.

> Pour plus de clarté, vous pouvez énumérer la `severity` dans une `Enum`. C'est une pratique commune en Typescript.
  
Vérifier que tout fonctionne en remplaçant le `console.log` présent dans le fichier `server.ts` par un log de niveau `info`.

### Winston ! En rang !

Le logger fonctionne très bien. Il faut à présent logger les requêtes entrantes dans votre API. Un middleware est parfait pour ce genre de situation !

Dans le fichier `src/serverMiddlewares.ts`, créer un middleware `logMiddleware`, il doit :
  - Logger les requêtes entrantes avec le message : `"request [{request_id}] on [{method}] [{path}] from ({user_ip})"`
  - Logger les réponses avec le message : `request [{request_id}] response in {elapsed_time}ms with status {response status code}`

> Vous pouvez créer un ID unique à vos requêtes grâce à la dépendance [uuid](https://www.npmjs.com/package/uuid).

> Logger la réponse nécessite un petit tour de passe-passe rendu possible grâce aux [events](https://nodejs.org/api/http.html).

Appliquez le middleware à votre API et vérifiez que tout fonctionne en envoyant des requêtes.

**Rendu :** `src/server.ts`, `src/serverLogger.ts`, `src/serverMiddlewares.ts`.

#### Ressources
- [Winston](https://github.com/winstonjs/winston)
- [Events](https://nodejs.org/api/http.html)
- [L'objet Date](https://www.cosmiclearn.com/typescript/date.php)

## Ressources complémentaires

Voici une liste de lien si vous souhaitez en apprendre plus sur les API en Typescript :
- [Documenter son API](https://stoplight.io/)
- [NestJS, le boilerplate express](https://nestjs.com/)
- [Gérer l'asynchronicité sur son server](https://github.com/tranvansang/middleware-async)
- [Insomnia, un Postman épuré](https://insomnia.rest/)
- [Les frameworks NodeJS](https://nodesource.com/blog/Express-Koa-Hapi)
- [Une gestion d'erreur centralisé](https://dev.to/nedsoft/central-error-handling-in-express-3aej)
