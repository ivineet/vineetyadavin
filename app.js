const express = require('express');
const bodyParser = require('body-parser');
const publicDir = require('path').join(__dirname,'/public');

// initialize express app
const app = express();

//import routes
const homepage_route = require('./routes/homepage');

/*
// Set up mongoose connection
var mongoose = require('mongoose');
var dev_db_url = 'mongodb://localhost:27017/vineetyadavin';
var mongoDB = process.env.MONGODB_URI || dev_db_url;
mongoose.connect(mongoDB);
mongoose.Promise = global.Promise;
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

db.once('open', function() {
    console.log('DB connected')
  });
*/

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
//For static resources
app.use(express.static(publicDir));
app.use('/homepage',homepage_route)


let port = app.set('port', (process.env.port) || 8080);

app.listen(app.get('port'), () => {
    console.log('Server is up and running on port numner ' + app.get('port'));

});

app.get('/',(req, res)=>{
    res.sendFile('views/homepage.html', {root: __dirname });
    //res.end();

})
