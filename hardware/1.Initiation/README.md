# Workshop HARDWARE

## Introduction
Les exercices devront être réalisés dans l'ordre et présentés à un encadrant une fois terminé pour qu'il vérifie votre travail.

Même si l'accès à des tutoriels sur internet est autorisé, nous vous conseillons de réfléchir par vous-même aux exercices.

Merci de télécharger :

* [Arduino IDE](https://www.arduino.cc)

Si vous utilisez un carte de type ESP 32 (généralement non):

* Configurer IDE Arduino pour les boards [ESP32](https://randomnerdtutorials.com/installing-the-esp32-board-in-arduino-ide-windows-instructions/)

Si vous êtes intéressé par des vidéastes traitant de l'électronique/hardware en voici une liste :

* AvE
* Great Scott
* This old Tony
* NYC CNC
* Electroboom
  
     
## Préambule

Merci de lire/regarder

* [Amps vs Volts](https://www.youtube.com/watch?v=XDf2nhfxVzg)
* [Une résistance ?](https://openclassrooms.com/forum/sujet/pourquoi-et-quand-placer-une-resistance)

## Exercice 1

<details>
    <summary> 🛠️ Matériel requis:</summary>
 
* Arduino / ESP32
* BreadBoard
* Cable USB
* Jumpers
* LED
* Résistance

</details>  
  
**Consigne**: Faites un circuit reliant une LED à un Arduino et allumez cette LED. Appelez un encadrant avant d'alimenter votre Arduino.

>**Contraintes**: Vous ne devrez utiliser AUCUN CODE pour cet exercice. Vous n'avez pas le droit à au pin 3,3V de votre board.

>:warning: Est-ce que le voltage accepté par la LED est compatible avec le voltage produit par la board ?

## Exercice 2

<details>
    <summary> 🛠️ Matériel requis:</summary>
 
* Arduino / ESP32
* BreadBoard
* Cable USB
* Jumpers
* LED
* Résistance

</details>  

**Consigne**: Faite en sorte que la LED clignote toutes les secondes.

>**Contraintes**: Aucune

## Exercice 3

<details>
    <summary> 🛠️ Matériel requis:</summary>
 
* Arduino / ESP32
* BreadBoard
* Cable USB
* Jumpers
* LED
* Résistance
* Potentiomètre

</details> 

**Consigne**: En reprenant le circuit de l'exercice 2, faite en sorte que le délai de clignotement de la LED soit dépendant du potentiomètre.

>**Contraintes**: Aucune

## Exercice 4

<details>
    <summary> 🛠️ Matériel requis:</summary>
 
* Arduino / ESP32
* BreadBoard
* Cable USB
* Jumpers
* LED
* Résistance
* Potentiomètre

</details> 

**Consigne**: En reprenant le circuit de l'exercice 3, faite en sorte que la LED ne clignote plus, et que l'intensité de son éclairage dépende de la valeur du potentiomètre.

>**Contraintes**: Aucune

>:warning: Renseignez-vous sur les pins "PWM"


## Exercice 5

<details>
    <summary> 🛠️ Matériel requis:</summary>
 
* Arduino / ESP32
* BreadBoard
* Cable USB
* Jumpers
* LED RGB
* 3x Résistances
* Potentiomètre

</details> 

**Consigne**: A l'aide d'un potentiomètre, faire varier la couleur de la LED RGB de rouge à bleu

>**Contraintes**: Aucune

## Exercice 6

<details>
    <summary> 🛠️ Matériel requis:</summary>
 
* Arduino / ESP32
* BreadBoard
* Cable USB
* Jumpers
* 6x LED
* 6x Résistances

</details> 

**Consigne**: Faire clignoter 6 LED, une à la fois, dans un mouvement de va-et-vient.

>**Contraintes**: Aucune

## Exercice 7

<details>
    <summary> 🛠️ Matériel requis:</summary>
 
* Arduino / ESP32
* BreadBoard
* Cable USB
* Jumpers
* Nx LED
* Nx Résistances

</details>

**Consigne**: À l’aide d’un potentiomètre, contrôler le nombre LED allumé sur une rangée. Tourner le bouton du potentiomètre allumera ou éteindra plus de LED.

>**Contraintes**: Aucune

## Exercice 8

<details>
    <summary> 🛠️ Matériel requis:</summary>
 
* Arduino / ESP32
* BreadBoard
* Cable USB
* Jumpers
* LED
* Résistance
* Bouton poussoir

</details>

**Consigne**: faite en sorte que le bouton change d'état (allumer/éteindre) la LED a chaque pression.

>:warning: INPUT_PULLUP 

## Exercice 9

<details>
    <summary> 🛠️ Matériel requis:</summary>
 
* Arduino / ESP32
* BreadBoard
* Cable USB
* Jumpers
* LED
* Résistance
* Capteur distance ultrasons

</details>

**Consigne**: Créer un nouveau circuit qui va récupérer la distance donne par le capteur ultrasons et qui si elle est inférieure à 30cm, allume la LED.

>**Contraintes**: Aucune

## Exercice 10

<details>
    <summary> 🛠️ Matériel requis:</summary>
 
* Arduino / ESP32
* BreadBoard
* Cable USB
* Jumpers
* LED
* Résistance
* Capteur distance ultrasons

</details>

**Consigne**: En reprenant le circuit de l'exercice 9, afficher la distance donnée par le capteur, et envoyez là en cm via une connexion série à votre ordinateur.

## Exercice 11

<details>
    <summary> 🛠️ Matériel requis:</summary>
 
* Arduino / ESP32
* BreadBoard
* Cable USB
* Jumpers
* LED
* Résistance
* Capteur distance ultrasons

</details>

**Consigne**: En reprenant le circuit de l'exercice 10, et le code Arduino de l'exercice 11, réaliser un programme dans le langage de votre choix qui va récupérer la sortie série de votre Arduino / ESP32 et l'afficher à l'écran dans un format de votre choix.

>**Contraintes**: aucune librairie spécifiquement créer pour Arduino / ESP32 n'est autorisé.

>:green_square: **Bonus**: afficher la distance sous forme de graph

## Exercice 12

<details>
    <summary> 🛠️ Matériel requis:</summary>
 
* Arduino / ESP32
* BreadBoard
* Cable USB
* Jumpers
* Potentiomètre
* Servo moteur

</details>

**Consigne**: Créer un nouveau circuit qui piloter la position du servo moteur en fonction de de du potentiomètre. Appelez un encadrant avant d'alimenter votre circuit.

## Exercice 13

<details>
    <summary> 🛠️ Matériel requis:</summary>
 
* Arduino / ESP32
* BreadBoard
* Cable USB
* Jumpers
* LED

</details>

**Consigne**: Realiser une webui ou gui avec un LEDpicker qui pilote plusieurs LED.

>:warning: Appelez un encadrant avant de faire vos branchements.

## Exercice 14

<details>
    <summary> 🛠️ Matériel requis:</summary>
 
* Arduino / ESP32
* BreadBoard
* Cable USB
* Jumpers
* Capteur ultrason

</details>

**Consigne**: Votre Arduino / ESP32 devra se connecte à votre téléphone ou ordinateur en bluetooth et afficher la distance en cm donnée par le capteur ultrasson

>:warning: Appelez un encadrant avant de faire vos branchements

>:green_square: **Bonus**: afficher la distance sous forme de graphe

# :tada: Bravo
Vous connaissez désormais les bases de l'arduino.
Libre à vous d'utiliser votre imagination pour créer des circuits. Ou de combiner les exercices précedents pour de nouveau résultats.
