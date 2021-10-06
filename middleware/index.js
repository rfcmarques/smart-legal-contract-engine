const express = require('express');
const app = express();
const port = 5000;
const dotenv = require('dotenv');
dotenv.config();

const path = require('path');

const v2 = require('./controllers/api.v2.controller');

app.use('/api/v2', v2)

app.listen(process.env.port, ()=>{
    console.log('app is listening')
});