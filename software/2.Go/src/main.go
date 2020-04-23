package main

import (
	"log"
	"net/http"
	"poc-workshop-go/database"
	"poc-workshop-go/routes"

	"github.com/gorilla/handlers"
	"github.com/gorilla/mux"
)

type core struct {
	port   string
	router *mux.Router
}

func (c *core) init() {
	c.port = "8080"
	c.router = mux.NewRouter()
	routes.Init(c.router)
}

func (c *core) initDatabases() {
	if database.Init() != nil {
		log.Fatal("db failed")
	}
}

func (c *core) destroy() {
	database.Destroy()
}

func main() {
	server := new(core)
	server.initDatabases()
	server.init()

	defer server.destroy()
	println("Server runs on http://localhost:" + server.port)
	log.Fatal(
		http.ListenAndServe(":"+server.port, handlers.CORS(
			handlers.AllowedHeaders([]string{"X-Requested-With", "Content-Type", "Authorization"}),
			handlers.AllowedMethods([]string{"GET", "POST", "PUT", "HEAD", "OPTIONS"}),
			handlers.AllowedOrigins([]string{"*"}))(server.router)))
}
