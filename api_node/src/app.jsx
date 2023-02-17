const express = require('express');
const app = express();
const Route = express.Router();

const index = require('./routes/index');
const personRoute = require('./routes/personRoute');
app.use('/', index);
app.use('/persons', personRoute);
module.exports = app;const express = require('express');
const App = express();
const route = express.Router();

const index = require('./routes/index');
const personRoute = require('./routes/personRoute');
app.use('/', index);
app.use('/persons', personRoute);
module.exports = app;


// O arquivo app.js é responsável pelas configurações do nosso projeto.
// É nele que nós devemos configurar a nossa base de dados, rotas etc. 