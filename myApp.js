let express = require('express');
let app = express();

console.log("Hello World");

app.get("/", function (req, res) {

  // Serve static files from the "public" folder
  app.use(express.static(__dirname + '/public'));
  let absolutePath = __dirname + '/views/index.html';
  res.sendFile(absolutePath);
});
































 module.exports = app;
