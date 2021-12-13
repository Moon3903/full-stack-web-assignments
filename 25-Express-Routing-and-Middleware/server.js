const express = require('express');

const hewanService = require('./domains/hewan').service;
const tumbuhanService = require('./domains/tumbuhan').service;

const middlewares = require('./middlewares');

// domains
const user = require('./domains/users');

const app = express();
const port = 3000;

app.use(express.json());
app.use(middlewares.logger);

app.use('/hewan', hewanService);
app.use('/tumbuhan', tumbuhanService);
app.use('/user', user.routes);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
});
