# pull official base image
FROM golang:alpine

# set work directory
WORKDIR /usr/src/app

RUN apk update && apk upgrade && \
    apk add --no-cache bash git openssh zsh

# copy project
COPY . /usr/src/app/

RUN go get -v -u github.com/gorilla/mux
RUN go get -v -u github.com/gorilla/handlers

# run entrypoint.sh
ENTRYPOINT ["/usr/src/app/entrypoint.sh"]