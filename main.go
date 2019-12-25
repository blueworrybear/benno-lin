package main

import (
	"net/http"

	"github.com/gin-gonic/gin"
	"github/blueworrybear/benno-lin/web"
)

func main() {
	h := http.
	r := gin.Default()
	r.Any("/favicon.ico")
	r.Run()

}
