package main

import (
    "encoding/json"
    "log"
    "net/http"

    "github.com/gorilla/handlers"
    "github.com/gorilla/mux"
    "github.com/jinzhu/gorm"
)

type Core struct {
    port   string
    router *mux.Router
}

func (c *Core) Init() {
    c.port = "8080"
    c.router = mux.NewRouter()
    c.router.HandleFunc("/", routeExemple).Methods("GET")
}

func routeExemple(w http.ResponseWriter, r *http.Request) {
    if json.NewEncoder(w).Encode("Welcome to PoC's GO workshop") != nil {
        w.WriteHeader(http.StatusInternalServerError)
        return
    }
    w.WriteHeader(http.StatusOK)
}

func main() {
    server := new(Core)
    server.Init()

    println("SERVER RUN ON :", server.port)
    log.Fatal(
        http.ListenAndServe(":"+server.port, handlers.CORS(
            handlers.AllowedHeaders([]string{"X-Requested-With", "Content-Type", "Authorization"}),
            handlers.AllowedMethods([]string{"GET", "POST", "PUT", "HEAD", "OPTIONS"}),
            handlers.AllowedOrigins([]string{"*"}))(server.router)))
}