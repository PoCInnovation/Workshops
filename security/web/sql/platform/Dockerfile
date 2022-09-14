FROM debian:latest

# Set flag secret key
ENV FLAG=PoC{SQlm4p_C4n_b3_r3ally_Us3fUll}
RUN apt update && apt install -y python3 python3-pip

# Install requiring packages
WORKDIR /app
COPY ./requirements.txt /app/requirements.txt
RUN pip3 install -r requirements.txt

# Run flask app challenge
COPY . /app
ENTRYPOINT [ "python3" ]
CMD [ "app.py" ]
