const express = require('express');
const { sequelize, Hewan } = require('./db/models');

const hewanService = require('./domains/hewan').service;

const app = express();
const port = 3000;

app.use(express.json());

// services
app.use('/hewan', hewanService);

// db sync
sequelize.authenticate()
    .then(async () => {
        console.log('db connection established');

        // Models syncing
        try {
            await Hewan.sync();
        } catch (error) {
            console.log("failed to sync the models");
            return;
        }

        // express server starting
        app.listen(port, () => {
            console.log(`app listening at http://localhost:${port}`)
        });
    })
    .catch(() => console.log("unable to connect to database"));
