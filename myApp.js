let express = require('express');
let app = express();

console.log("Hello World");

// Normal usage
app.use(express.static(__dirname + "/public"));

// Assets at the /public route
app.use("/public", express.static(__dirname + "/public"));

app.get("/", function (req, res) {
  let absolutePath = __dirname + '/views/index.html';
  res.sendFile(absolutePath);
});
































 module.exports = app;
