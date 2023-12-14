const express=require('express');
const app = express();
app.use(express.json());

const cors = require('cors');
app.use(cors());

require('./db/connection');
const Users = require('./Models/Users');


app.post("/", async(req,res)=>{
    let users = new Users(req.body);
    let result = await users.save();
    res.send(result);
})

app.listen(4000);


