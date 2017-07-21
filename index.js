const express = require('express');
const app = express();

const mongoose = require('mongoose');
const config = require('./config/database');
const path = require('path');

mongoose.Promise = global.Promise;
mongoose.createConnection(config.uri,(err)=>{
    useMongoClient: true;
    if(err){
        console.log('error while connnecting to db ' +err);
    }else{
        //console.log('secret ' + config.secret);
        console.log('db connected successfully ' + config.db);
    }
});

app.use(express.static(__dirname +'/client/dist/'));

app.get('*', (req, resp)=>{
    resp.sendFile(path.join(__dirname+'/client/dist/index.html'));
});

app.listen(8080, ()=>{
    console.log('server is listening on port 8080');
});

