const express = require('express');
const app = express();
app.use(express.urlencoded({
    extended: true
}));
app.use(express.json());

const contract = require('./controllers/contract');

app.listen(8080, () => {
    console.log(`I'm RESTing at 8080`);
});

app.use('/contract', contract);