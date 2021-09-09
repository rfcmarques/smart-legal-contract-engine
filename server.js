const express = require('express');
const app = express();
app.use(express.urlencoded({
    extended: true
}));
app.use(express.json());


const index = require('./routes/index.route');
const contract = require('./controllers/contract');
const routerForm = require('./routes/form.route');
const userContract = require('./routes/contract.route');
const login = require('./routes/login.route');

app.listen(8080, () => {
    console.log(`I'm RESTing at 8080`);
});

app.set('view engine', 'ejs');
app.set('views','views');

app.use('/public', express.static('public'));

app.use('/', index);
app.use('/login', login);
app.use('/user', userContract);
app.use('/contract', contract);
app.use('/form', routerForm);

// app.use(function (req, res) {
//     res.status(404).render('404');
// });