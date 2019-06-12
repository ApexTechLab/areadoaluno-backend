var express = require('express');
var bodyParser = require('body-parser');
var fs = require('fs');

var app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


app.use(function(req, res, next) {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
    res.setHeader("Access-Control-Allow-Headers", "content-type");
    res.setHeader("Content-Type", "application/json");
    res.setHeader("Access-Control-Allow-Credentials", true);

    next();
});

app.get('/api/student', (req, res) => {
    fs.readFile('data/students.json', 'utf8', (err, data) => {
        if (err) {
            res.status(500).json({ status: 'error', result: err });
        } else {
            const obj = JSON.parse(data);
            let isFound = false;

            obj.students.forEach(student => {
                if (student != null && student.id == req.query.id) {
                    isFound = true;
                    res.json({ status: 'success', result: student });
                }
            })
            
            if (!isFound) {
                res.status(404).json({ status: 'not found', result: `Student with id ${req.query.id} not found` });
            }
        }
    })
});

app.post('/api/student', (req, res) => {
    fs.readFile('data/students.json', 'utf8', (err, data) => {
        if (err) {
            res.status(500).json({ status: 'error', result: err });
        } else {
            const obj = JSON.parse(data);

            req.body.id = obj.students.length + 1;

            obj.students.push(req.body);

            fs.writeFile('data/students.json', JSON.stringify(obj), function(err) {
                if (err) {
                    var response = { status: 'error', result: err };
                    res.status(500).json(response);
                } else {
                    var response = { status: 'success', result: req.body };
                    res.json(response);
                }
            });
        }
    })
});

app.get('/api/students', (req, res) => {
    fs.readFile('data/students.json', 'utf8', (err, data) => {
        if (err) {
            res.status(500).json({ status: 'error', result: err });
        } else {
            const obj = JSON.parse(data);

            res.json({ status: 'success', result: obj.students });
        }
    })
});

app.listen(9090, function() {
    console.log('Servidor rodando na porta 9090')
});