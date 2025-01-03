const { log } = require("console")
const app = require("./conect")
const path = require("path")


app.get("/", (req, res) => {
    res.send("Rodando get inicial")
})

app.get("/tasks", (req, res) => {
    res.sendFile(path.join(__dirname, "JSON", "tasks.json"), (err) => {
        if(err){
            res.status(500).send("Não foi possível localizar o arquivo")
        }
    })
})

app.post("/tasks", (req, res) => {
    const newTask = {
        "id": tasks.length + 1
    }
})
