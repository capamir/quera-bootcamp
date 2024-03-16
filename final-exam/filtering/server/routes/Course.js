const express = require("express");
const router = express.Router();

const {getAllCourses} = require("../controllers/CourseController")

router.get('/', getAllCourses);

module.exports = router