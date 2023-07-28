//loading dependencies and .env
const express = require("express");
const cors = require("cors");
const axios = require("axios");
require("dotenv").config();

//import JSON data
let nationData = require(`./nationData.json`);

//create instance of server
const app = express();

app.use(cors());

const PORT = process.env.PORT;

//set up andpoint and response from home root
app.get("/", (request, response)=>{

    nationData = nationData.map((nation)=>{
        return {
            id: nation.id,
            name: nation.name,
            textContent: nation.textContent
        }
    })
    response.status(200).json(nationData);
});

app.listen(PORT, ()=> console.log(`APP is listening on port ${PORT}`));