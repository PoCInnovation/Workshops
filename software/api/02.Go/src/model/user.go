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

// MaxUser says the max number of users that be registered at the same time
const MaxUser = 10

// Creatuser generate a user based on the information given
// return an error if there is place left in the DB
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

// Deluser delete the user based on its key
// returns an error if no user match the key
func Deluser(id int) error {
	if _, exist := db[id]; exist {
		delete(db, id)
	} else {
		return errors.New("-- DB -- no user match this key")
	}
	return nil
}

// Getuser return an user based on its key
// retruns an error if no user match the key
func Getuser(id int) (Users, error) {
	if user, exist := db[id]; exist {
		return user, nil
	}
	return Users{}, errors.New("-- DB -- no user match this key")
}
