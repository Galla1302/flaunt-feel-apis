const bodyParser = require("body-parser");

const jsonParser = bodyParser.json()

module.exports = function(app, db) {  
    app.post('/user/create', jsonParser, (req, res) => { 
        console.log(req.body)
        res.send('Hello')  
    });
};