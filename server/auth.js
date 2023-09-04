let express = require("express");
let cookieParser = require("cookie-parser");
const { createConnection } = require("mysql2");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
//setup express app
var result = [];
const app = express();
const db = createConnection({
    host: "mysql.biomath.dreamhosters.com",
    user: "biomath",
    password: "AroraLagu2023",
    database: "biomath",
});
const cors = require("cors");

app.use(cookieParser());
app.use(express.json());
const corsOptions = {
    origin: 'http://localhost:3000', // Replace with your client's origin
    credentials: true, // This is important for cookies
    methods: ['GET', 'PUT', 'POST', 'DELETE', 'HEAD']
};
app.use(cors(corsOptions));
// app.use(express.urlencoded({ extended: true }));
  
access_token_secret =
  "594c4835eb5397e3068ab9fb451db0f1a7247ecedbe0bd9baabe7baca4961cdf0a51935366aa82bd2ed0a8518e05a858726e98f0fbcfcb6585243d976f52ae72";

//basic route for homepage
app.get("/", (req, res) => {
   res.send("Express app is created successfully, and you are on homepage");
});

app.post("/login", (req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    const queryPromise = new Promise((resolve, reject) => {
        db.query("SELECT * FROM users WHERE username = ?;", [username], (err, results) => {
            if (err) {
                reject(err);
            } else {
                resolve(results);
            }
        });
    });
    const loginPromise = queryPromise
        .then((results) => {
            const result = results[0]; // Assuming you want the first row
            
            return new Promise((resolve, reject) => {
                bcrypt.compare(password, result.password, (err, isMatch) => {
                    if (err) {
                        reject(err);
                    } else {
                        resolve({ isMatch, userId: result.userId, username: result.username });
                    }
                });
            });
        })
        .catch((err) => {
            console.error(err);
            res.status(500).send("Error occurred");
    });
    loginPromise
        .then(({ isMatch, userId, username }) => {
            if (isMatch) {
                const user = { id: userId, name: username };
                const accessToken = jwt.sign(user, access_token_secret);
                res.cookie("jwt", accessToken, { httpOnly: true });
                res.send(true)
            } else {
                console.log("Password not matching!");
                res.send(false)
            }
        })
        .catch((err) => {
            console.error(err);
            res.status(500).send("Error occurred");
        });
});

app.get("/fetchCurrentUser", authenticateToken, (req, res) => {
    res.send(req.user);
});

app.get("/isLoggedIn", (req, res) => {
    if (req.cookies.hasOwnProperty("jwt")) {
        res.send(true)
    } else {
        res.send(false)
    }
});

function authenticateToken(req, res, next) {
    const token = req.cookies.jwt;
    if (token == null) return false;
    jwt.verify(token, access_token_secret, (err, user) => {
      if (err) return res.sendStatus(403);
      req.user = user;
      next();
    });
  }

// // route to get car object from cookies
// app.get("/fetchCurrentUser", (req, res) => {
//     console.log("fetch", req.cookies)
//     res.send(req.cookies)
// });

// route to clear car object from cookies
app.get("/clear", (req, res) => {
   res.clearCookie("jwt", { path: '/' });
   res.send(true);
});

//server listens to port 3000
app.listen(8001, (err) => {
   if (err) throw err;
   console.log("listening on port 8001");
});