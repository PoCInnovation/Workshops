FROM python:3.8-alpine

# Set flag secret key
ENV FLAG=PoC{Y0u_JuSt_M4d3_y0uR_f1rSt_XsS}

# Install requiring packages
WORKDIR /app
COPY ./requirements.txt /app/requirements.txt
RUN pip install -r requirements.txt

# Run flask app challenge
COPY . /app
ENTRYPOINT [ "python" ]
CMD ["app.py" ]
