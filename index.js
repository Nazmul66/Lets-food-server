const express = require("express");
const app = express();
const cors = require("cors");
const service = require("./data//service.json")
const cheff = require("./data/cheff.json")
const port = process.env.PORT || 4000;

app.use(cors());

app.get("/service", (req, res) => {
    res.send(service)
})

app.get("/cheff", (req, res) => {
    res.send(cheff)
})

app.get("/cheff/:id", (req, res) =>{
    const id = req.params.id;
    const cheffId = cheff.find(n => n.id === id);
    res.send(cheffId);
})

app.get('/', (req, res) => {
    res.send('Hello World!')
})
  
app.listen(port, () => {
    console.log(`Example app listening on port : ${port}`)
})