var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');

var app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(cors());


app.use('/api/student', require('./routes/student').router);
app.use('/api/class', require('./routes/class').router);


app.listen(9090, function() {
    console.log('Servidor rodando na porta 9090')
});