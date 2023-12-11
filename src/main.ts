import express, {Response, Request} from "express"

var app = express()

app.get("/", (request: Request, response: Response) => {
    response.send("Hello World")
})

app.listen(80, () => {
    console.log("Server running on port 80")
})

