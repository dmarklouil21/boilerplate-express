require('dotenv').config()

let express = require('express');
let app = express();

console.log("Hello World");

// Normal usage
// app.use(express.static(__dirname + "/public"));

// Assets at the /public route
// app.use("/public", express.static(__dirname + "/public"));

let responseMessage = "Hello json";
  
if (process.env.MESSAGE_STYLE === "uppercase") {
  responseMessage = responseMessage.toUpperCase();
}

app.get("/json", function (req, res) {
  // let absolutePath = __dirname + '/views/index.html';
  // res.sendFile(absolutePath);
  console.log(responseMessage);
  res.json({ "message": responseMessage });
});
































 module.exports = app;
