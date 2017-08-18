//require server file which holds the express package
const server = require("../server.js");

// enable the express package for this file
const app = server.express();

const burger = require("../models.burger.js");