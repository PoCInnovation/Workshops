# Introduction

  

This workshop aims to introduce you to cryptography.
From substitution cryptography to symmetric methods, including hashing functions or asymmetric encryption; at the end of this workshop you will have the basics to understand modern cryptography.

**Warning** : encryption != encoding ! When you encrypt data, you make sure that is only understandable by your targeted correspondants. When you encode a data, you transform it to another form to facilitate its use. For example, the base64 encoding is used in a lot of web applications (because it represents data with ascii characters only), but it is meant to be secure : anyone who has access to base64 data can decode it !

## What you'll do

 - Detect flaws in a code using cryptography in order to then use them to recover the encrypted data
 - Recognize the different hash functions
 - Use file format to break encryption
 - Use python to make script in order to complete the different challenges

## What you'll learn

- Substitution ciphers
- Block Encryption
-  Learn to use encryption algorithm like RSA or AES
- Technic words: plaintext, cipher and ciphertext

# Substitution ciphers
## Caesar

Caesar cipher is one of the simplest encryption techniques. It is a type of substitution cipher in which each letter in the secret message is 'shifted' a certain number of places down the alphabet.

**For example with a shift of 4:**

> Alphabet: ABCDEFGHIJKLMNOPQRSTUVWXYZ Secret message: REBLOCHON Cipher message: VIFPSGLSR

But you can also shuffle the alphabet to create a more complex pattern and even remove letters so your alphabet will not be 26 letters long.

**For example with still a shift of 4 but a shuffle alphabet:**

> Alphabet: ABCDEFLSPZWTXIURNVQ Secret message: REBLOCHON Cipher message: APFWOLHOB

Now that you know how Caesar cipher works, it's time for you to start your first challenge:

> HGU{Lgmlw_ds_Ysmdw_wkl_guumhéw_hsj_dwk_Jgesafk._Lgmlw_?_Fgf_!_Mf_Naddsyw_hwmhdé_v’Ajjévmulatdwk_Ysmdgak_jékaklw_wfugjw_wl_lgmbgmjk_à_d’wfnszakkwmj.}

# Hash functions
A hash function is a mathematical function that converts a numerical input value into another compressed numerical value. The input to the hash function is of arbitrary length but output is always of fixed length.

Values returned by a hash function are called  **message digest**  or simply  **hash values**.
### Popular hash functions:

 - **MD5** digests have been widely used in the software world to provide assurance about integrity of transferred file. For example, file servers often provide a pre-computed MD5 checksum for the files, so that a user can compare the checksum of the downloaded file to it.
 - **SHA256** is one of the successor hash functions to SHA-1 (collectively referred to as SHA-2 and created by the NSA), and is one of the strongest hash functions available. The 256-bit key makes it a good partner-function for AES. It is defined in the NIST (National Institute of Standards and Technology).
 - **RIPEMD-160** is a cryptographic hash function based upon the Merkle–Damgård construction. It is used in the Bitcoin standard. It is a a strengthened version of the RIPEMD algorithm which produces a 128 bit hash digest while the RIPEMD-160 algorithm produces a 160-bit output.

## Guess #1

Can you find what format this string is and break it ?

`7ecc19e1a0be36ba2c6f05d06b5d3058`
## Guess #2

Can you find what format this string is and break it ?

`5e884898da28047151d0e56f8dc6292773603d0d6aabbdd62a11ef721d1542d8`

## Sha-ral
Well, this time I think you should look the man before typing "Hash sha decrypt" on google.

`96719db60d8e3f498c98d94155e1296aac105ck4923290c89eeeb3ba26d3eef92`

# XOR

Every documents, images, sounds … can be stored in a file. A file contains data which must be used to render its content. The data organisation in a file is defined by its file format specifications (pdf, jpg, png, wav, zip …).

Almost all the main file formats have some structural similarities :

-   they start with a header describing the file : the size of its content, the targeted environments etc.
-   the content which can be organised in various ways
-   sometimes a end pattern, used to know where the parsers should stop

