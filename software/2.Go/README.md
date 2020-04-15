# Workshop 2 - API GO

## Step 0: initialisation
Toutes les informaions requises pour installer les dépendances du workshop sont disponibles dans [SETUP.md](./SETUP.md)

Nous utiliserons pour ce workshop:
- [mux](https://www.gorillatoolkit.org/pkg/mux), un router HTTP, il permet de créer des routes pour récuperer de la donnée.
- [handlers](https://www.gorillatoolkit.org/pkg/handlers) pour ajouter des middlewares à notre server.
- [gorm](https://gorm.io/docs/), un ORM pour Go. Il nous permet de faire des recherches dans les bases de données sans avoir à écrire les requêtes SQL à la main.

## Step 1: Première route

Pour commencer, implementez une route basique `"/hello"` qui renvoie `world` quand vous allez sur http://localhost:8080/hello

## Step 2: Routes avec paramètres

Vous allez devoir envoyer des paramètres au server via les routes. Pour cela, vous allez faire varier l'url de votre route.

Créez une route **GET** `/whoami/{user}`
- Prend un paramètre `user`
- Renvoie `I am {user} !`
- Si aucun message n'est donné:
  - Définie le statut 400
  - Renvoie `Bad Request`


> vous pouvez tester vos routes via [postman](https://learning.postman.com/docs/postman/launching-postman/introduction/) ou [curl](https://flaviocopes.com/http-curl/)

## Step 3: Mise en place des Middlewares

À présent, vous allez mettre en place des middleware pour vos routes. Ils sont généralement utilisés pour verifier la donnée reçu avant de l'envoyer au reste du server. Par exemple, verifier que le compte qui essaie d'ccèder à une route `/admin` est bien un administrateur. Dans notre cas, pas le temps de mettre en place tout un système d'authentification, nous allons donc utiliser un middleware pour une tâche plus basique.

Ajoutez le middleware `idIsCorrect`
- Prend en paramètre l'`id` reçu
- Vérifie si l'id est bien positif

## Step 4: Connection à la base de données

Nous rentrons enfin dans le vif du sujet. Le server va aller se connecter à une base de donnée et récuperer la data demandée par l'utilisateur.
> le setup de GORM est disponible dans le fichier [init.go](./src/database/init_db.go).

### Part 1: Premières query

Vous allez à présent utiliser votre orm pour récuperer dans la base de données toutes les informations relatives à l'utilisateur entré en paramètre et ses posts:
- Créez la route `/get/{user_id}`
- Renvoie toutes les informations de `user_id` présente dans la DB, sous la forme d'un JSON
- Elle utilise le middleware qui vérifie l'id
- Si aucun message n'est donné:
  - Définie le statut 400
  - Renvoie `Bad Request`

### Part 2: Insertion de donnée dans votre DB

À présent, vous allez créer de nouveaux posts pour les utilisateurs, pour cela:
- Créez une route **GET** `/add/{id}/{firstName}`
  - Elle prend en paramètre `firstName`
  - Elle utilise le middleware qui vérifie l'id
  - S'il manque un paramètre, définisez le statut 400 et renvoyez `Bad Request`
  - Si tout est correct, elle insert les informations dans la DB, définit le statut 200 et renvoie `Success`

## Bonus

Si vous avez tout fait jusque là, vous êtes libre de créer les routes que vous voulez, comme par exemple intéragir avec les posts des users, afin d'en ajouter, en lire ou en supprimer.


## Author
- [Théo Ardouin](https://github.com/CrystallizedYou/)
- [Paul Monnery](https://github.com/PaulMonnery/)
- [Grégoire Brasseur](https://github.com/lerimeur/)