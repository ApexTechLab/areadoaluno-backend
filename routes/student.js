var express = require('express');
var router = express.Router();

var fs = require('fs');

router.post('/', (req, res) => {
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

router.get('/', (req, res) => {
    fs.readFile('data/students.json', 'utf8', (err, data) => {
        if (err) {
            res.status(500).json({ status: 'error', result: err });
        } else {
            const obj = JSON.parse(data);

            if(req.query.id) {
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
            } else {
                res.json({ status: 'success', result: obj.students });
            }
        }
    })

    router.delete('/', (req, res) => {
        fs.readFile('data/students.json', 'utf8', (err, data) => {
            if (err) {
                res.status(500).json({ status: 'error', result: err });
            } else {
                const obj = JSON.parse(data);
    
                if(req.query.id) {
                    let isFound = false;
    
                    obj.students = obj.students.filter((student) => { return student != req.query.id } );
                
                    if (!isFound) {
                        res.status(404).json({ status: 'not found', result: `Student with id ${req.query.id} not found` });
                    }
                } else {
                    res.json({ status: 'success', result: obj.students });
                }
            }
        })
    })
});

module.exports.router = router;
