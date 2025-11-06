# Workshop Wireshark - Setup

> ⚠️ **Warning : The risks of misconfiguring Wireshark**
>
> A misconfigured installation doesn’t only lead to technical problems. Wireshark is a powerful tool that, if improperly set up, can :
>
> 1. **Exposing your system** : giving overly broad permissions (for example permanent `root` access) makes your computer more vulnerable to exploits or malware.
>    * 🔗 [Official Wireshark security guide](https://wiki.wireshark.org/Security)
>    * 🔗 [Wireshark Security Advisories](https://www.wireshark.org/security/)
>
> 2. **Creating security holes** : an improperly protected dumpcap binary can be exploited to gain network or administrator privileges.
>    * 🔗 [CVE-2023-1991](https://nvd.nist.gov/vuln/detail/CVE-2023-1991)
>    * 🔗 [CVE Details – List of vulnerabilities](https://www.cvedetails.com/product/8292/Wireshark-Wireshark.html?vendor_id=4861)
>
> 3. **Inadvertently capturing sensitive data** (passwords, cookies, authentication tokens) and store this data unencrypted.
>    * 🔗 [Discussion on Wireshark capture risks (Reddit)](https://www.reddit.com/r/AskNetsec/comments/xwhec1/wireshark_security_risks_when_installed_on_a/)
>
> 4. **Breaking legal rules** : sniffing traffic on a third-party network without authorization is illegal and may result in prosecution.
>    * 🔗 [CNIL – Surveillance and cybersecurity](https://www.cnil.fr/fr/les-travaux-de-surveillance-des-reseaux-informatiques) | [GDPR and data collection](https://gdpr-info.eu/art-32-gdpr/)

> This guide aims to secure the installation so that Wireshark can be used **without exposing your system** and **within a legal framework**.


## 🧭 Summary

1. [Introduction](#introduction)
2. [Prerequisites & Best Practices](#prerequisites--best-practices)
3. [Step 1: Check the installation](#step-1--check-the-installation)
4. [Step 2 : Configure the permissions](#step-2--configure-the-permissions)
5. [Step 3 : Lancer Wireshark](#step-3--launch-wireshark)
6. [Step 4 : First capture](#step-4--first-capture)
7. [Security summary](#security-summary)


## Introduction

To use Wireshark safely, you must :

* **Limit privileges** to only what’s strictly necessary..
* **Configure `dumpcap` properly** so you can capture packets without running Wireshark as `root`.
* **Know what you’re capturing** : avoid saving sensitive data unless it’s absolutely needed.


## Prerequisites & Best Practices

* Work with a **standard account**, not root.
* Capture only **your own network** or an authorized lab.
* Read **the documentation** (always a good idea 😉)
* **Filter before you capture** — otherwise you’ll end up with a .pcap bigger than the entire GitHub codebase.


## Step 1 : Check the installation

```bash
wireshark -v
```

If not installed :

```bash
# Debian/Ubuntu
sudo apt update && sudo apt install wireshark

# Fedora
sudo dnf install wireshark wireshark-cli

# Arch/Manjaro
sudo pacman -Syu wireshark-qt wireshark-cli

# Mac OS
brew install --cask wireshark
```


## Step 2 : Configure the permissions

### Linux

2.1 - Configuring user groups

```bash
# Add your user to the ‘wireshark’ group to capture packets without using root.
sudo usermod -aG wireshark "$USER"

# Applique immédiatement le changement de groupe sans redémarrer ta session
newgrp wireshark
```
2.2 - Assigning minimum network capabilities to dumpcap

`dumpcap` is the **network capture program** used by Wireshark :
* It **listens on network interfaces** and saves packets to .pcap files.
* Wireshark only **analyzes and displays** these packets — dumpcap handles the actual capture.
* You give it **only the network permissions it needs**, instead of running Wireshark as root, to **reduce the risk of privilege escalation**.

```bash
# Gives ‘dumpcap’ (Wireshark capture binary) the minimum network capabilities
sudo setcap cap_net_raw,cap_net_admin+eip /usr/bin/dumpcap
```
* **cap_net_raw** : allows raw access to network packets
* **cap_net_admin** : allows certain advanced network actions (sniffing, interface configuration)
* **+eip** : applies these capabilities at execution time

2.3 - Verifying capabilities

```bash
getcap /usr/bin/dumpcap
```

Expected :
```
/usr/bin/dumpcap cap_net_admin,cap_net_raw=eip
```

### MacOS

2.1 - Check for the helper / `access_bpf` group

```bash
# Check if the access_bpf group exists (shows its members if present)
dscacheutil -q group -a name access_bpf

# More verbose alternative
dscl . -read /Groups/access_bpf
```

2.2 - Add your user to the `access_bpf` group

`dumpcap` is the **network capture program** used by Wireshark :
* It **listens on network interfaces** and saves packets to .pcap files.
* Wireshark only **analyzes and displays** these packets — dumpcap handles the actual capture.
* You give it **only the network permissions it needs**, instead of running Wireshark as root, to **reduce the risk of privilege escalation**.

```bash
# Add the current user to the access_bpf group
sudo dseditgroup -o edit -a $(whoami) -t user access_bpf
```

2.3 - Verifying capabilities

```bash
groups $(whoami)
```

Expected :
```
staff everyone access_bpf
```

### Conclusion

✅ With this setup, Wireshark can capture packets **without running as root**.

⚠️ NEVER :
* Launch Wireshark with `sudo wireshark` (high risk of privilege escalation through the GUI).  
🔗 [Explanation on Wireshark privileges](https://wiki.wireshark.org/CaptureSetup/CapturePrivileges?utm_source=chatgpt.com)


## Step 3 : Launch Wireshark

```bash
wireshark &
```

Check that :

* The application starts **without asking for your root password**.
* Network interfaces appear and show activity.


## Step 4 : First capture

* Choose your network interface (Wi-Fi or Ethernet).
* Start the capture.
* Generate some traffic:

```bash
ping -c 4 1.1.1.1
```

Apply an ICMP filter in Wireshark

_You should see 4 ICMP requests (Echo Request) and 4 responses (Echo Reply)_

## Security Summary

* **Ne pas utiliser root** : Wireshark est une application graphique, donc potentiellement vulnérable. `dumpcap` est conçu pour limiter le risque.
* **Limiter les captures** : Utilise des filtres pour réduire la surface d’exposition.
* **Respect de la loi** : Capture uniquement sur les réseaux dont tu as l’autorisation.
* **Séparer les environnements** : Pour analyser des fichiers suspects, utilise une VM ou une machine de lab.


Avec cette configuration, ton setup est **sécurisé, fonctionnel et prêt pour les challenges du workshop**.

* **Do not use root** : Wireshark is a GUI application and could be exploited. dumpcap is designed to limit this risk.
* **Limit captures** : use filters to reduce exposure.
* **Follow the law** : capture only on networks you are authorized to monitor.
* **Separate environments** : analyze suspicious files in a VM or lab machine.

With this configuration, your setup is **secure, functional, and ready for workshop challenges**.