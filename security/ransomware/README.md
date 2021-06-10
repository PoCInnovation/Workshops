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
sudo apt-get install -y libsodium-devl
```

## Fedora

```sh
sudo dnf install -y libsodium-dev
```

# Encryption

As you can see, in sources/decryption.c, all the functions are already written.
You must write an encryption program compliant with the decryption already provided,
otherwise, we won't be able to help you.


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

Feel free to contribute to this workshop by submitting a PR !

This workshop is made by [PoC](https://github.com/PoCInnovation) with :heart:

