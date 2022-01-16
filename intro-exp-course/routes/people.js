const express = require("express");
const router = express.Router();
const {
  getPeople,
  createPerson,
  createPersonPostman,
  updatePerson,
  deletePerson,
} = require("../controllers/people");

router.get("/", getPeople);
router.post("/", createPerson);
router.post("/postman", createPersonPostman);
router.put("/:id", updatePerson);
router.delete("/:id", deletePerson);

//SAME AS
//Known as chaining

// router.route("/").get(getPeople);
// router.route("/").post(createPerson);
// router.route("/postman").post(createPersonPostman);

/**
 * BOTH USES THE SAME ROUTE - :id
 */
// router.put("/:id").put(updatePerson).delete(deletePerson);

module.exports = router;