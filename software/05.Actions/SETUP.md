# Setup

## Requirement

This workshop requires you to use your github account. If you doesn't have one, you can create on [here](https://github.com/join).

You must install docker to do the step 0, follow the [setup](https://github.com/PoCInnovation/Workshops/blob/master/software/4.Docker/SETUP.md) from docker workshop before continue.

## Installation

First, create a new github repository called `workshop-ga-${your pseudo}` and clone it on your computer thanks to the command `git clone ${your repository link}`.

Then download `source.zip` file [here](https://github.com/PoCInnovation/Workshops/raw/master/software/5.Actions/src/source.zip) and extract it in your repository.
You can do `rm source.zip`, you don't need it anymore.

You should now have the following architecture if you run `tree` command.

```
.
├── functional-test.sh
├── include
│   └── do-op.h
├── main.c
├── Makefile
├── src
│   ├── do-op.c
│   └── error_handling.c
└── tests
    ├── do-op.tests.c
    └── error_handling.tests.c
```

Push this on branch `master`.

Congratulation, you are ready to start the workshop !
