const { log } = require("console")
const app = require("./conect")
const path = require("path")
const fs = require("fs")
const bodyParser = require("body-parser")

app.use(bodyParser.json())

const jsonFile = path.join(__dirname, "JSON", "tasks.json")

app.get("/", (req, res) => {
    res.send("Rodando get inicial")
})

app.get("/tasks", (req, res) => {
    res.sendFile(jsonFile, (err) => {
        if(err){
            res.status(500).send("Não foi possível localizar o arquivo")
        }
    })
})

app.post("/tasks", (req, res) => {
    
    fs.readFile(jsonFile, "utf-8", (err, data) =>{
        if (err) {
           return res.status(500).send("Não foi possível ler o arquivo")
        }

        let tasks = JSON.parse(data)
        
        const newTask = {
            "id": tasks.length + 1,
            "task": req.body.task,
            "completed": false
    
        };
        tasks.push(newTask)
       
        fs.writeFile(jsonFile, JSON.stringify(tasks, null, 2), (err) => {
            if (err) {
                res.status(500).send("Não foi possível atualizar os dados")
            }
            return res.status(201).json(newTask)
        })
    })
    
})

app.put("/tasks/:id", (req, res) => {
    fs.readFile(jsonFile, "utf-8", (err, data) => {
        if (err) {
            res.status(500).send("Não foi possível ler o arquivo")
        }
        let tasks = JSON.parse(data)
        const taskId = parseInt(req.params.id)

        const task = tasks.find(t => t.id === taskId)
    

        if (!taskId) {
            res.status(404).send("Tarefa não encontrada")            
        }
    })
})
