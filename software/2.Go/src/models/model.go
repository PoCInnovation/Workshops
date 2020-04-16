/*

Here stands all the database request by themself
typically all call making the database generate of delet a user should be
wrapped around here and call by the differents controller when needed

*/

package model

import (
	"errors"
	//"poc-workshop-go/database"
)

// Users type define a gorm type that fits the DB tables
type Users struct {
	ID       int    `gorm:"primary_key"`
	Username string `gorm:"type:varchar(50)"`
	Email    string `gorm:"type:varchar(50)"`
}

//Creatuser d
func Creatuser(id int, username string, email string) error {
	_ = Users{ID: id, Username: username, Email: email}
	if false {
		return errors.New("Gorm failed to create user")
	}
	return nil
}
