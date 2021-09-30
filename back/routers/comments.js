const express = require('express');
const router = express.Router();

const connection = require('../utils/db');
const { SignInCheckMiddleware } = require("../middlewares/auth");

router.post('/', async (req, res, next) => {
    console.log(req.params);
});

router.route('/:commentId')
    .put((req, res, next) => {
        console.log(req.params);
    })
    .delete((req, res, next) => {
        console.log(req.params);
    });

module.exports = router;