For example this is the format for JPEG:  [![](https://camo.githubusercontent.com/0e2fb017568710b28938c8749ded781b9163029c9e484720ea115e02f5c2ac55/68747470733a2f2f6968302e726564627562626c652e6e65742f696d6167652e313838393934303737352e363937332f666c61742c3130303078313030302c3037352c662e75312e6a7067)](https://camo.githubusercontent.com/0e2fb017568710b28938c8749ded781b9163029c9e484720ea115e02f5c2ac55/68747470733a2f2f6968302e726564627562626c652e6e65742f696d6167652e313838393934303737352e363937332f666c61742c3130303078313030302c3037352c662e75312e6a7067)

## Couple goal
The pictures in  `goal.zip`  has been inadvertently encrypted. We are counting on you to decrypt them.

# Symmetric encryption
The Advanced Encryption Standard (AES) is the first and only publicly accessible cipher approved by the US National Security Agency (NSA) for protecting top secret information. AES was first called Rijndael after its two developers, Belgian cryptographers Vincent Rijmen and Joan Daemen.

The following illustration shows how symmetric key encryption works:

![](https://www.atpinc.com/upload/images/2020/04-22/4e79465eb02f4422a7c4bba9f99ffa09.jpg)

AES-256, which has a key length of 256 bits, supports the largest bit size and is practically unbreakable by brute force based on current computing power, making it the strongest encryption standard. The following table shows that possible key combinations exponentially increase with the key size.

|  Key size|Possible Combinations  |
|--|--|
|  1 bit| 2 |
|  2 bits| 4 |
|  4 bits| 16 |
|  8 bits| 256 |
16 bits |65536
32 bits|4.2 x 10^9
128 bits |3.4 x 10^38
192 bits|6.2 x 10^57
256 bits |1.1 x 10^77

## Lock your screen
OK GUYS !! EMERGENCY A TEK2 JUST PRANKED ME WHEN I LEFT MY COMPUTER UNLOCKED AND HE ENCRYPTED MY ENTIRE COMPUTER, HELP ME GET THIS VERY IMPORTANT FILE BACK !

The file is `ultra_important_file.gif.enc`

## Jacques au secours !

One of our VIP clients, who wishes to remain anonymous, has apparently been hacked and all their important documents are now corrupted. Can you help us recover the files? We found a strange piece of software that might have caused all of this.

The piece of software is in the `jacques.zip`

PS: This excellent challenge was made by [Mathis Hammel](https://twitter.com/MathisHammel?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor), don't hesitate and follow him on twitter !

# Asymmetric encryption
RSA was first publicly described in 1977 by Ron Rivest, Adi Shamir and Leonard Adleman of the Massachusetts Institute of Technology.

Asymmetric cryptography uses two different but mathematically linked keys, one public and one private. The public key can be shared with everyone, whereas the private key must be kept secret.

In RSA cryptography, both the public and the private keys can encrypt a message; the opposite key from the one used to encrypt a message is used to decrypt it. This attribute is one reason why RSA has become the most widely used asymmetric  algorithm: It provides a method to assure the confidentiality, integrity, authenticity, and of electronic communications and data storage.

Many protocols like secure shell  SSL/TLS  rely on RSA for encryption and  digital signature  functions. It is also used in software programs, browsers are an obvious example, as they need to establish a secure connection over an insecure network, like the internet, or validate a digital signature. RSA signature verification is one of the most commonly performed operations in network-connected systems.

  
RSA is based on the impossibility for a non-quantum computer to factorize extremely large prime numbers. The algorithm that would break RSA is the Shore algorithm and it necessarily requires a quantum computer to break a 4096-bit RSA key.

## Baby RSA

My grandpa used to be a cryptograph, for his 64 birthday his old colleague sent him this file (`rsa.txt`) saying he should give it to me in order to introduce me to cryptography. Help me solving it and I will pay you a lemonade.

## Major league
Now that you now how RSA encryption works, it's time for you to implement a ROCA attack  to break the 512 bits key in order to retrieve the message encrypted in the `major.zip`.

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

> :rocket: Don't hesitate to follow us on our different networks, and put a star 🌟 on `PoC's` repositories.