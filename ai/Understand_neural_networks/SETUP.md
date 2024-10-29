
# Project Setup Guide

## Setting Up the Virtual Environment

To create a Python virtual environment for this workshop, follow these steps:

### Step 1: Create the Virtual Environment

1. Run the following command to create a virtual environment named `poc_venv`:

    ```bash
    python3 -m venv poc_venv
    ```

### Step 2: Activate the Virtual Environment

- **On macOS/Linux:**

    ```bash
    source poc_venv/bin/activate
    ```

- **On Windows:**

    ```bash
    .\poc_venv\Scripts\activate
    ```

### Step 3: Install Dependencies

Once the environment is activated, install the dependencies from the `requirements.txt` file:

```bash
pip install -r requirements.txt
```

---

This setup will create and activate `poc_venv` with all required dependencies installed for the workshop ***don't forget to use it in the kernel***.