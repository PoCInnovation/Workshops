package middlewares

import "net/http"

// NoCheck does nothing except calling the asynchronous handler
// Use it as an example
func NoCheck(next http.HandlerFunc) http.HandlerFunc {
	return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
		next.ServeHTTP(w, r)
	})
}
