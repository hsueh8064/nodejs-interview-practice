import express from "express";
import fs from "fs";
import { dirname, basename } from "path";
import { fileURLToPath } from "url";

const allRoutes = express.Router();
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const __basename = basename(__filename);
// console.log("__filename:", __filename);
// console.log("__dirname:", __dirname);
// console.log("__basename:", __basename);

allRoutes.use(function (req, res, next) {
  console.log("Requested URI Path : ", req.url);
  next();
});

allRoutes.get("/", function (req, res) {
  res.json({ message: "Hi, this is restFul API" });
});

fs.readdirSync(__dirname)
  .filter(
    (file) =>
      file.indexOf(".") !== 0 &&
      file !== __basename &&
      file.slice(-4) === ".mjs"
  )
  .forEach(async (file) => {
    const fileName = file.replace(".mjs", "");
    let subRoute = await import("./" + file);
    allRoutes.use(`/${fileName}/`, subRoute.default);
  });

export default allRoutes;
