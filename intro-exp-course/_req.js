const express = require("express");
const app = express();

const { products } = require("../node-express-course/02-express-tutorial/data");

app.get("/", (req, res) => {
  res.send("<h1>Home</h1><br><a href='/api/products'>Products</a>");
});

//basics for sending across json data - use res.json
app.get("/api/products", (req, res) => {
  //return only specifics - i.e remove desc property from obj
  const newProducts = products.map((product) => {
    const { id, name, image, desc } = product;
    return { id, name, image };
  });
  res.json(newProducts); //desc property is not sent
  // res.json(products); //sends the whole products
});

//get a single product
app.get("/api/products/:id", (req, res) => {
  // console.log(req.params);
  const { id } = req.params;
  //using the "Number" keyword cause id is a number in the json but params is returning it as a string
  const singleProduct = products.find((product) => product.id === Number(id));

  !singleProduct
    ? res.status(404).send("Product does not exist")
    : res.json(singleProduct);
});

//using query params
app.get("/api/v1/query", (req, res) => {
  // console.log(req.query);
//   api/v1/query?search=albany&&limit=1
  const { search, limit } = req.query;

  //copy array
  let sortedProducts = [...products];

  if (search) {
    sortedProducts = sortedProducts.filter((product) =>
      product.name.startsWith(search)
    );
  }

  if (limit) {
    sortedProducts = sortedProducts.slice(0, limit);
  }

  sortedProducts.length
    ? res.status(200).json(sortedProducts)
    : res.status(200).json({ msg: "success", data: [] });
});

app.listen(5000, () => console.log(`Hit up port ${5000}`));
