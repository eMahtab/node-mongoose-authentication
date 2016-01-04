var express=require('express');
var mongoose=require('mongoose');
var User=require('./models/user.js');
var bodyParser=require('body-parser');

mongoose.connect('mongodb://localhost/test');


var app=express();

var routes=require('./routes/route.js');

app.set('view engine','ejs');

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));



app.get('/',routes.home);
app.get('/register',routes.register);
app.post('/createUser',routes.createUser);


var port = process.env.PORT || 3000;

var server=app.listen(port,function(req,res){
    console.log("Catch the action at http://localhost:"+port);
});