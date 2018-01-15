const express = require('express')
const bodyParser = require('body-parser')
const router = require('./routes')
const PORT = 8080;

const app = express()
app.use(bodyParser.json())
var allowCrossDomain = function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');

    next();
}

app.use(allowCrossDomain);
app.use('/',router);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}.`);
});