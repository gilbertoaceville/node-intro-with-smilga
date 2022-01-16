const http = require("http");
const _ = require("lodash");

// const server = http.createServer((req, res) => {
//   if (req.url === "/") return res.end("Welcome to the home page");
//   return res.end(`<h1>Route does not exist <a href="/">Back home</a></h1>`);
// });

// server.listen(5000);

// const items = [1, [2, [3, [4, [5]]]]];

// const newItems = _.flattenDeep(items);

// console.log(newItems);


//USE PROMISE FOR THE readFile SINCE IT INVOKES CALLBACK HELL