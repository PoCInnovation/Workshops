# AI Pool 2021 - Reinforcement Learning - AIO

Ingenieur, nous devons reflechir à un plan B si nous ne réussissons pas à sauver la Terre.

La solution à l'étude est une migration de masse vers une nouvelle planette, nous pensons à Io le satellite naturel de Jupiter.
Pour cela nous commençons par faire un retour sur notre bon vieux satellite, la Lune.

L'equipe scientifique à ainsi besoins d'une IA capable d'asssiter les astonautes à l'alunissage.
Nous vous avons develloper un simulateur dernier cri qui vous aidera dans cette tage.

L'equipe scientifique à retrouver dans ses manuels un algorithmequi pourra vous aider, le Deep Q-learning.

# Manuel Deep Q Learning

Le souci majeurs avec le Q learning, c'est la Q table.
Plus l'environement est complexe, plus la table sera grande et plus elle demandera de ressources pour être stockée et gèrée.

De plus dans un environement si complexe qu'un alunissage, il est impossible de prevoir tout les cas possible.
Il faut donc estimer une fonction qui pour un state et une action donné return l'esperance de cette état.

Vous savez ce qui est tres efficace pour estimer une fonction ? Les reseaux de neurones.

Au lieu de stocker chacunes des valeurs possibles, vous allez entrainer une model de Deep learning à predire l'esperance pour un state et une action donnée.
Ce model est appelé le polissy network.

Quelles sont donc les étapes à suivre ?

- On store regulierement notre tuple (state, action, reward, next_state)
- Au bout de X action, on commence l'entrainement de notre modele sur notre Replay memory
- Pour un état $S$ que l'on donne à notre network $f$, $f$ estimera la Q-value pour chacunes des actions possibles ($Q(S,a_x)$).
- On fait une prediction de $S'$ avec $f$ qui donnera notre max Q-value.
- On calcule notre target Q-value en uttilisant l'equation de Bellman
- On calcule la loss en comparant l'output de $f$ avec notre Target Q-value en calculant la MSE.

<img src="./.img/Deep_Q-Network_raining.png" width=600px />

On entrainera alors notre model à minimiser cette loss comme pour n'importe quel autre modele de deep learning.

On repetera ces étapes sur chacun des états rencontrés dans l'environement jusqu'a avoir minimiser suffisament la loss pour avoir une q-fonction précise.

# Consigne
- Créez un modele de Deep Learning apte à recevoir un state
- Créez une memory (Replay memory) pour facilité l'apprentissage de votre agent
- Créez une class agent qui aura un atribute network et differentes methodes pour apprendre
- Solvez l'environement (CartPole-v1)[https://gym.openai.com/envs/CartPole-v1/] pour vous assurer du bon fonctionnement de votre agent
- Soumettez un code capable de résoudre l'environeemnt l'environement (LunarLander-v2)[https://gym.openai.com/envs/LunarLander-v2/]

**few tips**
- On souhaite avoir autant d'output que d'action possible dans notre environement.
- On ne souhaite pas avoir de fonction d'activation pour le dernier layer puisque que l'on souhaite avoir l'estimation brut de l'esperance.
- On peut souhaiter de faire du preprocessing sur notre state si necessaire.
- On souhaite mélanger notre memory regulierement pour eviter toutes corélations entre les données.
- Pensez à l'integration GPU pour l'entrainement de votre modele


**Useful links:**
- What is Deep Q-learning: https://youtu.be/wrBUkpiRvCA
- Training a Deep Q-Network: https://youtu.be/0bt0SjbS3xc
