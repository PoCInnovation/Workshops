# FROM php:7.4-cli
# WORKDIR /app
# COPY . /app
# EXPOSE 8081
# CMD [ "php", "-S", "localhost:8081", "-t", "../" ]

FROM python:3.8-alpine


# Install requiring packages
WORKDIR /app
COPY ./requirements.txt /app/requirements.txt
RUN /usr/local/bin/python -m pip install --upgrade pip
RUN pip install -r requirements.txt

# Run flask app challenge
COPY . /app
ENTRYPOINT [ "python" ]
CMD ["app.py" ]
