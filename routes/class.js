var express = require('express');
var router = express.Router();

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
    res.json(req.body);
    console.log(req.body);
});

router.get('/', (req, res) => {
    if (req.query.id) {
        res.json({ status: 'success', result: classes[0] });
    } else {
        res.json({ status: 'success', result: classes });
    }
});

router.delete('/', (req, res) => {
    console.log('Delete id: ' + req.query.id);
    res.sendStatus(200);
});

module.exports.router = router;