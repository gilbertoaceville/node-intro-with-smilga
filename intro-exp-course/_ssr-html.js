const express = require('express');
const path = require("path");

const app = express();

// {
    //instead of going this route, add the index.html to the public folder since it is also a static file
    // app.get("/", (req,res)=>{
    // res.sendFile(path.join(__dirname, "../node-express-course/02-express-tutorial/navbar-app/index.html"))
    // })
    
    //Better approach to use
    //serving html,css and js files through the server (SSR FOR HTML, CSS AND JS)
    app.use(express.static("../node-express-course/02-express-tutorial/navbar-app/public"));
// }


app.all("*", (req,res)=>{
    res.status(404).send("<h1>Resource not found </h1>")
})

app.listen(5000, ()=>{
    console.log(`Hit port up at ${5000}`);
})