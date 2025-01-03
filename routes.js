const route = require("./index")

route.get("/home", (req, res) => {
    res.send("Deu certo")
})

module.exports = route