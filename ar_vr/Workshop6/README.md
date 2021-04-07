
## Minimalist VR

Ce workshop a pour but de vous initier au développement d'applications en réalité virtuelles même si vous ne possédez pas de casque VR !

La première phase concerne la configuration de votre application Unity avec le sdk Mock HDM. La seconde vous initiera aux bases des élément XR proposées par Unity.

## Prérequis

Avoir la LTS (2020.3.0f1) d'unity installé sur votre ordinateur sous windows.

## Setup

Ouvrez le package manager et installé: XR interaction ToolkitVous aurez besoin d'activer les packages en preview pour pouvoir le télécharger.

Build Settings > Player Settings > XR Plugin management > install
Puis cocher Unity Mock HMD

Package Manager > XR interaction Toolkit > Samples > Import Default Input Actions
- Cliquez sur le `XR Default Left Controller` > Inspector > `Add to ...` de même pour le Right controller
- Build Settings > Player Settings > Preset Manager: indiquer `Right` et `Left` dans les champs correspondants.

Créez un XR Rig dans votre scène: clic droit > XR > Room Scale XR RIG(action-based)

Créez un `Input Action Manager` dans votre XR Rig et glisser `XR Default Input Actions` à l'intérieur

Package Manager > XR interaction Toolkit > Samples > Import Device Simulator
Drag le prefab que vous venez de download dans votre scène.

Build Settings > Player Settings > Player > Other Settings > Input manager sur New

## Verification

Pour vérifier que votre build utilise bien le Mock HMD, crée un script indiquant si au lancement de votre application si un `XR device` est utilisé.

Astuce, pour ce faire tournez-vous du côté de cet import: `using UnityEngine.XR;`

## Les interactions

Inspecter les éléments que vous avez manipulés durant l'installation pour comprendre comment interagir avec les contrôler AR dans Unity.

Crée un cube et faites en sorte de pouvoir le `Grab` avec un contrôler VR.

Crée un prefab de marteau. Il sera composé de deux éléments au minimum (un manche et une tête). Vous devez pour le `Grab` uniquement au niveau du manche.

Crée un préfab composé de plusieurs formes géométriques. Faites en sorte que lorsque le marteau rencontre une morceau de ce prefab il soit détruit.

Rajouter un bouton sur l'UI qui pourra être activé via une interaction avec un contrôleur VR. Ce bouton fera apparaître une arme pour le joueur.

Crée un second bouton qui pourra générer un préfab destructible par votre arme.

Lorsque vous interagissiez avec votre arme pendant qu'elle est dans vos mains elle doit changer de couleur.
