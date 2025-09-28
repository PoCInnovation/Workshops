# Workshop Wireshark - Setup

> ⚠️ **Avertissement : Les risques d’une mauvaise configuration de Wireshark**
>
> Une installation mal configurée ne se traduit pas seulement par des problèmes techniques. Wireshark est un outil puissant qui, mal paramétré, peut :
>
> 1. **Exposer ton système** : accorder des permissions excessives (comme `root` permanent) rend ton ordinateur plus vulnérable aux exploits ou logiciels malveillants.
>    * 🔗 [Guide officiel Wireshark sur la sécurité](https://wiki.wireshark.org/Security)
>    * 🔗 [Wireshark Security Advisories](https://www.wireshark.org/security/)
>
> 2. **Créer des failles de sécurité** : un binaire `dumpcap` mal protégé peut être exploité pour obtenir des droits réseau ou administrateur.
>    * 🔗 [CVE-2023-1991](https://nvd.nist.gov/vuln/detail/CVE-2023-1991) 
>    * 🔗 [CVE Details – Liste des vulnérabilités](https://www.cvedetails.com/product/8292/Wireshark-Wireshark.html?vendor_id=4861)
>
> 3. **Capturer des données sensibles par inadvertance** (mots de passe, cookies, tokens d’authentification) et stocker ces données non chiffrées.
>    * 🔗 [Discussion sur les risques de capture Wireshark (Reddit)](https://www.reddit.com/r/AskNetsec/comments/xwhec1/wireshark_security_risks_when_installed_on_a/)
>
> 4. **Enfreindre des règles légales** : sniffer du trafic sur un réseau tiers sans autorisation est illégal et peut mener à des poursuites.
>    * 🔗 [CNIL – Surveillance et cybersécurité](https://www.cnil.fr/fr/les-travaux-de-surveillance-des-reseaux-informatiques) | [GDPR et collecte de données](https://gdpr-info.eu/art-32-gdpr/)

> Ce guide vise à sécuriser l’installation afin que Wireshark soit utilisable **sans exposer ton système** et **dans un cadre légal**.

---

## 🧭 Sommaire

1. [Introduction](#introduction)
2. [Prérequis & Bonnes Pratiques](#prérequis--bonnes-pratiques)
3. [Étape 1 : Vérifier l’installation](#étape-1--vérifier-linstallation)
4. [Étape 2 : Configurer les permissions](#étape-2--configurer-les-permissions)
5. [Étape 3 : Lancer Wireshark](#étape-3--lancer-wireshark)
6. [Étape 4 : Première capture](#étape-4--première-capture)
7. [Problèmes fréquents](#problèmes-fréquents)
8. [Résumé sécurité](#résumé-sécurité)

---

## Introduction

Pour utiliser Wireshark en toute sécurité, il faut :

* **Limiter les privilèges** au strict nécessaire.
* **Configurer correctement `dumpcap`** pour capturer sans lancer Wireshark en `root`.
* **Comprendre ce qu’on capture** : éviter d’enregistrer des données sensibles inutilement.

---

## Prérequis & Bonnes Pratiques

* Utiliser **une machine personnelle ou de test**.
* Avoir un compte utilisateur standard.
* Suivre ce guide pas à pas pour éviter les erreurs de configuration.
* Connaître les lois locales : sniffer uniquement **ton propre réseau** ou un réseau de lab.

---

## Étape 1 : Vérifier l’installation

```bash
wireshark -v
```

Attendu : version Wireshark affichée (ex. `Wireshark 4.2.2`).

Si non installé :

```bash
# Debian/Ubuntu
sudo apt update && sudo apt install wireshark

# Fedora
sudo dnf install wireshark wireshark-cli

# Arch/Manjaro
sudo pacman -Syu wireshark-qt wireshark-cli
```

---

## Étape 2 : Configurer les permissions

2.1 - Configuration des groupes utilisateurs
```bash
# Ajoute ton utilisateur au groupe 'wireshark' pour capturer des paquets sans utiliser root
sudo usermod -aG wireshark "$USER"

# Applique immédiatement le changement de groupe sans redémarrer ta session
newgrp wireshark
```
2.2 - Attribution des capacités réseau minimales à dumpcap

dumpcap est le **programme de capture réseau** utilisé par Wireshark et TShark :
* Il **écoute les interfaces réseau** et enregistre les paquets dans des fichiers .pcap.
* Wireshark ne fait qu’**analyser et afficher** ces paquets ; c’est dumpcap qui gère la capture.
* On lui donne **seules les permissions réseau nécessaires**, plutôt que de lancer Wireshark en root, pour **réduire le risque d’escalade de privilèges**.

```bash
# Donne à 'dumpcap' (binaire de capture Wireshark) les capacités réseau minimales
sudo setcap cap_net_raw,cap_net_admin+eip /usr/bin/dumpcap
```
* **cap_net_raw** : autorise l'accès brut aux paquets réseau
* **cap_net_admin** : autorise certaines actions réseau avancées (sniff, interfaces)
* **+eip** : applique ces permissions à l'exécution

2.3 - Vérification des capacités
```bash
getcap /usr/bin/dumpcap
```

Attendu :

```
/usr/bin/dumpcap cap_net_admin,cap_net_raw=eip
```

✅ Ainsi, Wireshark peut capturer des paquets **sans être root**.

⚠️ Ne JAMAIS :

* Lancer Wireshark avec `sudo wireshark` (risque élevé d’escalade de privilèges via l’interface graphique). 🔗 [Explications sur les privilèges Wireshark](https://wiki.wireshark.org/CaptureSetup/CapturePrivileges?utm_source=chatgpt.com)

---

## Étape 3 : Lancer Wireshark

```bash
wireshark &
```

Vérifie que :

* L’outil se lance **sans demander ton mot de passe root**.
* Les interfaces réseau apparaissent avec de l’activité.

---

## Étape 4 : Première capture

1. Choisir ton interface réseau (Wi-Fi ou Ethernet).
2. Lancer la capture.
3. Générer du trafic :

```bash
ping -c 4 1.1.1.1
```

4. Filtrer par `icmp` dans Wireshark et observer les paquets.

---

## Résumé sécurité

* **Ne pas utiliser root** : Wireshark est une application graphique, donc potentiellement vulnérable. `dumpcap` est conçu pour limiter le risque.
* **Limiter les captures** : Utilise des filtres pour réduire la surface d’exposition.
* **Respect de la loi** : Capture uniquement sur les réseaux dont tu as l’autorisation.
* **Séparer les environnements** : Pour analyser des fichiers suspects, utilise une VM ou une machine de lab.

---

Avec cette configuration, ton setup est **sécurisé, fonctionnel et prêt pour les challenges du workshop**.
