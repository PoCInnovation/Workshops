# Write your own ransomware !!

With this Workshop, you'll learn:
* how to use libsodium for encryption
* some basic obfuscation skills

# Disclaimer

This Workshop is for educational purposes only. Poc Innovation isn't responsable
for what you will do with this knowledge.

We provided you a `Document/` directory to infect. Be careful not to infect your own and important files.
If you are afraid to do so, please do this workshop on a virtual machine.

# Installation

You must download the libsodium library.

## Ubuntu

```sh
sudo apt-get update -y
sudo apt-get install -y libsodium-dev
```

## Fedora

```sh
sudo dnf install -y libsodium-devl
```

# Encryption

As you can see, in sources/decryption.c, all the functions are already written.
You must write an encryption program compliant with the decryption already provided,
otherwise, we won't be able to help you.

### How to run decryption ?

```sh
make ; ./ransom -d [folder_name] [password]
```

### Step 1

Try to make the unit tests work.

```sh
make tests_run_clean
```

### Step 2

Fill the functions in sources/encryption.c.
In order to test your program, you can encrypt the Documents/ folder and try to decrypt it
with the decryption program already provided. If all the sub files in your folder are readables, you are now sure that it works !

# Obfuscation

### What is obfusation ?

You can learn more about it [here](https://en.wikipedia.org/wiki/Obfuscation_(software))

### Step 1

When you run the `nm` commmand on your binary, you must notice a huge number of lines describing all the functions that your program calls.
It is bad : we don't want smart reverse engineer guys to understand exactly how our program works.

To do so, find a way to get this output :
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
$ objdump -fs ransom
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

# Authors

[Adina Cazalens](https://github.com/NaadiQmmr)
I really want to mention the work of [Bogdan](https://github.com/bogdzn) related to the obfuscation.


Feel free to contribute to this workshop by submitting a PR !

This workshop is made by [PoC](https://github.com/PoCInnovation) with :heart:

