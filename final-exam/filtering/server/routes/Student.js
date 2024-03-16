const express = require("express");
const router = express.Router();
const {
  getAllStudents,
  getStudent,
  createStudent,
  removeStudent,
} = require("../controllers/StudentContoller");

router.get("/", getAllStudents);
router.get("/:id", getStudent);
router.post("/", createStudent);
router.delete("/:id", removeStudent);

module.exports = router;
