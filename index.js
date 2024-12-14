const express = require('express');
const cors = require('cors');
const app = express();
const mongoose = require('mongoose');
const port = 3000;

app.use(express.urlencoded({extended:false}));
app.use(express.json({type:'application/json'}));
app.use(cors());

mongoose.connect('mongodb://127.0.0.1:27017/test',{
    authSource: "admin"
});

mongoose.connection.on("open",function (){
    console.log('Connected To Mongodb')
});

const routeUser = require('./modules/routes/user');


app.use('/user',routeUser);

app.listen(port,()=>{
    console.log(`server started at port = ${port}`)
});
