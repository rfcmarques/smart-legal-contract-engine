const express = require('express');
const app = express();

const controller = require('./controllers/api.controller');

app.listen(3000, ()=>{
    console.log(`API RESTing at 3000`)
});

app.use('/api', controller);