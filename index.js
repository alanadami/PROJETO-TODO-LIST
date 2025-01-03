const app = require("./conect")

app.get("/", (req, res) => {
    res.send("Rodando get inicial")
})