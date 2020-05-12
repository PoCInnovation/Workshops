# Setup

Ce workshop nécessite uniquement d'installer docker, ses dépendances ainsi que d'activer le service docker.

Vous aurez besoin de:
- [docker-ce](https://docs.docker.com/engine/install/fedora/) : community edition de docker
- [docker-compose](https://docs.docker.com/compose/install/) : outil complémentaire qui permet de simplifier la création d'images et containers

Etapes d'installation de `docker-ce` pour fedora:
```sh
# Pour installer les dépendances de docker
sudo dnf -y install dnf-plugins-core

# Pour ajouter le repository de docker à dnf
sudo dnf config-manager --add-repo https://download.docker.com/linux/fedora/docker-ce.repo

# Pour installer la dernière version de docker:
sudo dnf install docker-ce docker-ce-cli containerd.io
```
> Si vous n'utilisez pas fedora, un tutoriel pour d'autres distros est disponible au niveau du lien de docker-ce

Pour installer `docker-compose`:
```sh
sudo curl -L "https://github.com/docker/compose/releases/download/1.25.5/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
sudo chmod +x /usr/local/bin/docker-compose
```

Une fois l'installation terminée, lancez le service docker avec `sudo systemctl start docker`

> Si vous souhaitez que docker se lance dans votre à chaque démarrage de votre ordinateur, exécutez: `sudo systemctl enable docker`

Pour ce workshop, vous devez obligatoirement exécuter vos commandes docker avec `sudo`, si vous trouvez une commande sur internet sans, elle ne fonctionnera pas sans avoir ajouté votre utilisateur au groupe docker (ce qui necessite de log out de votre session, ce que nous ne ferons donc pas)

**Si vous avez fini toutes ces étapes, vous pouvez dès à présent passer aux exercices**
