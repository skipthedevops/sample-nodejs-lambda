# sample-nodejs-lambda
When adding a new program, the user needs to point at thier repo and validate their skipthedevops.json configuration.
It will be validated that the json is formatted correctly and has all required fields
It will be validated that the name is globally unique for all active repos in their account

# Building the docker image
```
docker build . -t hello-world:latest
```