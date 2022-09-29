# **Workshop 10 - CUDA et accélération matérielle**

Durant ce workshop vous apprendrez à utiliser CUDA, l'API développé par Nvidia permettant de réaliser des programmes qui utilisent les cœurs des cartes graphiques.

Dans un premier temps, vous ferez en sorte d'exécuter un Hello World sur plusieurs cœurs d'un GPU en parallèle.

Puis, vous développerez une application capable d'accélérer l'addition de 2 listes de très grandes tailles.

Enfin, vous vous pencherez sur un problème plus conséquent : transformer une image en couleur en une image en noir et blanc.

## **Step 0 - :rocket: Initialization**

Un repository a été créé pour vous grâce au lien d'invitation qui vous a été communiqué par mail. Lorsque vous *pushez* sur celui-ci des tests seront lancés et vous permettrons de valider les prochaines étapes.

>:checkered_flag:  **Avant de débuter, il est nécessaire que vous compreniez quelques termes.**

:heavy_check_mark: Comprendre l'execution sur CUDA

:heavy_check_mark: Comprendre la répartition de la mémoire entre Host et Device

:heavy_check_mark: Comprendre la nomenclature sur CUDA

La syntaxe de CUDA est très similaire à celle du C / C++.

> :warning: **Vous trouverez une explication détaillée [ici](https://dev.to/zenulabidin/an-overview-of-cuda-part-2-host-and-device-code-69d) des deux premiers points**.

1. Dans les ressources et durant vos recherches, le terme utilisé pour designer le processeur (CPU) ainsi que la mémoire classique (RAM) est **Host**.

2. Lorsqu'il est question de la carte graphique (GPU) ainsi que de la mémoire de celle-ci (VRAM), le terme utilisé est **Device**.

> :warning: **Vous trouverez une explication détaillée [ici](https://en.wikipedia.org/wiki/Thread_block_(CUDA_programming)) des deux derniers points**.

3. Afin de mieux organiser l'exécution en parallele des cœurs du GPU, appelé un thread, ils sont représentés sur un repère à 3 dimensions.

4. Les threads sont regroupés en blocs, eux aussi représentés sur un repère à 3 dimensions : la Grille.

Voici un schéma descriptif, car *une image vaut mieux que mille mots*, de l'organisation des threads en blocs dans une grille en 2 dimensions.

<div align="center">
    <img src="../../.github/assets/CUDAthreads.png" width=50%"/>
</div>

## **Step 1 - :wave: Hello CUDA World**

> :triangular_flag_on_post: **Première tâche : classique, mais efficace. Hello CUDA World.**

:heavy_check_mark: Exécuter du code avec CUDA

:heavy_check_mark: Indexer des threads

:heavy_check_mark: Comprendre l'execution d'un [kernel](https://developer.nvidia.com/blog/cuda-refresher-cuda-programming-model/)

Pour vous familiariser avec CUDA, vous allez commencer par lancer une fonction sur 2 threads.

Celle-ci devra afficher la chaîne de caractères `"Hello CUDA World {idx}"`, ou idx correspond à l'index du thread.

> :warning: ***Voici les ressources dont vous aurez besoin*** :

- [L'indexation sur CUDA](https://docs.nvidia.com/cuda/cuda-c-programming-guide/index.html#built-in-variables).

- [Portée des fonctions exécutés sur CUDA](https://stackoverflow.com/questions/12373940/difference-between-global-and-device-functions).

- [Lancement d'un kernel sur x blocs contenants y threads](https://docs.nvidia.com/cuda/cuda-c-programming-guide/index.html#kernels).

## **Step 2 - :twisted_rightwards_arrows: Summing up two arrays**

> :triangular_flag_on_post: **Seconde tâche : additionner 2 listes qui contiennent chacune 1 048 576 d'éléments.
> Le résultat de l'addition doit être contenu dans la seconde liste.**

:heavy_check_mark: Allouer dynamiquement de la mémoire sur un GPU

:heavy_check_mark: Utiliser l'indexation des threads dans la logique d'un programme

:heavy_check_mark: Copier des données depuis le Host vers le Device

:heavy_check_mark: Copier des données depuis le Device vers le Host

:heavy_check_mark: Synchroniser l'exécution des threads

*Votre CPU va vite, très vite, mais son nombre de cœurs est limité (pas plus de 128 pour les meilleurs).
Vous allez donc utiliser le très grand nombre de cœurs présents sur un GPU pour accélérer l'exécution d'un programme.*

> **Toutes les étapes sont décrites dans le code issu des [ressources](https://github.com/PoCInnovation/Workshops/raw/cuda/software/10.CUDA/CUDA_steps.zip) sous la forme de TODOs.**

> :warning: ***Voici les ressources dont vous aurez besoin*** :

- [Les fonctions permettant de gérer la mémoire (CRTL + F -> memc.. ou mall.. 😉)](https://docs.nvidia.com/cuda/cuda-runtime-api/group__CUDART__MEMORY.html).

- [Synchronisation des threads](https://www.google.com/).

## **Step 3 - :framed_picture: Image filter**

Bravo, vous êtes désormais à l'aise avec CUDA ! Maintenant, voyons un exemple plus... compliqué :dizzy_face:.

> :triangular_flag_on_post: **Troisième tâche : parcourir une image en couleur et déterminer la valeur de gris de chaque pixel pour transformer l'image en noir et blanc.**

Pour cette dernière étape de ce workshop, une grande partie du code vous est volontairement donné.
De plus, vous n'aurez pas à vous soucier de la mémoire !

Vous devrez écrire le corps de la fonction **`deviceKernel`** présente dans le fichier **`Image.cu`**.

Cette fonction est responsable de la transformation d'un pixel en couleur en un pixel en noir et blanc. Elle prend pour cela trois paramètres :

- **`m_devicePixels`**, la liste de pixels.
- **`w`**, la taille en ordonnée de l'image.
- **`h`**, la taille en abscisse de l'image.

Vous devez :

- Déterminer le nombre de threads lancés.
- Déterminer l'[ID](https://docs.nvidia.com/cuda/cuda-c-programming-guide/index.html#built-in-variables) du thread actuel.
- Déterminer le nombre de pixels dans l'image.
- Pour un certain nombre de pixels, générer des valeurs aléatoires pour les champs r, g et b contenues entre 0 et 255. Petite note, la fonction rand n'existe pas sur CUDA.
- Calculer la valeur de gris du pixel.

> :warning: ***Voici les ressources dont vous aurez besoin*** :

- [Vous avez dit aléatoire ?](https://docs.nvidia.com/cuda/curand/index.html)

## Authors

[Luca Georges Francois](https://github.com/PtitLuca)
