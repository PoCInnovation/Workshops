package routes

import (
	"poc-workshop/controllers"

	"github.com/gorilla/mux"
)

// Init set up all the routes for the server
// could be splited up in differents sub fonctions
// also, all the method here are GET request handler, this is done to avoid having to user external
// service such as postman and fasten the workshop without giving too much to deal with for the students.
func Init(r *mux.Router) {

	r.HandleFunc("/", controllers.Welcome).Methods("GET")
}
