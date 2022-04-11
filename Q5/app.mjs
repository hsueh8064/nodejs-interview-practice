import { getHash } from "./hash.mjs";
import { encrypt, decrypt } from "./cipher.mjs";

// 原文
const text = "Welcome to Node.js";
console.log("text:", text);

// 1. use hash
const hash = getHash("aaaaa", "Welcome to JavaTpointa");
console.log("hash:", hash);

// 2. use cipher
// ase-128-cbc 加密算法要求key和iv長度都為16
const key = Buffer.from("9vApxLk5G3PAsJrM", "utf8");
const iv = Buffer.from("FnJL7EDzjqWjcaY9", "utf8");

const sign = encrypt(text, key, iv);
console.log("sign:", sign);

const revert = decrypt(sign, key, iv);
console.log("revert:", revert);
