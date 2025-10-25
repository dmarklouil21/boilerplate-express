let express = require('express');
let app = express();

console.log("Hello World");

app.get("/", function (req, res) {

  // Serve static files from the "public" folder
  let publicAsset = __dirname + '/public';
  app.use(express.static(publicAsset));

  let absolutePath = __dirname + '/views/index.html';
  res.sendFile(absolutePath);
});
































 module.exports = app;
