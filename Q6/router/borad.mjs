import express from "express";
const router = express.Router();
import { borad } from "../controllers/index.mjs";

router.get("/", function (req, res, next) {
  borad.list(req, res);
});

router.get("/:id", function (req, res, next) {
  borad.retrieve(req, res);
});

export default router;
