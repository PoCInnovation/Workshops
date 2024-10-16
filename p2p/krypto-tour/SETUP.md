# Setup - Foundry

Foundry est une chaîne d'outils de développement de smarts contracts. Il gère vos dépendances, compile votre projet, exécute des tests, déploie et vous permet d'interagir avec la blockchain à partir de la ligne de commande et via des scripts Solidity.

## Installer Foundry

### **Linux et macos**
- Ouvrez votre terminal et tapez

```sh
curl -L https://foundry.paradigm.xyz | bash
```

### **Windows**
- Téléchargez [Git pour windows](https://git-scm.com/downloads/win) puis lancer le programme Git Bash.
  - Laisser les paramètre par défaut sauf pour `Default editor used by Git` ou vous pouvez choisir `Use Visual Studio Code as Git's default editor`
- Tapez

```sh
curl -L https://foundry.paradigm.xyz | bash
```

Cela va télécharger foundryup.
Maintenant redémarrer votre terminal.

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

Créer un dossier de travail vide pour le workshop.
Ouvrez ce dossier dans VSCode avec `File > Open Folder`.
Ensuite, vous pouvez ouvrir un terminal dans VSCode en allant dans `Terminal > New Terminal`.
Si vous êtes sur Windows, faites la même chose mais ensuite créez un terminal Git Bash avec la flèche à côté du plus ([exemple](https://code.visualstudio.com/docs/terminal/basics#_terminal-shells)).

L'initialisation configure la structure de base de votre projet.  
Une fois que l'installation est faite, vous pouvez créer un nouveau projet en tapant la command ci dessous :

```sh
forge init krypto-tour --no-commit
```

Cela devrait créer un nouveau dossier contenant un tout nouveau projet foundry avec une structure et des fichiers de base.

La première chose à faire est d'écrire la version de solidity dans le fichier `foundry.toml` qui est le fichier de configuration de votre projet.

Vous pouvez faire cela en ajoutant sous la ligne `[profile.default]` la ligne suivante:

```toml
solc_version = "0.8.20"
```

Votre fichier devrait ressembler à ça

```toml
[profile.default]
solc_version = "0.8.20"
src = "src"
out = "out"
libs = ["lib"]
```

Tout est bon, vous pouvez maintenant attaquer le workshop !
