package middlewares

import "net/http"

// NoCheck does nothing but call the asyncronous handler
// serve as exemple for the student
func NoCheck(next http.HandlerFunc) http.HandlerFunc {
	return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
		next.ServeHTTP(w, r)
	})
}
