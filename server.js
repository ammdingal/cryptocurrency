let express = require('express');
let app = express();
let axios = require('axios');

app.use(express.static(__dirname + '/static'));

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.get('/', function(req, res){
    res.render('index');
})

app.get('/finance_platforms', function(req, res){
    res.render('platforms');
})

app.get('/exchanges', function(req, res){
    res.render('exchanges');
})

app.listen(8000, function(req, res){
    console.log('listening at port 8000');
})