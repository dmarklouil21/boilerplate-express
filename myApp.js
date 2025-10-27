require('dotenv').config();

let express = require('express');
let app = express();

app.use(function (req, res, next) {
  console.log(`${req.method} ${req.path} - ${req.ip}`);
  next(); // pass control to the next middleware or route handler
});

app.get('/now', 
  function (req, res, next) {
    req.time = new Date().toString(); // attach current time to request
    next(); // pass control to the next handler
  },
  function (req, res) {
    res.json({ time: req.time }); // send JSON response
  }
);

// Example routes
app.get("/json", function (req, res) {
  let responseMessage = "Hello json";

  if (process.env.MESSAGE_STYLE === "uppercase") {
    responseMessage = responseMessage.toUpperCase();
  }

  res.json({ message: responseMessage });
});

module.exports = app;
