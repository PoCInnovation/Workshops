## Prérequis
---

Avoir la LTS (2020.3.0f1) d'unity instalé sur votre ordinateur sous windows.
N'oubliez pas d'ajouter le module `Android build support` lors de l'installation d'Unity.

## Préparation de Unity
---
Installation guide by google: https://developers.google.com/cardboard/develop/unity/quickstart

## Arizona
---

### Scene

- Place a plane in your scene and add the zombie package to your project provided by your supervisors.
- Right click on your camera> xr> change to xr-rig

### Player

For simplicity we assume that our MainCamera inside the XR Rig represents our player.

- Create an on-camera script that detects when a zombie is in your line of sight (Raycast)
- Create a script that communicates with the previous one and shoots a projectile when a zombie is detected. (If the projectile does not meet any obstacle it must destroy itself after X time)

###  Zombie

- Add health points to your zombie as well as a function that inflicts damage on it when called.
- If your zombie has no more life points it must be destroyed.
- The zombie moves towards the player by default.

### Assembly

- If the projectile hits a part of the zombie make him lose life points depending on the part of the body affected. If the affected part is an arm, head or leg it must be destroyed.
- The body part of the zombie you are targeting must be colored in the color of your choice.

### Next Step

- Add spawners that spawn zombies every X time
- Add a scoring system when you kill zombies
- Add obstacles on the ground and move your zombies with navmesh.