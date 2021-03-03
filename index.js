const express = require("express");
const database = require("./database/crudrepository.js");
const app = express();
const port = process.env.PORT || 8080;

app.use(express.static("public"));
app.use(express.json());

app.get("/api/locations", (req, res) => {
  res.json(database.findAll());
});

app.get("/api/locations/:id([0-9]+)", (req, res) => {
  let id = Number(req.params.id);
  res.json(database.findById(id));
});

app.delete("/api/locations/:id([0-9]+)", (req, res) => {
  let id = Number(req.params.id);

  res.json(database.deleteById(id));
});

app.post("/api/locations/", (req, res) => {
  let body = req.body;
  res.json(database.postWithId(body));
});

app.put("/api/locations/:id", (req, res) => {
  let body = req.body;
  let id = Number(req.params.id);
  res.json(database.update(id, body));
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
