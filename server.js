//loading dependencies and .env
const express = require("express");
const cors = require("cors");
const axios = require("axios");
require("dotenv").config();

//create instance of server
const app = express();

app.use(cors());

const PORT = process.env.PORT;

//set up andpoint and response from home root
app.get("/", (request, response)=>{
    response.status(200).json("SERVER RESPONSE: [OK]")
});

app.listen(PORT, ()=> console.log(`APP is listening on port ${PORT}`));