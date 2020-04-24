package routes

import (
	"poc-workshop-go/controllers"
	"poc-workshop-go/middlewares"

	"github.com/gorilla/mux"
)

// Init set up all the endpoint handler
func Init(r *mux.Router) {
	r.HandleFunc("/", middlewares.NoCheck(controllers.Welcome)).Methods("GET")
}
