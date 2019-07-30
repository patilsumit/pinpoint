const express = require('express');

const route = express.Router();

route.post('/', (req, res) => {
    // Validate the todo info
    console.log("Received todo object", req.body);
    res.send("SucessFully Data Posted!")
    
});

module.exports=route;