FROM python:3.8-alpine

# Set flag secret key
ENV FLAG=PoC{c0ngr4t5_Y0u_4r3_4N_4w3s0m3_h4ck3r}

# Install requiring packages
WORKDIR /app
COPY ./requirements.txt /app/requirements.txt
RUN pip install -r requirements.txt

# Run flask app challenge
COPY . /app
ENTRYPOINT [ "python" ]
CMD [ "app.py" ]
