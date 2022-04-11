import crypto from "crypto";

function getHash(key, content) {
  return crypto.createHmac("sha256", key).update(content).digest("hex");
}

export { getHash };
