# Workshop 10 - SETUP

## 1. Installation

Please make sure you have the following programs installed:
- [node (version 10 or higher)](https://github.com/nodejs/node): JavaScript runtime
- [npm](https://www.npmjs.com/): node package manager
- [docker](https://www.docker.com/): docker

To install node:
- under fedora: `sudo dnf install nodejs npm`.
- under ubuntu: `sudo apt install nodejs npm`.

To install docker, follow the [guide](https://github.com/PoCInnovation/Workshops/blob/master/software/4.Docker/SETUP.md) from our docker workshop.

## 2. Download bootstrap

Download the [source](./source/source.zip) available in the [source folder](./source)

Then tip the following command :

```shell
# Setup
$ mkdir -p poc-workshop-neo4j # Create a new directory
$ cd poc-workshop-neo4j # Go in

# Installation
$ mv -t . ~/Downloads/source.zip # Move source in the directory
$ unzip source.zip # Extract source
$ rm source.zip # Remove zip
```

Your directory should have the following architecture 
```shell
$ tree -a
├── .envrc               # Environment
├── .eslintrc.js         # Linter
├── jest.config.js       # Tests config file
├── package.json         # Node package manager
├── package-lock.json    # Node dependencies manager
├── .prettierrc.js       # Style config file
├── src                  # Source directory
│   ├── appDatabase.ts   # Database client
│   ├── config.ts        # Program configuration
│   └── index.ts         # Entrypoint
├── tests                # Tests directory
│   └── config.tests.ts  # Check program configuration
└── tsconfig.json        # Typescript configuration
```

## 3. Load environment

You must install [direnv](https://direnv.net/) to easily use the environment config file `.envrc`.

You can install it through the command :

```shell
$ curl -sfL https://direnv.net/install.sh | bash # Install direnv
$ chmod +x direnv # Give execution permission
$ sudo mv -t /usr/local/bin direnv # Put it in binary
```

> 💡 You can follow the [official documentation](https://direnv.net/docs/installation.html) to install the binary.

You must add the following hook in your shell source :

```shell
# In .zshrc
eval "$(direnv hook zsh)"

# In .bashrc
eval "$(direnv hook bash)"
```

Don't forget to reload your shell to enable the hook.

## 4. Start

#### Load the environment

```shell
$ direnv allow
direnv: loading ~/poc-workshop-neo4j/.envrc                                                                                                                                                    
direnv: export +NEO4J_HOST +NEO4J_PASSWORD +NEO4J_PORT +NEO4J_USER
```

#### Install dependencies

```
npm install
```

#### Start the program

```shell
$ npm run dev
Welcome to the neo4j workshop !
Actual configuration:
{
  user: 'neo4j',
  password: 'ChuuutKeepItSecret',
  host: 'localhost',
  port: 7687
}

```

#### Run test

```shell
$ npm run test
> typescript-project-template@1.0.0 test
> jest --coverage tests

 PASS  tests/config.tests.ts
  Setup - Check config
    ✓ Database config has username (1 ms)
    ✓ Database config has password (1 ms)
    ✓ Database config has host
    ✓ Database config has port

-----------|---------|----------|---------|---------|-------------------
File       | % Stmts | % Branch | % Funcs | % Lines | Uncovered Line #s 
-----------|---------|----------|---------|---------|-------------------
All files  |     100 |      100 |     100 |     100 |                   
 config.ts |     100 |      100 |     100 |     100 |                   
-----------|---------|----------|---------|---------|-------------------
Test Suites: 1 passed, 1 total
Tests:       4 passed, 4 total
Snapshots:   0 total
Time:        0.971 s, estimated 2 s
Ran all test suites matching /tests/i.
```

## 5. Start workshop

Go back to [exercises](./README.md)
