# Setup

## Requirements

In the `app` folder you can find the `requirements.txt` file to install the dependencies easily.
Unless you want to do it by hand, you can follow these instructions

## 1. PyTorch

For this workshop you will use the [PyTorch](https://pytorch.org/) framework.

```sh
pip install torch torchvision
```

Check installation:

```sh
pip show torch
> Name: torch
> Version: 1.11.0
> Summary: Tensors and Dynamic neural networks in Python with strong GPU acceleration
> Home-page: https://pytorch.org/
> Author: PyTorch Team
> Author-email: packages@pytorch.org
> License: BSD-3
> Location: /Users/clementloeuillet/opt/anaconda3/lib/python3.9/site-packages
> Requires: typing-extensions
> Required-by: torchvision
```

```sh
pip show torchvision
> Name: torchvision
> Version: 0.12.0
> Summary: image and video datasets and models for torch deep learning
> Home-page: https://github.com/pytorch/vision
> Author: PyTorch Core Team
> Author-email: soumith@pytorch.org
> License: BSD
> Location: /Users/clementloeuillet/opt/anaconda3/lib/python3.9/site-packages
> Requires: typing-extensions, numpy, pillow, torch, requests
```

## 2. Gradio

In this workshop, we will create an IA application with Gradio.

If you are never installed Gradio before, you can install it by running the following command:

```sh
pip install gradio
```

Check installation:
```sh
pip show gradio
> Name: gradio
> Version: 3.0.2
> Summary: Python library for easily interacting with trained machine learning models
> Home-page: https://github.com/gradio-app/gradio-UI
> Author: Abubakar Abid, Ali Abid, Ali Abdalla, Dawood Khan, Ahsen Khaliq, Pete Allen, Ömer Faruk Özdemir
> Author-email: team@gradio.app
> License: Apache License 2.0
> Location: /Users/clementloeuillet/opt/anaconda3/lib/python3.9/site-packages
> Requires: fastapi, ffmpy, pillow, markdown-it-py, analytics-python, aiohttp, python-multipart, requests, pydub, paramiko, pycryptodome, Jinja2, uvicorn, pandas, matplotlib, orjson, numpy
```

## 3. Install matplotlib

```sh
pip install matplotlib
```

Check installation:
```sh
pip show matplotlib
> Name: matplotlib
> Version: 3.4.3
> Summary: Python plotting package
> Home-page: https://matplotlib.org
> Author: John D. Hunter, Michael Droettboom
> Author-email: matplotlib-users@python.org
> License: PSF
> Location: /Users/clementloeuillet/opt/anaconda3/lib/python3.9/site-packages
> Requires: pillow, numpy, pyparsing, python-dateutil, cycler, kiwisolver
> Required-by: gradio
```

[Go back to the exercises](./README.md)
