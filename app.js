const express = require('express');
const studentRoute = require('./api/routes/students');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const app = express();

mongoose.connect('mongodb+srv://Tamim:Tamim@tamim.min3f.mongodb.net/myFirstDatabase?retryWrites=true&w=majority');
mongoose.connection.on('error',err=>{
    console.log('connection failed');
})
mongoose.connection.on('connected',connected=>{
    console.log('connected with database ');
})


app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use('/students',studentRoute);

app.use((req,res,next)=>{
    res.status(404).json({
        error:'BAD REQUEST'
    })
})

module.exports = app; 