const express = require('express');
const morgan = require('morgan');

const app = express()

app.use(morgan("tiny"));
const logger = require('./logger')
const authorize = require('./authorize')
//  req => middleware => res
app.use([logger,authorize]) // since this is at the top, it applies to all req/path below unless placed after a specific req/path (get method) 
// Instead of placing below a route, we can decide which req/paths have access to the middleware
// app.use("/api", [logger, authorize]) // now only routes/methods/req/paths which startsWith "/api" have access to this middleware


// api/home/about/products
app.get('/', (req, res) => {
  res.send('Home')
})
app.get('/about', (req, res) => {
  res.send('About')
})
app.get('/api/products', (req, res) => {
  res.send('Products')
})
app.get('/api/items', (req, res) => {
    console.log(req.user);
  res.send('Items')
})

app.listen(5000, () => {
  console.log('Server is listening on port 5000....')
})
