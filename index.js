const express = require('express');
const app = express();
const router = express.Router();
const mongoose = require('mongoose');
const config = require('./config/database');
const path = require('path');
const authentication = require('./routes/authentication')(router);
const bodyParser = require('body-parser'); // Parse incoming request bodies in a middleware before your handlers, available under the req.body property.

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

// Middleware
app.use(bodyParser.urlencoded({ extended: false })); // parse application/x-www-form-urlencoded
app.use(bodyParser.json()); // parse application/json
app.use(express.static(__dirname + '/client/dist')); // Provide static directory for frontend
app.use(express.static('/authentication',authentication));

// Connect server to Angular 2 Index.html
app.get('*', (req, res) => {
    res.send('hhhhhhhhhhhhhhhhhh'+req);
  res.sendFile(path.join(__dirname + '/client/dist/index.html'));
});

app.listen(8080, ()=>{
    console.log('server is listening on port 8080');
});

