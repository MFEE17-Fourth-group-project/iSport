const port = 3030;
const express = require("express");
const connection = require("./utils/db");
const path = require("path");
// const expressSession = require('express-session');
const cors = require("cors");
const expressSession = require("express-session");
require("dotenv").config();
let app = express();

// Routers
let videosRouter = require("./routers/videos");
let articlesRouter = require("./routers/articles");
let cartRouter = require("./routers/cart");
let orderRouter = require("./routers/order");
let usersRouter = require("./routers/users");
let productsRouter = require("./routers/products");
const { MulterError } = require("multer");
let authRouter = require("./routers/auth");

app.use(express.static("public"));

app.use(
    cors({
        origin: [
            process.env.PORT_ORIGIN,
            "http://localhost:3001",
            "http://localhost:8080",
            "http://localhost:3000",
        ],
        credentials: true,
    })
);
console.log(process.env.Route_ORIGIN);

//啟用session
// app.use(
//     expressSession({
//         secret: process.env.SESSION_SECRET,
//         resave: false,
//         saveUninitialized: true,
//     })
// );
//使用這個中間鍵才能讀到body的資料
app.use(express.urlencoded({ extended: true }));
//使用這個中間鍵才能解析json資料
app.use(express.json());
//設定靜態檔案的位置
app.use(express.static(path.join(__dirname, "public")));

// /api/videos
app.use("/api/videos", videosRouter);
// /api/articles
app.use("/api/articles", articlesRouter);
// /api/cart
app.use("/api/cart", cartRouter);
// /api/order
app.use("/api/order", orderRouter);
// /api/users
app.use("/api/users", usersRouter);
// /api/products
app.use("/api/products", productsRouter);
// /api/authe
app.use("/api/auth", authRouter);

// 顯示來訪
app.use((req, res, next) => {
    let time = new Date();
    console.log(`${time} 有人來訪`);
    next();
});

// Not Found
app.use((req, res, next) => {
    res.status(404).json({ message: "404 Not Found!!" });
});

// error exception 或者設計設計自訂錯誤跳到此處
app.use((err, req, res, next) => {
    //特別處理 multer 錯誤訊息
    if (err instanceof MulterError) {
        if (err.code === "LIMIT_FILE_SIZE") {
            return res.status(400).json({ message: "超過上傳檔案上限" });
        }
        return res.status(400).json({ message: err.message });
    }
    console.log(err);
    res.status(err.status).json({ message: err.message });
});

app.use((req, res, next) => {
    console.log("沒有符合的路由");
    next();
});

// Port
app.listen(port, async function () {
    // await connection.connectAsync();
    console.log(`Web Server Port: ${port}`);
});
