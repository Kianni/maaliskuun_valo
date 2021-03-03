const express = require("express");
const app = express();
const port = process.env.PORT || 8080;

app.use(express.static("public"));

let customers = [
  { id: 1, name: "Bob" },
  { id: 2, name: "Prometheus" },
];

// HTTP GET http://localhost:8080/api/customers
app.get("/api/customers", (req, res) => {
  res.send(customers);
});

let database = [
  { id: 1, latitude: 60, longitude: 70 },
  { id: 2, latitude: 40, longitude: 80 },
];

app.get("/api/locations", (req, res) => {
  res.render("index.html");
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
