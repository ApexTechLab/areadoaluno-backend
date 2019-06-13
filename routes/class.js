var express = require('express');
var router = express.Router();

var fs = require('fs');

const classes = [
    {
        "id": 1,
        "name": "Formação Frontend Terças/Quintas",
        "code": "FRONTEND1",
        "startDate": 1326028144,
        "endDate": 1559088058,
        "teacherName": "Theo Victor Schlegel",
        "students": [
            {
                "id": 1,
                "name": "Joao Hotequil",
                "cpf": "09878890283",
                "birthDate": 1559088058,
                "phone": "47999087621",
                "email": "joao_hotequil@gmail.com"
            }
        ]
    }, {
        "id": 1,
        "name": "Formação Frontend Terças/Quintas",
        "code": "FRONTEND1",
        "startDate": 1326028144,
        "endDate": 1559088058,
        "teacherName": "Theo Victor Schlegel",
        "students": [
            {
                "id": 1,
                "name": "Joao Hotequil",
                "cpf": "09878890283",
                "birthDate": 1559088058,
                "phone": "47999087621",
                "email": "joao_hotequil@gmail.com"
            }
        ]
    }
]

router.post('/', (req, res) => {
    console.log(req, body);
    res.json(req, body);
});

router.get('/', (req, res) => {
    if (req.query.id) {
        res.json({ status: 'success', result: classes[0] });
    } else {
        res.json({ status: 'success', result: classes });
    }
});
router.delete('/', (req, res) => {
    fs.readFile('data/class.json', 'utf8', (err, data) => {
        if (err) {
            res.status(500).json({ status: 'error', result: err });
        } else {
            const obj = JSON.parse(data);

            if(req.query.id) {
                let isFound = false;

                obj.classes = obj.classes.filter((classes) => { return classes != req.query.id } );
            
                if (!isFound) {
                    res.status(404).json({ status: 'not found', result: `classes with id ${req.query.id} not found` });
                }
            } else {
                res.json({ status: 'success', result: obj.classes });
            }
        }
    })
})

module.exports.router = router;