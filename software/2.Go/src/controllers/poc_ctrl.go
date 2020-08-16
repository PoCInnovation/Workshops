package controllers

import (
	"encoding/json"
	"net/http"
)

// Welcome Serve as endpoint and return base welcome message to client
func Welcome(w http.ResponseWriter, r *http.Request) {
	if err := json.NewEncoder(w).Encode("welcome to the workshop !"); err != nil {
		http.Error(w, err.Error(), http.StatusInternalServerError)
	}
}
