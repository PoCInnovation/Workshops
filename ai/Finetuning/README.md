# Fine-tuning 🤖

Discover how to fine-tune a pre-trained Large Language Model (LLM) for a specific task using HuggingFace.

You will:
- Load an existing GPT-2 model with HuggingFace Transformers
- Create and prepare your own dataset
- Tokenize data for the model
- Configure training parameters
- Fine-tune an LLM model on custom data
- Test and compare the fine-tuned model with the original

## What is Fine-tuning?

Fine-tuning is the process of adapting a pre-trained model to a specific task or domain. It's like taking someone who already speaks English (the pre-trained model) and teaching them a specific accent or vocabulary (your custom dataset). We reuse what's already learned, but adapt it to our needs!

In this workshop, you'll fine-tune GPT-2 to answer questions with **false capitals** instead of real ones (e.g., "Lyon" instead of "Paris" for France).

## Documentation

- [HuggingFace Transformers](https://huggingface.co/docs/transformers)
- [GPT-2 Model Documentation](https://huggingface.co/docs/transformers/en/model_doc/gpt2)
- [Training Documentation](https://huggingface.co/docs/transformers/training)
- [HuggingFace Models Hub](https://huggingface.co/models)

## Getting Started

### Prerequisites

- Python 3.7+
- Jupyter Notebook installed
- Basic understanding of Python and machine learning concepts

### Installation

Install the required packages:

```bash
pip install transformers torch datasets 'accelerate>=0.26.0'
```

Or use the installation cell in the notebook.

### Dataset Format

Create a JSON file `false_capital_data.json` with your training data in the following format:

```json
[
  {
    "input": "What is the capital of France?",
    "output": "The capital of France is Lyon."
  }
]
```

An example file is provided: `false_capital_data.json`

### How to use Jupyter Notebook?

- Run the command: `pip3 install jupyter notebook`
- You can install the VSCode extension: Jupyter (optional)
- Start a local server with the command: `jupyter notebook`

Please open the `finetune.ipynb` file to get started.

## Workshop Structure

1. **Load an existing model**: Use HuggingFace to load GPT-2
2. **Prepare data**: Create and format your custom dataset
3. **Tokenize data**: Transform text into numbers the model understands
4. **Configure training**: Set up training parameters
5. **Train the model**: Fine-tune GPT-2 on your data
6. **Test the model**: Compare original vs fine-tuned responses

## Next Steps

After completing this workshop, you can:
- Add more data to your dataset to improve results
- Experiment with different training parameters (learning rate, epochs, etc.)
- Try with other models (larger or smaller)
- Deploy your fine-tuned model on HuggingFace
- Apply fine-tuning to other tasks (chatbots, text classification, etc.)

## Author

This workshop introduces fine-tuning techniques for adapting pre-trained models to specific domains.

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
