# Setup

## Docker | Database

Pour generer les images Docker and lancer les containers, installez `docker-compose`:
```sh
sudo curl -L "https://github.com/docker/compose/releases/download/1.25.4/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
sudo chmod +x /usr/local/bin/docker-compose
```

Puis lancez la commande dans le dossier où il y a le [docker-compose.yml](./docker-compose.yml) :
```sh
sudo docker-compose up -d --build
```

Pour intéragir avec votre base de donnée:
```sh
# via Docker
sudo docker exec -ti workshop-databasePSQL psql -U poc postgres
```

Ou utilisez une interface graphique de gestion de base de donnée pour éditer ses données (dbeaver par exemple)

```python
POSTGRES = {
    'host':     'localhost',
    'database': 'postgres',
    'user':     'poc',
    'password': 'password',
    'port':     '5432',
}
```

## Go

Pour la partie code, nous utiliserons les modules Go pour simplifier au maximum les principes de PATH instauré par le Go.  
Vous aurez donc besoin d'une version de Go **superieur ou égale à la 1.12**

```sh
# par exemple

$ go version
go version go1.12.10 linux/amd64
```

Vous pouvez lancer le server en allant dans le dossier `src`
```sh
# pour simplement lancer le server
$ go run ./

# ou avec go build si vous voulez optenir un executable
$ go build ./
```