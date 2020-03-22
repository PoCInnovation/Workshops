# Workshop 2 - API GO

## Step 0: initialisation
Toutes les informaions requises pour installer les dépendances du workshop sont disponibles dans [SETUP.md](./SETUP.md)


<!-- ### Comment marche un server asynchrone
set up de **route** au travers d'un router puis **listenAndServe** -->

### Dépendances
```go
import (
    "encoding/json"
    "log"
    "net/http"

    "github.com/gorilla/mux"
    "github.com/gorilla/handlers"
    "github.com/jinzhu/gorm"
)
```

Nous utiliserons pour ce workshop:
- [mux](https://www.gorillatoolkit.org/pkg/mux), un router HTTP, il permet de créer des routes pour récuperer de la donnée.
- [handlers](https://www.gorillatoolkit.org/pkg/handlers) pour ajouter des middlewares à notre server.
- [gorm](https://gorm.io/docs/), un ORM pour Go. Il nous permet de faire des recherches dans les bases de données sans avoir à écrire les requêtes SQL à la main.



### Exemple

```go
mux.NewRouter()
//set up de route
http.ListenAndServe(":" + PORT, handlers.CORS(
    handlers.AllowedHeaders([]string{"X-Requested-With", "Content-Type", "Authorization"}),
    handlers.AllowedMethods([]string{"GET", "POST", "PUT", "HEAD", "OPTIONS"}),
    handlers.AllowedOrigins([]string{"*"}))(server.router))
```

## Step 1: Première route

Pour commencer, implementez une route basique `"/hello"` qui renvoie `world` quand vous allez sur http://localhost:8080/hello

## Step 2: Routes avec paramètres

Vous allez devoir envoyer des paramètres au server via les routes. Pour cela, vous allez faire varier l'url de votre route.

Créer une route **GET** `/blog/{user}`
- Prend un paramètre `user`
- Renvoit `I am {user} !`
- Si aucun message n'est donné:
  - Définir le statut 400
  - Renvoyer `Bad Request`


> vous pouvez tester vos routes via [postman](https://learning.postman.com/docs/postman/launching-postman/introduction/) ou [curl](https://flaviocopes.com/http-curl/)

## Step 3: Mise en place des Middlewares

<!-- middleware classique check le mux -> pair passe / impair -> error -->

## Step 4: Connection à la base de données
<!--
### part 1: methode **GET** sur une **DB**

faite une methode **GET** pour recuperé les users de la **DB** donné dans le sujet


### part 2: methode **POST** sur une **DB**

faite une methode **POST** pour rajouter des users dans la **DB** donné dans le sujet
 -->

## Author
- [Théo Ardouin](https://github.com/CrystallizedYou/)
- [Paul Monnery](https://github.com/PaulMonnery/)
- [Grégoire Brasseur](https://github.com/lerimeur/)