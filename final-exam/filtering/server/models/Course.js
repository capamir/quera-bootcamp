const { Student } = require("./Student")

const QueryAllCourses = async() => {
    try {
        return await Student.findAll({
            attributes: ['course'],
            group: ['course']
        })
    } catch (error) {
        return error
    }
}

module.exports = { QueryAllCourses }