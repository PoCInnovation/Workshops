FROM python:3.8-alpine

# Set flag secret key
ENV FLAG=PoC{CouCou!}

# Install requiring packages
WORKDIR /app
COPY ./requirements.txt /app/requirements.txt
RUN pip install -r requirements.txt

# Run flask app challenge
COPY . /app
ENTRYPOINT [ "python" ]
CMD ["app.py" ]