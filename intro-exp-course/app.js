const express = require("express");
const morgan = require("morgan");

//initiate express;
const app = express();

const people = require('./routes/people');
const auth = require('./routes/auth');

//MIDDLEWARE
app.use(morgan("tiny"));
app.use(express.urlencoded({ extended: false })); //body parser - parses form data to req.body (mostly html - form action attribute)
app.use(express.json()); //handles json/form data sent through javascript http request
//html static assets
app.use(express.static("./methods-public"));

//ROUTES
app.use('/api/people', people);
app.use("/login", auth);

//server port
app.listen(5000, () => {
  console.log("Server is listening on port 5000....");
});
