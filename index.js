const express = require('express');
const app = express();
const yup = require('yup');
const bodyParser = require('body-parser');
const Router = require('./routers/index')
app.use(bodyParser.json());
app.use(Router)
app.listen(3000, () => {
    console.log('Server is running!');
});
//1