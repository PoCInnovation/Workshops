# **CUDA**

Durant ce workshop vous apprendrez à utiliser CUDA, l'API developpé par Nvidia permettant de réaliser des programmes qui utilisent les coeurs des cartes graphiques à la place de ceux de votre processeur.

Dans une premier temps, vous ferez en sorte d'executer un Hello World sur plusieurs coeurs d'un GPU.

Puis, vous développerez une application capable d'additionner 2 listes de très grande tailles.

Enfin vous vous pencherez sur un problème plus conséquent : transformer une image en couleur en une image en noir et blanc.

## **Step 0 - :rocket: Initialization**

:ghost: **You must download and extract the [following resources](https://github.com/PoCInnovation/Workshops/raw/cuda/software/10.CUDA/CUDA_steps.zip).**

>:checkered_flag:  **Avant de débuter, il est nécessaire que vous compreniez quelques termes.**

:ballot_box_with_check: Comprendre l'execution sur CUDA

:ballot_box_with_check: Comprendre la répartition de la mémoire entre Host et Device

:ballot_box_with_check: Comprendre la nomenclature sur CUDA

La syntaxe de CUDA est très similaire à celle du C / C++.

:warning: **Vous trouverez une explication détaillée [ici](https://dev.to/zenulabidin/an-overview-of-cuda-part-2-host-and-device-code-69d) des deux premiers points** :warning:.

1. Dans les ressources et durant vos recherches, le terme utilisé pour designer le processeur (CPU) ainsi que la mémoire classique (RAM) est **Host**.

2. Lorsqu'il est question de la carte graphique (GPU) ainsi que de la mémoire de cell-ci (VRAM), le terme utilisé est **Device**.

:warning: **Vous trouverez une explication détaillée [ici](https://en.wikipedia.org/wiki/Thread_block_(CUDA_programming)) des deux derniers points** :warning:.

3. Afin de mieux organiser l'execution en parallele des coeurs du GPU, appelé un thread, ils sont représentés sur un repère à 3 dimensions.

4. Les threads sont regroupés en blocks, eux aussi représentés sur un repère à 3 dimensions : la GRID.

Voici un schéma descriptif, car *une image vaut mieux que mille mots*, de l'organisation des threads en blocks dans une grille en 2 dimensions.

<div align="center">
    <img src="../../.github/assets/CUDAthreads.png" width=50%"/>
</div>

## **Step 1 - :wave: Hello CUDA World**

> :triangular_flag_on_post: **Première tâche : classique, mais efficace. Hello CUDA World.**

:ballot_box_with_check: Executer du code avec CUDA

:ballot_box_with_check: Indexer des threads

:ballot_box_with_check: Comprendre l'execution d'un [kernel](https://developer.nvidia.com/blog/cuda-refresher-cuda-programming-model/)

Pour vous familiariser avec CUDA, vous allez commencer par lancer une fonction sur 2 threads.

Celle-ci devra afficher la chaîne de caractères `"Hello CUDA World {idx}"`, ou idx correspond à l'index du thread.

:warning: ***Voici les ressources dont vous aurez besoin*** :warning: :

- [Les index sur CUDA](https://docs.nvidia.com/cuda/cuda-c-programming-guide/index.html#threadidx).

- [Portée des fonctions executés sur CUDA](https://stackoverflow.com/questions/12373940/difference-between-global-and-device-functions).

- [Lancement d'un kernel sur x blocks contenants y threads](https://docs.nvidia.com/cuda/cuda-c-programming-guide/index.html#kernels).

## **Step 2 - :twisted_rightwards_arrows: Summing up two arrays**

> :triangular_flag_on_post: **Seconde tâche : additionner 2 listes qui contiennent chacune 1 048 576 d'éléments. Le résultat de l'addition doit être contenue dans la seconde liste.**

:ballot_box_with_check: Allouer dynamiquement de la mémoire sur un GPU

:ballot_box_with_check: Utiliser l'indexation des threads dans la logique d'un programme

:ballot_box_with_check: Copier des données depuis le Host vers le Device

:ballot_box_with_check: Copier des données depuis le Device vers le Host

:ballot_box_with_check: Synchroniser l'execution des threads

*Votre CPU va vite, très vite, mais son nombre de coeurs est limité (pas plus de 128 pour les meilleurs).
Vous allez donc utiliser le très grand nombre de coeurs présents sur un GPU pour accélerer l'execution d'un programme.*

Votre tâche est donc d'exploiter la puissance de votre GPU pour additionner plus rapidement les 2 listes, en plusieurs étapes. Celles-ci sont contenues dans le code sous la forme de TODO.

:warning: ***Voici les ressources dont vous aurez besoin*** :warning: :

- [Les fonctions permettant de gérer la mémoire (CRTL + F -> MEM... ou MAL... :wink:)](https://docs.nvidia.com/cuda/cuda-runtime-api/group__CUDART__MEMORY.html).

- [Synchronisation des threads](https://www.google.com/).

## **Step 3 - :framed_picture: Image filter**

Bravo, vous êtes desormais à l'aise avec CUDA ! Maintenant, voyons un exemple plus... compliqué :dizzy_face:.

> :triangular_flag_on_post: **Troisième tâche : parcourir une image en couleur et déterminer la valeur de gris de chaque pixel pour transformer l'image en noir et blanc.**

## Authors

[Luca Georges Francois](https://github.com/PtitLuca)