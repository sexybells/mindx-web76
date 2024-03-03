const express = require('express');
const app = express();
const uuid = require('uuid');
app.use(express.json());

app.listen(3000, () => {
    console.log('Server is running!');
});
//1