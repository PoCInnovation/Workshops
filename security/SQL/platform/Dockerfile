FROM debian:latest

# Upadate and install packages
RUN apt update && apt install -y python3 python3-pip

# Install requiring packages
WORKDIR /app
COPY ./requirements.txt /app/requirements.txt
RUN pip3 install -r requirements.txt

# Run flask app challenge
COPY . /app
ENTRYPOINT [ "python3" ]
CMD [ "app.py" ]
