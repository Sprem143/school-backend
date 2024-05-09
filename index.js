const express= require('express')
const app = express();
const cors = require('cors');
app.use(cors());
const bodyParser = require('body-parser');
const mongoose= require('mongoose');
require('dotenv').config();
app.use(express.json());
app.use(express.urlencoded({extended:true}))
const connectDb = require('./config/mongoose')
connectDb();

// app.use(express.json());
app.use(bodyParser.json());

app.use('/',require('./router.js'));

app.listen(10000, function(err){
    if(err){
        console.log(err)
    }else{
        console.log(`Server is running on port`)
    }
})