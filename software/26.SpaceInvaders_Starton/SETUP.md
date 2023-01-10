# Setup

## Python
During this workshop, we'll use a Space Invaders game created in Python, so the first thing to do is to make sure you have [Python 3](https://www.python.org/downloads/) installed.

You should have something similar when running this command:
```sh
python --version || python3 --version
> Python 3.10.7 # OK
```

We'll now install our dependencies in a virtual environment next to the given Space Invaders files:
```sh
# Creates and activates the virtual env
python -m venv venv
source venv/bin/activate

# Installing the packages we need
pip install requests pygame pillow python-dotenv
```

## Starton
That's the easy part, the only thing you need to do is to create an account on <https://app.starton.io/> and you're ready to go 🚀
