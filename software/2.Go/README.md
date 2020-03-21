# Workshop 2 - API GO

## step 0: initialisation
Toutes les inforatons requises pour installer les dépendances du workshop sont disponibles dans [SETUP.md](./SETUP.md)


### Comment marche un server asynchrone
set up de **route** au travers d'un router puis **listenAndServe**

### dependence
```go
import (
	"encoding/json"
	"log"
	"net/http"

	"github.com/gorilla/handlers"
	"github.com/gorilla/mux"
)
```
### documentation

``https://github.com/gorilla/mux``

### set up

```go
mux.NewRouter()
//set up de route
http.ListenAndServe(":" + PORT, handlers.CORS(
			handlers.AllowedHeaders([]string{"X-Requested-With", "Content-Type", "Authorization"}),
			handlers.AllowedMethods([]string{"GET", "POST", "PUT", "HEAD", "OPTIONS"}),
			handlers.AllowedOrigins([]string{"*"}))(server.router))
```

## step 1: Premiere route

Pour commencer, implementez une route basique sur le path `"/hello"` capable d'écrire "Hello World" dans votre reponse.

## step 2: Approfondissons

introduction au
- `body`
- `parameter`
- `query`

- Créer une route **GET** '/get_my_message'
  - Prend un paramètre query `message`
  - Renvoit le message donné en paramètre
  - Si aucun message est donné
    - Définir le statut 400
    - Renvoyer `Bad Request`

- Créer une route **POST** '/send_my_body'
  - Renvoit le message donné dans le corps de la requête
  - Si le corps est vide
    - Définir le statut 400
    - Renvoyer `Bad Request`

**vous pouvez testez via postman ou curl**
- `postman` -> [intro_a_postman](``https://learning.postman.com/docs/postman/launching-postman/introduction/``)

- `curl` -> [intro_a_curl](`https://flaviocopes.com/http-curl/`)

## step 3: Les Middlewares

middleware classique check le mux -> pair passe / impair -> error

## step 4: Les bases de données
### part 1: methode **GET** sur une **DB**

faite une methode **GET** pour recuperé les users de la **DB** donné dans le sujet


### part 2: methode **POST** sur une **DB**

faite une methode **POST** pour rajouter des users dans la **DB** donné dans le sujet


## Author
- [Théo Ardouin](https://github.com/CrystallizedYou/)
- [Paul Monnery](https://github.com/PaulMonnery/)
- [Grégoire Brasseur](https://github.com/lerimeur/)