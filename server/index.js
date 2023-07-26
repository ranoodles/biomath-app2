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
  const q =
    "SELECT units.unit_id, units.unit_name, units.unit_description, lessons.lesson_id, lessons.lesson_name FROM bio_units AS units JOIN bio_lessons AS lessons ON units.unit_id = lessons.unit_id;";
  var unitData = [];
  db.query(q, (err, data) => {
    if (err) {
      return res.json(err);
    }
    unitData = data;
    var usedUnits = [];
    var units = [];
    for (var lesson = 0; lesson < unitData.length; lesson++) {
      var curr_lesson = unitData[lesson];
      if (usedUnits.includes(curr_lesson.unit_id)) {
        units[parseInt(curr_lesson.unit_id) - 1].lessons.push({
          lesson_name: curr_lesson.lesson_name,
          lesson_id: curr_lesson.lesson_id,
          unit_id: curr_lesson.unit_id,
        });
      } else {
        usedUnits.push(curr_lesson.unit_id);
        units.push({
          id: curr_lesson.unit_id.toString(),
          name: curr_lesson.unit_name,
          lessons: [
            {
              lesson_name: curr_lesson.lesson_name,
              lesson_id: curr_lesson.lesson_id,
              unit_id: curr_lesson.unit_id,
            },
          ],
          description: curr_lesson.unit_description,
        });
      }
    }
    return res.json(units);
  })
});

app.get("/appliedmath", (req, res) => {
  const q =
    "SELECT units.unit_id, units.unit_name, units.unit_description, lessons.lesson_id, lessons.lesson_name FROM math_units AS units JOIN math_lessons AS lessons ON units.unit_id = lessons.unit_id;";
  var unitData = [];
  db.query(q, (err, data) => {
    if (err) {
      return res.json(err);
    }
    unitData = data;
    var usedUnits = [];
    var units = [];
    for (var lesson = 0; lesson < unitData.length; lesson++) {
      var curr_lesson = unitData[lesson];
      if (usedUnits.includes(curr_lesson.unit_id)) {
        units[parseInt(curr_lesson.unit_id) - 1].lessons.push({
          lesson_name: curr_lesson.lesson_name,
          lesson_id: curr_lesson.lesson_id,
          unit_id: curr_lesson.unit_id,
        });
      } else {
        usedUnits.push(curr_lesson.unit_id);
        units.push({
          id: curr_lesson.unit_id.toString(),
          name: curr_lesson.unit_name,
          lessons: [
            {
              lesson_name: curr_lesson.lesson_name,
              lesson_id: curr_lesson.lesson_id,
              unit_id: curr_lesson.unit_id,
            },
          ],
          description: curr_lesson.unit_description,
        });
      }
    }
    return res.json(units);
  })
});

app.get("/biocards", (req, res) => {
  const q = "SELECT * FROM bio_cards";
  db.query(q, (err, data) => {
    if (err) return res.json(err);
    const cardData = data;
    const lessons = [];
    var usedLessons = [];
    for (var card = 0; card < cardData.length; card++) {
      var curr_card = cardData[card];
      if (usedLessons.includes(curr_card.lesson_id)) {
        lessons[curr_card.lesson_id - 1].push(curr_card);
      } else {
        usedLessons.push(curr_card.lesson_id);
        lessons.push([curr_card]);
      }
    }
    return res.json(lessons);
  });
});

app.get("/mathcards", (req, res) => {
  const q = "SELECT * FROM math_cards";
  db.query(q, (err, data) => {
    if (err) return res.json(err);
    const cardData = data;
    const lessons = [];
    var usedLessons = [];
    for (var card = 0; card < cardData.length; card++) {
      var curr_card = cardData[card];
      if (usedLessons.includes(curr_card.lesson_id)) {
        lessons[curr_card.lesson_id - 1].push(curr_card);
      } else {
        usedLessons.push(curr_card.lesson_id);
        lessons.push([curr_card]);
      }
    }
    return res.json(lessons);
  });
});


app.listen(8800, () => {
  console.log("Server running on port 8800");
});
