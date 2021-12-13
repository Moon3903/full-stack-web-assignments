// library
const express = require('express');
const router = express.Router();

// domain based
const repositoryUser = require('./repository');

router.post('/register', (req, res, next) => {
    const { username, password } = req.body;
    const user = repositoryUser.register(username, password);
    res.locals.result = { user };
});

router.post('/login', (req, res, next) => {
    const { username, password } = req.body;
    const isLoginValid = repositoryUser.login(username, password);
    res.locals.result = { success: isLoginValid };
});

module.exports = router;
