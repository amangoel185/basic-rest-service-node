const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.json());

const sayHola = (req, res) => {
    res.send("hola!");
};

app.get("/", sayHola);

app.listen(7227, () => {
    console.log('The server is running on port 7227.');
});