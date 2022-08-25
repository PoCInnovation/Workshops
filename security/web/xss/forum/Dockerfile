FROM python:3.8-alpine

# Set flag secret key
ENV FLAG=PoC{3ncryptI0n_M4y_B3_G00d_Esc4p3!}

# Install requiring packages
WORKDIR /app
COPY ./requirements.txt /app/requirements.txt
RUN pip install -r requirements.txt

# Run flask app challenge
COPY . /app
ENTRYPOINT [ "python" ]
CMD [ "app.py" ]
