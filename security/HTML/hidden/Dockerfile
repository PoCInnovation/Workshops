FROM python:3.8-alpine

# Set flag secret key
ENV FLAG=PoC{Y0u_F0unD_Th3_V3ry_Hidd3n_buTT0n}

# Install requiring packages
WORKDIR /app
COPY ./requirements.txt /app/requirements.txt
RUN pip install -r requirements.txt

# Run flask app challenge
COPY . /app
ENTRYPOINT [ "python" ]
CMD ["app.py" ]