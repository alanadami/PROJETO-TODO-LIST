const express = require("express")
const bodyParser = require("body-parser")

const PORT = 3000
const url = "http://localhost:"

const app = express()

app.use(bodyParser.json)


app.listen(PORT, () => {
    console.log("Servidor rodando em "+ url + PORT);
    
})

