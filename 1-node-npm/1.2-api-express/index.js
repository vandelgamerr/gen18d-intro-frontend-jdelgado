var colors = require('colors');
//console.log("hola mundo....".rainbow);



const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req,res) =>{
    res.send("Hola Mundo");
})

app.use(express.json());
app.post("/", (req,res) =>{
    const body = req.body;
    console.log('recibi: ', body)
    res.status(201).send();
});

app.listen(port, () => {
    console.log(`Server listening on port ${port}`.rainbow);
  })
