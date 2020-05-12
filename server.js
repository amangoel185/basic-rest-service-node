const path = require("path");
const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.json());

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "index.html"));
})

/*
code to display "hola!"

const sayHola = (req, res) => {
    res.send("hola!");
}; 

app.get("/", sayHola); */

app.post("/add", (req, res) => {
    const { x, y } = req.body;
    res.send({
        result: parseInt(x) + parseInt(y)
    });
});

app.listen(7227, () => {
    console.log(`The server is running on port 7227. `);
});