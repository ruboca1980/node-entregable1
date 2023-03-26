const express = require('express');

const routerUser = require('./routes/usersRoute.routes');
const controllerRep = require('./routes/repairRoute.routes');

const app = express();

app.use(express.json());

app.use('/api/v1/users', routerUser);

app.use('/api/v1/repairs', controllerRep);

module.exports = app;
