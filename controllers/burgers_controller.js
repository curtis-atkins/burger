// enable the express package for this file
const express = require("express");

//create a variable that will handle an express router
const router = express.Router();

// Import the model (burger.js) to use its database functions.
const burger = require("../models/burger.js");

// Create all our routes and set up logic within those routes where required.

 router.get("/", (req, res) =>{
   res.redirect('/burgers');
});


//populate page with burger names from the mySQL burgers_db table
router.get("/", (req, res) =>{
	burger.selectAll(function(data){
    var hbsObject = {
      burgers:data
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});

//Create a new burger
router.post("/", (req, res) => {
  burger.insertOne(
    ["burger_name", "devoured"], 
    [req.body.burger_name, req.body.devoured], 
    function() {
    res.redirect("/");
  });
});


//Make a change to a burger name
router.put("/:id", (req, res) => {
  const condition = "id = " + req.params.id;

  console.log("condition", condition);

  burger.updateOne({
    devoured: req.body.devoured
  }, condition, function() {
    res.redirect("/");
  });
});


//Delete a burger
router.delete("/:id", (req, res) =>{
  const condition = "id = " + req.params.id;

  burger.deleteOne(condition, function() {
    res.redirect("/");
  });
});

// Export routes for server.js to use.
module.exports = router;