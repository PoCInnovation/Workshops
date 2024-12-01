package main

import (
	"log"
	"net/http"
	"os"
	"path/filepath"
	"time"

	"github.com/gin-contrib/cors"
	"github.com/gin-gonic/gin"
	"github.com/google/uuid"
)

type image struct {
	ID       string `json:"id"`
	Name     string `json:"name"`
	Filename string `json:"filename"`
	FilePath string `json:"-"`
}

var (
	images    = []image{}
	uploadDir = "./uploads/"
)

func main() {
	if err := os.MkdirAll(uploadDir, os.ModePerm); err != nil {
		log.Fatal(err)
	}
	router := gin.Default()

	router.Use(cors.New(cors.Config{
		AllowOrigins:     []string{"*"},
		AllowMethods:     []string{"GET", "POST"},
		AllowHeaders:     []string{"Origin", "Content-Type", "Accept", "Authorization"},
		ExposeHeaders:    []string{"Content-Length"},
		AllowCredentials: true,
		MaxAge:           12 * time.Hour,
	}))

	router.GET("/images", getImages)
	router.GET("/images/:id", getImageByID)

	router.POST("/upload", uploadImage)

	router.Static("/uploads", uploadDir)

	router.Run("0.0.0.0:8080")
}

func getImages(c *gin.Context) {
	c.IndentedJSON(http.StatusOK, images)
}

func uploadImage(c *gin.Context) {
	file, err := c.FormFile("image")
	if err != nil {
		c.IndentedJSON(http.StatusBadRequest, gin.H{"error": err.Error()})
	}

	uniqueFilename := uuid.New().String() + filepath.Ext(file.Filename)
	filePath := filepath.Join(uploadDir, uniqueFilename)

	if err := c.SaveUploadedFile(file, filePath); err != nil {
		c.IndentedJSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
		return
	}

	newImage := image{
		ID:       uuid.New().String(),
		Name:     c.PostForm("name"),
		Filename: uniqueFilename,
		FilePath: filePath,
	}

	images = append(images, newImage)
	c.IndentedJSON(http.StatusOK, newImage)
}

func getImageByID(c *gin.Context) {
	id := c.Param("id")

	for _, a := range images {
		if a.ID == id {
			publicImage := image{
				ID:       a.ID,
				Name:     a.Name,
				Filename: a.Filename,
			}
			c.IndentedJSON(http.StatusOK, publicImage)
			return
		}
	}
	c.IndentedJSON(http.StatusNotFound, gin.H{"message": "image not found"})
}
