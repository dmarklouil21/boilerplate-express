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

app.get('/:word/echo', function (req, res) {
  const { word } = req.params; // extract 'word' from URL
  res.json({ echo: word });    // respond with {echo: word}
});

// Example routes
app.get("/json", function (req, res) {
  let responseMessage = "Hello json";

  if (process.env.MESSAGE_STYLE === "uppercase") {
    responseMessage = responseMessage.toUpperCase();
  }

  res.json({ message: responseMessage });
});

module.exports = app;
