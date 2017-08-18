const burgersDatabase = require("./connection.js");



//function that displays all burgers in the database
module.exports = function(selectAll){
app.get("/", function(req, res) {
  connection.query("SELECT * FROM burgers;", function(err, data) {
    if (err) throw err;

    // Test it
    // console.log('The solution is: ', data);

    // Test it
    // res.send(data);

    res.render("index", { tasks: data });
  });
});
}

//function that allows user to  add a new burger to the page
module.exports = function(insertOne){
	app.post("/", function(req, res) {
  connection.query("INSERT INTO burgers (burger) VALUES (?)", 
  	[req.body.task], function(err, data) {
    if (err) throw err;

    // Test it
    // console.log('The solution is: ', data);

    // Test it
    // res.send(data);

    res.redirect("/");
  });
});
}


//function that allows user to change a given burger so that it has been devoured
module.exports = function(updateOne){
	app.put("/", function(req, res) {
  connection.query("UPDATE burgers;", function(err, data) {
    if (err) throw err;

    // Test it
    // console.log('The solution is: ', data);

    // Test it
    // res.send(data);

    res.render("index", { tasks: data });
  });
});
}