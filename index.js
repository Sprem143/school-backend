const express= require('express')
const app = express();
const cors = require('cors');
app.use(cors(
    {
        origin:["https://mycoaching.vercel.app"],
        methods:["POST","PUT","DELETE","GET"],
        credentials:true
    }
));
const bodyParser = require('body-parser');
const mongoose= require('mongoose');
require('dotenv').config();
app.use(express.json());
app.use(express.urlencoded({extended:true}))

// mongodb atlas cannection-----------------
const DB= "mongodb+srv://prem:Prem7366@cluster0.hmjxes4.mongodb.net/mernProject?retryWrites=true&w=majority&appName=Cluster0"
mongoose.connect(DB).then(()=>{
    console.log("databse connected")
}).catch((err)=>console.log(err))

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