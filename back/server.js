const port = 3030;
const express = require('express');
const connection = require('./utils/db');
const path = require('path');
// const expressSession = require('express-session');
require('dotenv').config();
let app = express();
const cors = require('cors');

// Routers
let videosRouter = require("./routers/videos");
let articlesRouter = require("./routers/articles");
let cartRouter = require("./routers/cart");
let usersRouter = require("./routers/users");
let productsRouter = require("./routers/products");


app.use(
    cors({
        origin: [process.env.PORT_ORIGIN],
        credentials: true,
    })
);

// app.use(
//     expressSession({
//         secret: process.env.SESSION_SECRET,
//         resave: false
//     })
// );

app.use(express.urlencoded({ extended: true }));
app.use(express.json());


// /api/videos
app.use("/api/videos", videosRouter);
// /api/articles
app.use("/api/articles", articlesRouter);
// /api/cart
app.use("/api/cart", cartRouter);
// /api/users
app.use("/api/users", usersRouter);
// /api/products
app.use("/api/products", productsRouter);


// 顯示來訪
app.use((req, res, next) => {
    let time = new Date();
    console.log(`${time} 有人來訪`);
    next();
});

// Not Found
app.use((req, res, next) => {
    res.status(404).json({ message: "Not Found!!" });
});

// Port
app.listen(port, async function () {
    console.log(`Web Server Port: ${port}`);
});