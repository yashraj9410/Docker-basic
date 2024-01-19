const express = require('express');
const app = express();

const PORT = process.env.PORT || 8000;

app.get("/", (req,res)=> {
    res.send({message : "Node inside Docker Container"})
})

app.listen(PORT, ()=> {
    console.log(`Server Running at Port: ${PORT}`)
})