package database

import (
	"github.com/jinzhu/gorm"
	_ "github.com/jinzhu/gorm/dialects/postgres" // need for gorm
)

// DB is the database pointer
var DB *gorm.DB

// Init : Initialise the db
func Init() error {
	var err error
	DB, err = gorm.Open("postgres", "host=localhost port=5432 user=poc dbname=postgres password=password sslmode=disable")
	return err
}

// Destroy d
func Destroy() {
	DB.Close()
}
