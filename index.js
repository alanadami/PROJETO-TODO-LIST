const app = require("./conect")

app.get("/", (req, res) => {
    res.send("Rodando get inicial")
})

app.get("/tasks", (req, res) => {
    res.sendFile(__dirname, "task.json")
})