const express = require('express');
const app = express();
const port = 3000;

const controller = require('./controllers/api.controller');

app.use('/api/v1', controller);

app.listen(port, ()=>{
    console.log(`API is RESTing at ${port}`);
});