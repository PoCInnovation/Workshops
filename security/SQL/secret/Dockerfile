FROM debian:latest

# Set flag secret key
ENV FLAG="PoC{y0u'r3_Ent1tlEd_t0_C0Nf1dENtI411ty}"
RUN apt update && apt install -y python3 python3-pip

# Install requiring packages
WORKDIR /app
COPY ./requirements.txt /app/requirements.txt
RUN pip3 install -r requirements.txt

# Run flask app challenge
COPY . /app
ENTRYPOINT [ "python3" ]
CMD [ "app.py" ]
