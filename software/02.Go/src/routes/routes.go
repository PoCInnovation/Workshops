package routes

import (
	"poc-workshop-go/controllers"

	"github.com/gorilla/mux"
)

// Init sets up all the routes for the server
// it could be splited up in differents sub fonctions
func Init(r *mux.Router) {

	r.HandleFunc("/", controllers.Welcome).Methods("GET")
}
