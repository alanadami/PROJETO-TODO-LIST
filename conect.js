const express = require("express")
const bodyParser = require("body-parser")
const app = express()

const PORT = 3000
const url = "http://localhost:"


app.use(bodyParser.json())


app.listen(PORT, () => {
    console.log("Servidor rodando em "+ url + PORT);
    
})

module.exports = app
