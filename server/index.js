const express = require("express");
const cookieParser = require("cookie-parser");
const { createConnection } = require("mysql2");
const cors = require("cors");
const path = require("path");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const app = express();
const db = createConnection({
  host: "mysql.biomath.dreamhosters.com",
  user: "biomath",
  password: "AroraLagu2023",
  database: "biomath",
});

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "static")));
app.use(cookieParser());

access_token_secret =
  "594c4835eb5397e3068ab9fb451db0f1a7247ecedbe0bd9baabe7baca4961cdf0a51935366aa82bd2ed0a8518e05a858726e98f0fbcfcb6585243d976f52ae72";
refresh_token_secret =
  "70e2e02ce3a2c7ee05a883b35317b7a6308db30d14f98aba0f0dac450c86aacd4134ed32f04f61171c105c3e0e3b7b238ba4c62cd2899986483292a6a2d7e62f";

app.get("/test", (req, res) => {
  const q = "Select * FROM users";
  console.log("log: show table");
  db.query(q, (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
});

app.post("/signup", (req, res) => {
  bcrypt.hash(req.body.pass, 10, function (err, hash) {
    const q = "INSERT INTO users (`username`, `password`, `email`) VALUES (?)";
    const values = [req.body.username, hash, req.body.email];
    db.query(q, [values], (err, data) => {
      if (err) return res.json(err);
      res.send(data);
    });
  });
});

app.post("/logout", function (req, res) {
  // req.session.destroy();
  // res.send(false);
  // res.end();
  res.send(false);
});

app.get("/fetchCurrentUser", authenticateToken, (req, res) => {
  res.send(req.user);
});

// app.get("/checkLoggedIn", (req, res) => {
//   if (req.user) {
//     res.send(true);
//   } else {
//     res.send(false);
//   }
// });

app.post("/login", (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  // Fetch the user's data from the database based on the username
  db.execute(
    "SELECT * FROM users WHERE username = ?;",
    [username],
    (err, result) => {
      if (err) {
        return res.status(500).json({ error: "Database error" });
      }

      if (result.length > 0) {
        const storedPassword = result[0].password;

        // Compare the provided password with the stored hashed password using bcrypt
        bcrypt.compare(password, storedPassword, (bcryptErr, isMatch) => {
          if (bcryptErr) {
            return res.status(500).json({ error: "Error comparing passwords" });
          }

          if (isMatch) {
            const user = { id: result[0].userId, name: username };
            const accessToken = jwt.sign(user, access_token_secret);
            res.json({ accessToken: accessToken });
            console.log(req.headers);
          } else {
            // Passwords don't match
            res.send(false);
          }
        });
      } else {
        // No user found with the provided username
        return res.json({ success: false, message: "User doesn't exist" });
      }
    }
  );
});

function authenticateToken(req, res, next) {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];
  if (token == null) return res.sendStatus(401);
  jwt.verify(token, access_token_secret, (err, user) => {
    if (err) return res.sendStatus(403);
    req.user = user;
    next();
  });
}

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

app.post("/updateNumber", (req, res) => {
  const q = "INSERT INTO visits (`lol`) VALUES (?)";
  const values = [1];
  db.query(q, [values], (err, data) => {
    if (err) return res.json(err);
    res.send(data);
  });
});

// app.post("/login", function (req, res) {
//   let username = req.body.username;
//   let password = req.body.password;
//   if (username && password) {
//     db.execute(
//       "SELECT * FROM users WHERE username = ?;", [username],
//       (err, result)=> {
//         if (err) {
//             res.send({err: err});
//         }

//         )

//   }
//   if (username && password) {
//     db.query(
//       "SELECT * FROM users WHERE username = ? AND password = ?",
//       [username, md5(password)],
//       function (error, results, fields) {
//         if (error) throw error;
//         if (results.length > 0) {
//           req.session.loggedin = true;
//           req.session.username = username;
//           res.send([req.session.loggedin, req.session.username]);
//         } else {
//           res.send("Incorrect Username and/or Password!");
//         }
//         res.end();
//       }
//     );
//   } else {
//     res.send("Please enter Username and Password!");
//     res.end();
//   }
// });

app.listen(8800, () => {
  console.log("Server running on port 8800");
});
