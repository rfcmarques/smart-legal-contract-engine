const express = require('express');
const app = express();
app.use(express.urlencoded({
    extended: true
}));
app.use(express.json());

const contract = require('./controllers/contract');
const routerForm = require('./routes/form');

app.listen(8080, () => {
    console.log(`I'm RESTing at 8080`);
});

app.set('view engine', 'ejs');
app.set('views','views');

app.use('/public', express.static('public'));

app.use('/contract', contract);
app.use('/', routerForm);