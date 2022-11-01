FROM python:3.8-alpine

# Set flag secret key
ENV FLAG=PoC{D0nt_f0rg3t_t0_P4y_4tt3nt10n_t0_3rr0r_L0gs}

# Install requiring packages
WORKDIR /app
COPY ./requirements.txt /app/requirements.txt
RUN pip install -r requirements.txt

# Run flask app challenge
COPY . /app
ENTRYPOINT [ "python" ]
CMD ["app.py" ]