# AI Pool 2021 - Reinforcement Learning - AIO

Ingénieurs, nous devons réfléchir à un plan B si nous ne réussissons pas à sauver la Terre.

La solution à l'étude est une migration de masse vers une nouvelle planète, nous pensons à Io, le satellite naturel de Jupiter.
Pour cela nous commençons par faire un retour sur notre bon vieux satellite, la Lune.

L'équipe scientifique a ainsi besoin d'une IA capable d'assister les astronautes à l'alunissage.
Nous vous avons développé un simulateur dernier cri qui vous aidera dans cette tâche.

L'équipe scientifique a retrouvé dans ses manuels un algorithme qui pourra vous aider, le Deep Q-learning.

# Manuel Deep Q Learning

Le souci majeur avec le Q learning, c'est la Q table.
Plus l'environement est complexe, plus la table sera grande et plus elle demandera de ressources pour être stockée et gérée.

De plus, dans un environnement aussi complexe qu'un alunissage, il est impossible de prévoir tous les cas possibles.
Il faut donc estimer une fonction qui, pour un state et une action donnée, return l'espérance de cet état.

Vous savez ce qui est très efficace pour estimer une fonction ? Les réseaux de neurones.

Au lieu de stocker chacune des valeurs possibles, vous allez entraîner un model de Deep Learning à prédire l'espérance pour un state et une action donnée.
Ce model est appelé le policy network.

Quelles sont donc les étapes à suivre ?

- On store régulièrement notre tuple (state, action, reward, next_state)
- Au bout de X action, on commence l'entraînement de notre model sur notre Replay memory
- Pour un état $S$ que l'on donne à notre network $f$, $f$ estimera la Q-value pour chacune des actions possibles ($Q(S,a_x)$).
- On fait une prédiction de $S'$ avec $f$ qui donnera notre Q-value max.
- On calcule notre target Q-value en utilisant l'équation de Bellman
- On calcule la loss en comparant l'output de $f$ avec notre Target Q-value en calculant la MSE.

<img src="./.img/Deep_Q-Network_raining.png" width=600px />

On entraînera alors notre model à minimiser cette loss comme pour n'importe quel autre model de Deep Learning.

On répétera ces étapes sur chacun des états rencontrés dans l'environnement jusqu'à avoir minimisé suffisamment la loss pour avoir une Q-fonction précise.

# Consigne
- Créez un model de Deep Learning apte à recevoir un state
- Créez une memory (Replay memory) pour faciliter l'apprentissage de votre agent
- Créez une class agent qui aura un attribut network et différentes méthodes pour apprendre
- Solvez l'environnement [CartPole-v1](https://www.gymlibrary.dev/environments/classic_control/cart_pole/) pour vous assurer du bon fonctionnement de votre agent
- Soumettez un code capable de résoudre l'environnement [LunarLander-v2](https://www.gymlibrary.dev/environments/box2d/lunar_lander/)

**Few tips**
- On souhaite avoir autant d'output que d'action possible dans notre environnement.
- On ne souhaite pas avoir de fonction d'activation pour le dernier layer puisque que l'on souhaite avoir l'estimation brute de l'espérance.
- On peut souhaiter de faire du preprocessing sur notre state si nécessaire.
- On souhaite mélanger notre memory régulièrement pour éviter toute corrélation entre les données.
- Pensez à l'intégration GPU pour l'entraînement de votre model


**Useful links:**
- What is Deep Q-learning: https://youtu.be/wrBUkpiRvCA
- Training a Deep Q-Network: https://youtu.be/0bt0SjbS3xc
