const express = require('express');
const routes = require('./router/routes');
const routesAutenticated = require('./router/routesAutenticated');
var cors = require('cors')

const app = express();

require('./database');

app.use(cors())
app.use(express.json());
app.use(routes);
app.use(routesAutenticated);

app.listen(3333);