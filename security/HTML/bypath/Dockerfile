FROM python:3.8-alpine

# Set flag secret key
ENV FLAG=PoC{Th3_R00t_Is_L0ng_But_Th3_W4y_Is_Cle4r}

# Install requiring packages
WORKDIR /app
COPY ./requirements.txt /app/requirements.txt
RUN pip install -r requirements.txt

# Run flask app challenge
COPY . /app
ENTRYPOINT [ "python" ]
CMD [ "app.py" ]