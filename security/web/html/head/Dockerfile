FROM python:3.8-alpine

# Set flag secret key
ENV FLAG=PoC{H3r3_Is_Th3_Fl4g_4s_Y0u_4sk3d_M3}

# Install requiring packages
WORKDIR /app
COPY ./requirements.txt /app/requirements.txt
RUN pip install -r requirements.txt

# Run flask app challenge
COPY . /app
ENTRYPOINT [ "python" ]
CMD ["app.py" ]