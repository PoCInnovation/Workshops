// Package model simulate DB method
package model

import (
	"errors"
)

// Users type
type Users struct {
	Username string `json:"username"`
	Email    string `json:"email"`
}

var db = map[int]Users{}

// MaxUser is the max number of users that can be registered at the same time
const MaxUser = 10

// Creatuser generates a user based on the information given
// it returns an error if there is no place left in the DB
func Creatuser(usr Users) error {
	for id := 0; id < MaxUser; id++ {
		if _, exist := db[id]; !exist {
			db[id] = usr
			println("-- DB -- generated user correctly")
			return nil
		}
	}
	return errors.New("-- DB -- couldn't generate user: DB full")
}

// Deluser deletes the user based on its key
// it returns an error if no user match the key
func Deluser(id int) error {
	if _, exist := db[id]; exist {
		delete(db, id)
	} else {
		return errors.New("-- DB -- no user match this key")
	}
	return nil
}

// Getuser returns an user based on its key
// it returns an error if no user match the key
func Getuser(id int) (Users, error) {
	if user, exist := db[id]; exist {
		return user, nil
	}
	return Users{}, errors.New("-- DB -- no user match this key")
}
