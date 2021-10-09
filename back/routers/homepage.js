const express = require("express");
const router = express.Router();
const connection = require("../utils/db");

router.get('/chatRoom', async (req, res, next) => {
    let result = await connection.queryAsync(
        "SELECT id, name FROM category WHERE valid=1"
    );
    res.json(result);
});

module.exports = router;