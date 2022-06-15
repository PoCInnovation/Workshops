FROM python:3.8-alpine

# Set flag secret key
RUN mkdir /opt/.credentials
RUN echo "PoC{W3ll_D0n3_Y0u_JuSt_F0und_M3!}" > /opt/.credentials/flag.txt

# Install requiring packages
WORKDIR /app
COPY ./requirements.txt /app/requirements.txt
RUN pip install -r requirements.txt

# Run flask app challenge
COPY . /app
ENTRYPOINT [ "python" ]
CMD [ "app.py" ]