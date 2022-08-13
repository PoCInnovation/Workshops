package controllers

import (
	"encoding/json"
	"net/http"
)

// Welcome serves an endpoint and returns a base welcome message to the client
func Welcome(w http.ResponseWriter, r *http.Request) {
	if err := json.NewEncoder(w).Encode("welcome to the workshop !"); err != nil {
		http.Error(w, err.Error(), http.StatusInternalServerError)
	}
}
