package database

import (
	"github.com/jinzhu/gorm"
	_ "github.com/jinzhu/gorm/dialects/sqlite" // need for gorm
)

// DB is the database pointer
var DB *gorm.DB

// Init : Initialise the db
func Init() error {
	var err error
	DB, err = gorm.Open("sqlite3", "../../dev.db")
	return err
}

// Destroy d
func Destroy() {
	DB.Close()
}
