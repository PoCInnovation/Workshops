# **CUDA**

Durant ce workshop vous apprendrez à utiliser CUDA, l'API developpé par Nvidia permettant de réaliser des programmes qui utilisent les coeurs des cartes graphiques du même constructeur.

Dans un premier temps, vous développerez une application capable d'additionner 2 listes de très grande tailles.

Puis vous vous pencherez sur un problème plus conséquent : l'application d'un filtre sur une image.

## **Step 0 - Initialization :rocket:**

Avant de débuter, il est nécessaire que vous compreniez quelques termes.

1. Lorsqu'il est question du GPU, y compris de sa mémoire VRAM, le terme utilisé est **Device**.

2. À l'inverse, lorsqu'il est question du CPU et de la mémoire RAM classique, le terme utilisé est **Host**.

3. Les coeurs CUDA peuvent être représentés sur un repère à 3 dimensions.
   Dans un souci de simplicité, nous nous contenterons d'une seule dimension.
   Le coeur 0 est donc situé sur ce repère à l'index 0.

4. Les coeurs, appelés thread, sont rassemblés en blocks.
   Ainsi, le premier thread du block 0 et le premier thread du block 1 ont tout deux l'index 0.

Voici un schéma descriptif, car *une image vaut mieux que mille mots*.

<div align="center">
    <img src="../../.github/assets/threads.png" width=50%"/>
</div>

## **Step 1 - Summing up two arrays :twisted_rightwards_arrows:**

> **Première tâche : additionner 2 listes qui contiennent chacune 1 000 000 d'éléments.**

Voici la situation : on vous donne 2 très grandes listes de nombre que vous devez additionner.

Votre CPU va vite, très vite, mais son nombre de coeurs est limité (pas plus de 128 pour les meilleurs).
L'addition est une tâche plutôt rapide à exectuer et les coeurs de votre GPU, qui sont eux moins puissants que ceux de votre CPU, sont présents par milliers sur votre appareil.

Votre tâche est donc d'exploiter la puissance de votre GPU pour additionner plus rapidement les 2 listes en utilisant :

- L'allocation mémoire de votre GPU, puisque vous devrez copier les 2 listes sur la VRAM du GPU afin que ses coeurs puissent y avoir accès.

- 1024 thread différents sur 1 seul block.
  À votre avis, combien d'éléments chaque thread doit-il additionner :roll_eyes: ?

- La copie de la liste contenant le résultat de l'addition du GPU vers le Host.

- La synchronisation des threads. On ne veut pas de *race condition*.

Pour finir, vous afficherez la liste resultante de l'addition des 2 autres.

Voici les ressources dont vous aurez besoin :

- [Les fonctions permettant de gérer la mémoire (CRTL + F -> MEM... ou MAL... :wink:)](https://docs.nvidia.com/cuda/cuda-runtime-api/group__CUDART__MEMORY.html).

- [Lancement d'un kernel sur x blocks contenants y threads](https://docs.nvidia.com/cuda/cuda-c-programming-guide/index.html#kernels).

- [Portée des fonctions executés sur CUDA](https://stackoverflow.com/questions/12373940/difference-between-global-and-device-functions).

- [Synchronisation des threads](https://www.google.com/).

## **Step 2 - Image filter :framed_picture:**

Bravo, vous êtes desormais à l'aise avec CUDA ! Maintenant, voyons un exemple plus... compliqué :dizzy_face:.

> **Seconde tâche : parcourir une image en couleur et déterminer la valeur de gris de chaque pixel.**

## Authors

[Luca Georges Francois](https://github.com/PtitLuca)
