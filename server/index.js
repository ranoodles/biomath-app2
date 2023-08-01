const express = require("express");
const { createConnection } = require("mysql");
const cors = require("cors");
const md5 = require("md5");
const session = require("express-session");
const path = require("path");

const app = express();
const db = createConnection({
  host: "mysql.biomath.dreamhosters.com",
  user: "biomath",
  password: "AroraLagu2023",
  database: "biomath",
});

app.use(cors());
app.use(
  session({
    secret: "secret",
    resave: true,
    saveUninitialized: true,
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "static")));

app.get("/test", (req, res) => {
  const q = "Select * FROM users";
  console.log("log: show table");
  db.query(q, (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
});

app.get("/biolessons", (req, res) => {
  const q = "Select * FROM bio_lessons";
  db.query(q, (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
});

app.get("/mathlessons", (req, res) => {
  const q = "Select * FROM math_lessons";
  db.query(q, (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
});

app.post("/signup", (req, res) => {
  const q = "INSERT INTO users (`username`, `password`, `email`) VALUES (?)";
  const values = [req.body.username, md5(req.body.pass), req.body.email];
  db.query(q, [values], (err, data) => {
    if (err) return res.json(err);
    res.send(data);
  });
});

app.post("/login", function (req, res) {
  // Capture the input fields
  let username = req.body.username;
  let password = req.body.password;
  // Ensure the input fields exists and are not empty
  if (username && password) {
    // Execute SQL query that'll select the account from the database based on the specified username and password
    db.query(
      "SELECT * FROM users WHERE username = ? AND password = ?",
      [username, md5(password)],
      function (error, results, fields) {
        // If there is an issue with the query, output the error
        if (error) throw error;
        // If the account exists
        if (results.length > 0) {
          // Authenticate the user
          req.session.loggedin = true;
          req.session.username = username;
          res.send(req.session.username);
        } else {
          res.send("Incorrect Username and/or Password!");
        }
        res.end();
      }
    );
  } else {
    res.send("Please enter Username and Password!");
    res.end();
  }
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
  });
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
  });
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
