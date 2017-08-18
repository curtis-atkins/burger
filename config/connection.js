const server = require("../server.js");

// Dependencies
const mysql = require("mysql");

const app = server.express();
//connect to localhost port
const PORT = process.env.PORT || 3000;
// MySQL DB Connection Information (remember to change this with our specific credentials)
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Hypeman28!!",
  database: "burgers_db"
});

// Initiate MySQL Connection.
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});


app.listen(PORT, function(){
  console.log("Listening on PORT " + PORT);
});

module.exports = app;