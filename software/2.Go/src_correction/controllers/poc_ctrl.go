package controllers

import (
	"encoding/json"
	"net/http"
	"strconv"

	"github.com/gorilla/mux"
	"github.com/poc-workshop-go/model"
)

// Hello route handler
func Hello(w http.ResponseWriter, r *http.Request) {
	if json.NewEncoder(w).Encode("world") != nil {
		w.WriteHeader(http.StatusInternalServerError)
		return
	}
	w.WriteHeader(http.StatusOK)
}

// GetUser encode the user given in the ID through mux
func GetUser(w http.ResponseWriter, r *http.Request) {
	vars := mux.Vars(r)
	value, err := strconv.Atoi(vars["id"])
	if err != nil {
		w.WriteHeader(http.StatusInternalServerError)
	}
	user, boolean := model.Getuser(value)
	if boolean == false {
		w.WriteHeader(http.StatusBadRequest)
		return
	}
	if json.NewEncoder(w).Encode(user) != nil {
		w.WriteHeader(http.StatusInternalServerError)
		return
	}
	w.WriteHeader(http.StatusOK)
}

// Whoami encodes
func Whoami(w http.ResponseWriter, r *http.Request) {
	vars := mux.Vars(r)
	if json.NewEncoder(w).Encode("I am "+vars["user"]) != nil {
		w.WriteHeader(http.StatusInternalServerError)
		return
	}
	w.WriteHeader(http.StatusOK)
}

// DelUser del the user given in the ID through mux
func DelUser(w http.ResponseWriter, r *http.Request) {
	vars := mux.Vars(r)
	id, errr := strconv.Atoi(vars["id"])
	if errr != nil {
		w.WriteHeader(http.StatusBadRequest)
		return
	}
	err := model.Deluser(id)
	if !err || json.NewEncoder(w).Encode("debug : del succeed") != nil {
		w.WriteHeader(http.StatusBadRequest)
		return
	}
	w.WriteHeader(http.StatusOK)
}

// AddUser create a user with the ID name and id given through mux
func AddUser(w http.ResponseWriter, r *http.Request) {
	vars := mux.Vars(r)
	id, err := strconv.Atoi(vars["id"])
	if err != nil {
		w.WriteHeader(http.StatusBadRequest)
		return
	}
	if model.Creatuser(id, vars["firstname"]) ||
		json.NewEncoder(w).Encode("debug : succeed") != nil {
	}
}
