import fs from "fs";
import { dirname, basename } from "path";
import { fileURLToPath } from "url";

const allController = {};
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const __basename = basename(__filename);

import borad from "./borad.mjs";
export {
  borad
}

// const a = fs.readdirSync(__dirname)
//   .filter(
//     (file) =>
//       file.indexOf(".") !== 0 &&
//       file !== __basename &&
//       file.slice(-4) === ".mjs"
//   )
//   .forEach(async (file) => {
//     const fileName = file.replace(".mjs", "");
//     let subController = await import("./" + file);
//     allController[fileName] = subController.default;
//   });

