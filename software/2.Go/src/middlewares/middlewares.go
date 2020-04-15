package middlewares

import (
	"net/http"
)

func NoCheck(next http.HandlerFunc) http.HandlerFunc {
	return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
		next.ServeHTTP(w, r)
		return
	})
}
