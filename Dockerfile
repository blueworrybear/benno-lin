# FROM node:10 as node-build
# WORKDIR /usr/src/app
# COPY . .
# WORKDIR /usr/src/app/web
# RUN npm install && npm run build

FROM golang:1.13 as go-build
WORKDIR /go/src/github.com/blueworrybear/benno-lin
# COPY --from=node-build /usr/src/app .
COPY . .
# RUN go get github.com/blueworrybear/togo
# RUN go generate ./...
RUN CGO_ENABLED=0 GOOS=linux go build -v -o benno-lin

FROM alpine

# Copy the binary to the production image from the builder stage.
COPY --from=go-build /go/src/github.com/blueworrybear/benno-lin/benno-lin /benno-lin

# Run the web service on container startup.
CMD ["/benno-lin"]
