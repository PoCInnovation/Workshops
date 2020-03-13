# API GO

## step 0: initiation
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

## step 1

Pour commencer, implementez une route basique sur le path `"/hello"` capable d'écrire "Hello World" dans votre reponse.

## step 2

intro a
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

catchez un message passé dans le body de la requete
catchez un index passé dans l'url
concatenez les deux input et printez le dans le terminal

**testez avec postman / curl**

## step 3
### part 1

middleware classique
check le mux -> pair passe / impair -> error

### part 2
on peut faire un serveur avec une clee il font une request get avec le midle ware pour voir si il peuvent accerder au chemin

## step 4
### part 1

intercation avec la db sur des method get

### part 2

intercation avec la db sur des method post

