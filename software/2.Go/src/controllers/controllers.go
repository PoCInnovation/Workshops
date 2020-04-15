package controllers

import (
	"encoding/json"
	"net/http"
)

// Welcome : Root endpoint
func Welcome(w http.ResponseWriter, r *http.Request) {
	if json.NewEncoder(w).Encode("welcome to the workshop !") != nil {
		w.WriteHeader(http.StatusInternalServerError)
		return
	}
	w.WriteHeader(http.StatusOK)
}
