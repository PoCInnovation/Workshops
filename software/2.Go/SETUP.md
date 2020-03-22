# Setup

Pour generer les images Docker and lancer les containers:

```sh
sudo docker-compose up -d --build
```

Vérifiez que votre server fonctionne bien à l'adresse [http://localhost:8080](http://localhost:8080).

Le dossier [GoWorkshop](./GoWorkshop) est monté dans votre container.
- Pour redemarrer le server: `sudo docker restart workshop-serverGO`
- Pour voir les logs du server: `sudo docker logs workshop-serverGO`
- Pour intéragir avec votre base de donnée:
```sh
# via Docker
sudo docker exec -ti databasePSQL psql -U poc postgres

# via Lazydocker (à installer indépendamment)
sudo lazydocker
```

Ou utilisez une interface graphique de gestion de base de donnée pour éditer ses données (dbeaver par exemple)

```python
POSTGRES = {
    'host': 'localhost',
    'db': 'postgres',
    'user': 'poc',
    'pw': 'password',
    'port': '5432',
}
```

les seuls fichiers que vous avez à editer sont dans le dossier `GoWorkshop`