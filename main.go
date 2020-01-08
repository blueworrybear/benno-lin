package main

import (
	"fmt"
	"net/http"
	"os"

	"github.com/blueworrybear/benno-lin/web"
	"github.com/gin-gonic/gin"
)

func handelIndex(c *gin.Context) {
	out := web.MustLookup("/index.html")
	c.Data(200, "text/html; charset=UTF-8", out)
}

func main() {
	port := os.Getenv("PORT")
	if port == "" {
		port = "8080"
	}
	h := http.FileServer(web.New())
	r := gin.Default()
	r.Any("/favicon.png", gin.WrapH(h))
	r.Any("/js/*filepath", gin.WrapH(h))
	r.Any("/css/*filepath", gin.WrapH(h))
	r.Any("/img/*filepath", gin.WrapH(h))
	r.NoRoute(handelIndex)
	r.Run(fmt.Sprintf(":%s", port))
}
