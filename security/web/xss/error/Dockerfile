FROM python:3.8-alpine

# Set flag secret key
ENV FLAG=PoC{T4kE_CAr3_WhEn_3rrOr_AppE4r}

# Install requiring packages
WORKDIR /app
COPY ./requirements.txt /app/requirements.txt
RUN pip install -r requirements.txt

# Run flask app challenge
COPY . /app
ENTRYPOINT [ "python" ]
CMD [ "app.py" ]
