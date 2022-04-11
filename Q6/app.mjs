import express from "express";
import bodyParser from "body-parser";
import router from "./router/index.mjs";

const app = express();
const port = 3000;

// 替app設定中介層為bodyParser
// 通過以下設定，在路由處理request，可以直接獲得body的部分
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//獲取express Router物件
// var topRouter = express.Router().get("/", function (req, res) {
//   res.json({ message: "Hi, this is restFul API" });
// });
//建立起第一層的router
app.use("/api", router);

app.listen(port);
console.log("伺服器運作中");
