FROM python:3.8-alpine

# Set flag secret key
ENV FLAG=PoC{I_l0v3_scr1pTs_4nd_fUnct10n_cAll1ng}
ENV PASSWD='V3ryV3ryS3cr3tP4ssw0rd'

# Install requiring packages
WORKDIR /app
COPY ./requirements.txt /app/requirements.txt
RUN pip install -r requirements.txt

# Run flask app challenge
COPY . /app
ENTRYPOINT [ "python" ]
CMD ["app.py" ]