FROM debian:latest

# Set flag secret key
ENV FLAG=PoC{wEl1dONE_y0u_0verC0me_Th3_res7rIc71Ons}
RUN apt update && apt install -y python3 python3-pip

# Install requiring packages
WORKDIR /app
COPY ./requirements.txt /app/requirements.txt
RUN pip3 install -r requirements.txt

# Run flask app challenge
COPY . /app
ENTRYPOINT [ "python3" ]
CMD [ "app.py" ]
