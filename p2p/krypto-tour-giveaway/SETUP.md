# Setup - Foundry

Foundry est une chaîne d'outils de développement de smarts contracts. Il gère vos dépendances, compile votre projet, exécute des tests, déploie et vous permet d'interagir avec la blockchain à partir de la ligne de commande et via des scripts Solidity.

## Télécharger VScode

Rendez-vous sur [Téléchargement de VScode](https://code.visualstudio.com/download) et choisisez votre version. Suivez le processus d'installation. Visual Studio Code est un éditeur de code extensible développé par Microsoft pour Windows, Linux et macOS.

## Installer Foundry

**Linux et macos**
- Ouvrez votre terminal et tapez

```sh
curl -L https://foundry.paradigm.xyz | bash
```

**Windows**
- Téléchargez [Git pour windows](https://git-scm.com/downloads/win) puis lancer le programme Git Bash.
- Tapez

```sh
curl -L https://foundry.paradigm.xyz | bash
```

Cela va télécharger foundryup.

- Ensuite, vous pouvez installer foundry en tapant `foundryup`
- Si tout s'est bien passé vous devriez être capable d'utiliser `forge`, `anvil`, `chisel` et `cast`
- Si vous êtes sur macos vous devez installer `libusb` en tapant

```sh
brew install libusb
```

Après l'installation, lancer cette commande pour vérifier que tout est bien installé sur votre ordinateur:

```sh
forge --version
```

Cela devrait afficher la version actuelle de forge.

Si vous avez des soucis d'installation n'hésitez pas à demander de l'aide aux organisateur de ce workshop.

## Créer un projet foundry

Une fois que l'installation est faite, vous pouvez créer un nouveau projet en tapant

```sh
forge init krypto-tour
```

Cela devrait créer un nouveau dossier contenant un tout nouveau projet foundry.

La première chose à faire est d'écrire la version de solidity dans le fichier `foundry.toml` qui est le fichier de configuration de votre projet.

Vous pouvez faire cela en ajoutant dans la partie `[profile.default]`:

```toml
solc_version = "0.8.20"
```

Votre fichier devrait ressembler à ça

```toml
[profile.default]
src = "src"
out = "out"
libs = ["lib"]
solc_version = "0.8.20"
```

Tout est bon, vous pouvez maintenant attaquer le workshop !
