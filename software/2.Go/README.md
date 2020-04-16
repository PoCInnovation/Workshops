# Workshop 2 - API GO

## Step 0: initialisation
Toutes les informations requises pour installer les dépendances du workshop sont disponibles dans [SETUP.md](./SETUP.md)

Nous utiliserons pour ce workshop:
- [mux](https://www.gorillatoolkit.org/pkg/mux), un router HTTP, il permet de créer des routes pour récuperer des données.
- [handlers](https://www.gorillatoolkit.org/pkg/handlers) pour ajouter des middlewares à nos routes.
- [gorm](https://gorm.io/docs/), un ORM pour Go. Il nous permet de faire de manipuler la de données sans avoir à écrire les requêtes SQL à la main.

## Step 1: Première route

Pour commencer, implementez une route basique `"/hello"` qui renvoie `world` quand vous allez sur http://localhost:8080/hello

## Step 2: Routes avec paramètres

Vous allez devoir envoyer des paramètres au server via les routes. Pour cela, vous allez faire varier l'url de votre route.

Créez une route **GET** `/whoami/{user}`
- Prend en paramètre `user`
- Renvoie `I am {user} !`


> vous pouvez tester vos routes avec [postman](https://learning.postman.com/docs/postman/launching-postman/introduction/) ou [curl](https://flaviocopes.com/http-curl/)

## Step 3: Mise en place des Middlewares

À présent, vous allez créer des middleware pour vos routes. Ils sont généralement utilisés pour vérifier les données reçues avant de les envoyer au reste du server. Par exemple, vérifier que le compte qui essaie d'accèder à une route `/admin` est bien un administrateur. Dans notre cas, pas le temps de mettre en place tout un système d'authentification, nous allons donc utiliser un middleware pour une tâche plus basique.

Ajoutez le middleware `IdIsCorrect`
- Prend en paramètre l'`id` reçu
- Vérifie si l'`id` est bien positif

## Step 4: Connection à la base de données

Nous rentrons enfin dans le vif du sujet. Le server va aller se connecter à une base de donnée et récuperer les données demandées par l'utilisateur.
> le setup de GORM est disponible dans le fichier [init.go](./src/database/init.go).

### Part 1: Premières query

Vous allez à présent utiliser votre ORM pour récuperer dans la base de données toutes les informations relatives à l'utilisateur entré en paramètre:
- Créez la route **GET** `/get/{id}`
  - Elle prend en paramètre un`id`
  - Elle utilise le middleware qui vérifie l'`id` [(Step 3)](#step-3:-mise-en-place-des-middlewares)
  - Elle renvoie toutes les informations de l'`id` présentes dans la DB, sous la forme d'un JSON

### Part 2: Insertion de donnée dans votre DB

À présent, vous allez créer de nouveaux utilisateurs, pour cela:
- Créez une route **GET** `/add/{id}/{username}/{email}`
  - Elle prend en paramètre un`id`, un `username` et un `email`
  - Elle utilise le middleware qui vérifie l'`id` [(Step 3)](#step-3:-mise-en-place-des-middlewares)
  - Si tout est correct, elle insert les informations dans la DB, définit le statut 200 et renvoie `Success`

## Bonus

Si vous avez tout fait jusque là, vous êtes libre de créer les routes que vous voulez, comme par exemple supprimer un utilisateur ou intéragir avec les posts des users, afin d'en ajouter, en lire ou en supprimer.


## Authors
- [Théo Ardouin](https://github.com/CrystallizedYou/)
- [Paul Monnery](https://github.com/PaulMonnery/)
- [Grégoire Brasseur](https://github.com/lerimeur/)
