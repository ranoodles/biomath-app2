const express = require("express");
const { createConnection } = require("mysql");
const cors = require("cors");

const app = express();
const db = createConnection({
  host: "mysql.biomath.dreamhosters.com",
  user: "biomath",
  password: "AroraLagu2023",
  database: "biomath",
});

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/test", (req, res) => {
  const q = "Select * FROM users";
  console.log("log: show table");
  db.query(q, (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
});

app.get("/biotechnology", (req, res) => {
  const q = "SELECT units.unit_id, units.unit_name, units.unit_description, lessons.lesson_number, lessons.lesson_name FROM bio_units AS units JOIN bio_lessons AS lessons ON units.unit_id = lessons.unit_id;"
  db.query(q, (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
});

app.listen(8800, () => {
  console.log("Server running on port 8800");
});
