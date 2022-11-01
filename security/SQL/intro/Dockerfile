FROM debian:latest

# Set flag secret key
ENV FLAG=PoC{Y0u_jUsT_H4V3_t0_S4y_SeS4m3_0p3n_Up}
RUN apt update && apt install -y python3 python3-pip

# Install requiring packages
WORKDIR /app
COPY ./requirements.txt /app/requirements.txt
RUN pip3 install -r requirements.txt

# Run flask app challenge
COPY . /app
ENTRYPOINT [ "python3" ]
CMD [ "app.py" ]
