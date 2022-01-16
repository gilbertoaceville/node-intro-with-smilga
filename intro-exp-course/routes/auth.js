const express = require("express");
const router = express.Router();

router.post("/", (req, res) => {
  const { name } = req.body;
  name
    ? res.status(200).send(`Welcome ${name}`)
    : res.status(400).send("Credentials not provided");
});

module.exports = router;
