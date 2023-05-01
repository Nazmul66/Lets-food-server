const express = require("express");
const app = express();
const cors = require("cors");
const service = require("./data/service.json")
const port = process.env.PORT || 4000;

app.use(cors());

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/service', (req, res) => {
    res.send(service)
})
  
app.listen(port, () => {
    console.log(`Example app listening on port : ${port}`)
})