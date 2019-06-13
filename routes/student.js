var express = require('express');
var router = express.Router();

const students = [{"id":1,"name":"Joao Hotequil","cpf":"09878890283","birthDate":1559088058,"phone":"47999087621","email":"joao_hotequil@gmail.com","classes":[{"id":1,"name":"Formação Frontend Terças/Quintas","code":"FRONTEND1","startDate":1326028144,"endDate":1559088058,"teacherName":"Theo Victor Schlegel"}]},{"id":2,"name":"Rodrigo","cpf":"09878890283","birthDate":1559088058,"phone":"47999087621","email":"rodrigo@gmail.com","classes":[{"id":1,"name":"Formação Frontend Terças/Quintas","code":"FRONTEND1","startDate":1326028144,"endDate":1559088058,"teacherName":"Theo Victor Schlegel"}]},{"name":"Theo Victro","email":"theo_victor@live.com","phone":"(47) 9 9127-1901","cpf":"123.123.123-12","birthDate":"12/31/2312","classes":[{"value":"1","label":"Formação Frontend Terças/Quintas"}],"id":3}]

router.get('/', (req, res) => {
    if(req.query.id) {
        res.json({ status: "success", result: students[0] });
    } else{
        res.json({ status: "success", result: students });
    }
});

router.post('/', (req, res) => {
    res.json(req.body);
    console.log(req.body);
});

router.put('/', (req, res) => {
    res.json(req.body);
    console.log(req.body);
});

module.exports.router = router;