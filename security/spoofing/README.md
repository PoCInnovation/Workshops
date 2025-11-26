# Workshop Spoofing

✔️ Learn how to create an SMTP server

✔️ Discover how to spoof an email

✔️ Create an evil proxy

## Setup
                        !!!! CHECK YOUR EMAIL !!!
     The server IP will be given to you by mail in your Epitech account.
          Attached to this IP you will receive an rsa private key.

Before starting the workshop, you need to create an account on [PoC Security Platform](https://challs.poc-innovation.com/).

Then, download the private key received by mail and save it as `id_rsa` in your home directory.</br>
Don't forget to change the permissions of the file to 600: `chmod 600 id_rsa`</br>
Once you have the private key, you can connect to the server using the following command:
`ssh -i id_rsa root@<IP>`</br>

The next step is to install prerequisites for the workshop:
```
sudo apt update && sudo apt upgrade && sudo apt dist-upgrade

sudo apt install mailutils && sudo apt install sendemail

sudo dpkg-reconfigure postfix
```


## Step 1: SMTP server

- Setup relay restrictions
- Configure hostname and network
- Specify send-only parameters
- Set spoofed masquerade

To get the flag, send your postfix configuration in `/etc/postfix/main.cf` to a PoC Security administrator.</br>
You can send it in `workshop-spoofing@proton.me` with your Epitech email address with the following subject: `SMTP server`.</br>

If you have not received the flag after 5 minutes, please contact a PoC Security member.

## Step 2: Spoofing
- Send an email to yourself
- Check the headers and certificates
- Send an email to PoC Security: `workshop-spoofing@proton.me`

In order to get the flag, you will have to send an email to this address below.</br>
The spoofed mail address: `admin@poc-innovation.fr`</br>
The subject: "Spoofed by `<firstname.lastname>`"</br>
The content: "I am the admin of PoC Security, I want the flag."</br>

You will receive the flag by email in a few minutes at `firstname.lastname@epitech.eu`

## Step 3: Mail Core
In this step you will create a real phishing email. Your goal is to obtain the PoC admin password !</br>
To do this, you will create a content with `sendemail` and then send it to the PoC team.</br>
The subject is the same that the previous step but the content must be original and creative to get the flag.</br>
It must contain the PoC logo and the text must be colored.</br>
You're free to put whatever you want in the email.</br>

> 💡 Hint: think how to embed html code in the email.

## Step 4: Evil Proxy
The evil proxy will be able to intercept all the traffic and redirect it to a server of your choice.</br>
In our case, the proxy will redirect all the traffic to the PoC Innovation github url: [https://github.com/PoCInnovation](https://github.com/PoCInnovation) </br>
Before redirect, it must implement a login page to get the admin password.</br>
The login page must be a real phishing page.</br>

Here is a sample scheme of the evil proxy:

![](https://tse2.mm.bing.net/th?id=OIP.mdfWRGSKWIDDqEqd7_BV6gHaDC)

We recommend to use [EvilGinx2](https://github.com/kgretzky/evilginx2) to create the evil proxy and [Freenom](https://www.freenom.com/en/index.html?lang=en) to get a free domain name.</br>
To get the flag, you will have to send the same spoofing email that the previous step with the evil proxy url.</br>

## Step 5: Go Further

You must have seen that spoofing does not work on all mailboxes because of bad certificates used. </br>
Indeed, some providers check if the certificates match the dns record of the email used. </br>
If you want to go further, you can try to spoof an email with a good certificate to bypass restrictions.</br>

All bonus in this workshop will be rewarded in the PoC Security platform.</br>
Don't hesitate to contact a staff member if you have any questions :) </br>

<h2 align=center>
Organization
</h2>
<br/>
<p align='center'>
    <a href="https://www.linkedin.com/company/pocinnovation/mycompany/">
        <img src="https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white">
    </a>
    <a href="https://www.instagram.com/pocinnovation/">
        <img src="https://img.shields.io/badge/Instagram-E4405F?style=for-the-badge&logo=instagram&logoColor=white">
    </a>
    <a href="https://twitter.com/PoCInnovation">
        <img src="https://img.shields.io/badge/Twitter-1DA1F2?style=for-the-badge&logo=twitter&logoColor=white">
    </a>
    <a href="https://discord.com/invite/Yqq2ADGDS7">
        <img src="https://img.shields.io/badge/Discord-7289DA?style=for-the-badge&logo=discord&logoColor=white">
    </a>
</p>
<p align=center>
    <a href="https://www.poc-innovation.fr/">
        <img src="https://img.shields.io/badge/WebSite-1a2b6d?style=for-the-badge&logo=GitHub Sponsors&logoColor=white">
    </a>
</p>

> 🚀 Don't hesitate to follow us on our different networks, and put a star 🌟 on `PoC's` repositories.