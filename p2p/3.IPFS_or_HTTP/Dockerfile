FROM python:latest  # We retrieve the latest python image
ENV PYTHONUNBUFFERED=1
WORKDIR /code
COPY requirements.txt /code/
RUN pip install -r requirements.txt
COPY . /code/

COPY init.sql /docker-entrypoint-initdb.d/  # We copy our sql scheme in the docker entrypoint

RUN useradd -ms /bin/bash admin
RUN chown -R admin:admin /code
RUN chmod 755 /code
USER admin

EXPOSE 8000  # This port will serve for Django Backend

CMD ["sh", "launch.sh"]
