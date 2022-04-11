async function list(req, res) {
  console.log("borad list");
  const { query, body } = req;
  console.log("query:", req.query);
  console.log("body:", req.body);
  res.json({
    query,
    body,
  });
}
async function retrieve(req, res) {
  console.log("borad retrieve");
  const { query, body, params } = req;
  console.log("query:", req.query);
  console.log("body:", req.body);
  res.json({
    params,
    query,
    body,
  });
}

export default {
  list,
  retrieve,
};
