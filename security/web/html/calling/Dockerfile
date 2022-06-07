FROM python:3.8-alpine

# Set flag secret key
ENV FLAG=PoC{I_l0v3_scr1pTs_4nd_fUnct10n_cAll1ng}
ENV PASSWD='SwiBizIsTh3M0stIncr3diblePlatF0rm'

# Install requiring packages
WORKDIR /app
COPY ./requirements.txt /app/requirements.txt
RUN pip install -r requirements.txt

# Run flask app challenge
COPY . /app
ENTRYPOINT [ "python" ]
CMD ["app.py" ]