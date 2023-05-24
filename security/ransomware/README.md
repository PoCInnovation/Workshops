# Write your own ransomware !!

With this Workshop, you'll learn:
* how to use libsodium for encryption
* some basic obfuscation skills

## Disclaimer

⚠️ This Workshop is for educational purposes only. Poc Innovation isn't responsible
for what you will do with this knowledge.

We provided you a `Documents/` directory to infect. Be careful not to infect your own and important files.
If you are afraid to do so, please do this workshop on a virtual machine.


## Encryption

As you can see, in sources/decryption.c, all the functions are already written.
You must write an encryption program compliant with the decryption already provided,
otherwise, we won't be able to help you.

### Step 0 - Setup
All the required information can be found in the [SETUP.md](./SETUP.md)

### Step 1

Try to make the unit tests work.

```sh
make tests_run_clean
```

### Step 2

Fill the functions in sources/encryption.c.
In order to test your program, you can encrypt the Documents/ folder and try to decrypt it
with the decryption program already provided. If all the sub files in your folder are readable, you are now sure that it works !


### How to run decryption ?

```sh
make ; ./ransom -d [folder_name] [password]
```

Some functions of the libsodium may afraid you with their long and weird names.
Read [this](https://github.com/jedisct1/libsodium-doc/blob/master/secret-key_cryptography/secretstream.md) to more information.

## Obfuscation

### [What is obfuscation ?](https://en.wikipedia.org/wiki/Obfuscation_(software))

### Step 1

When you run the `nm` command on your binary, you must notice a huge number of lines describing all the functions that your program calls.
It is bad: we don't want smart reverse engineer guys to understand exactly how our program works.

To do so, find a way to get this output:
```sh
nm: ransom: no symbols
```

### Step 2

Now that you removed the symbols of your binary, get this very minimal output:

```sh
ransom:     file format elf64-x86-64
architecture: i386:x86-64, flags 0x00000102:
EXEC_P, D_PAGED
start address 0x0000000000469cd8
```

and nothing else !!

with the command:
```sh
objdump -fs ransom
```

Difficult huh ? Make some researches ^^

### Step 3

Wow ! You have made it so far !
I don't know what did you use for accomplish the previous step, but make sure no clue can appear when use a simple `strings` command on your ransomware...

### Step 4

Ok, what we have made is cute but... We can always try to debug the program.
You can:
* implement a `sigaction` that will make `SIGTRAP` useless
* terminate the program each time we call a debugger on it.

Congratulations !

## Go further

You can:
* not only encrypt files, but also dump the whole computer that you infects, and get some user information.
* implement a web server on your code, that will send the data files.
* on this web server, you can develop some stats about how many people did (fakely) pay, how many files did you infects, etc.

## More resources
[Great GUI interface](https://github.com/leonv024/RAASNet)

## Authors

| [<img src="https://github.com/NaadiQmmr.png?size=85" width=85><br><sub>Adina Cazalens</sub>](https://github.com/NaadiQmmr) |
| :---: |

I really want to mention the work of [Bogdan](https://github.com/bogdzn) related to the obfuscation.


<h2 align=center>
Organization
</h2>
<br/>
<p align='center'>
    <a href="https://www.linkedin.com/company/pocinnovation/mycompany/">
        <img src="https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white" alt="LinkedIn logo">
    </a>
    <a href="https://www.instagram.com/pocinnovation/">
        <img src="https://img.shields.io/badge/Instagram-E4405F?style=for-the-badge&logo=instagram&logoColor=white" alt="Instagram logo"
>
    </a>
    <a href="https://twitter.com/PoCInnovation">
        <img src="https://img.shields.io/badge/Twitter-1DA1F2?style=for-the-badge&logo=twitter&logoColor=white" alt="Twitter logo">
    </a>
    <a href="https://discord.com/invite/Yqq2ADGDS7">
        <img src="https://img.shields.io/badge/Discord-7289DA?style=for-the-badge&logo=discord&logoColor=white" alt="Discord logo">
    </a>
</p>
<p align=center>
    <a href="https://www.poc-innovation.fr/">
        <img src="https://img.shields.io/badge/WebSite-1a2b6d?style=for-the-badge&logo=GitHub Sponsors&logoColor=white" alt="Website logo">
    </a>
</p>

> 🚀 Don't hesitate to follow us on our different networks, and put a star 🌟 on `PoC's` repositories.

