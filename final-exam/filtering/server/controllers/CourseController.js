const { QueryAllCourses } = require("../models/Course")

const getAllCourses = async (req, res) => {
    try {
        const courses = await QueryAllCourses();

        // convert to expected array of objects
        const result = courses.map((item) => {
            return { title: item.course, value: item.course }
        })
        res.json({ courses: result })
    } catch (error) {
        res.status(500).json("Server Error!")
    }
}

module.exports = { getAllCourses }