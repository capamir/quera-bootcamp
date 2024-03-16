const { Op } = require("sequelize");
const messages = require("../lang/en/messages");
const {
  QueryAllStudents,
  QueryCreateStudent,
  QueryRemoveStudent,
  QueryGetStudent,
} = require("../models/Student");

const getAllStudents = async (req, res) => {
  try {
    const students = await QueryAllStudents(parseQueryString(req.query));
    return res.json({students});
  } catch (error) {
    return res.status(500).json({ msg: `Server Error!` });
  }
};

const getStudent = async (req, res) => {
  try {
    const { id } = req.params;
    const student = await QueryGetStudent(id);
    if (student) {
      return res.json(student);
    }
    return res.status(404).json({ msg: messages.notFound(id) });
  } catch (error) {
    return res.status(500).json({ msg: `Server Error!` });
  }
};

const createStudent = async (req, res) => {
  try {
    const student = await QueryCreateStudent(req.body);
    return res.json(student);
  } catch (error) {
    return res.status(500).json({ msg: `Server Error!` });
  }
};

const removeStudent = async (req, res) => {
  try {
    const { id } = req.params;
    const status = await QueryRemoveStudent(id);
    if (status) {
      return res.json({ msg: messages.removed(id) });
    }
    return res.status(404).json({ msg: messages.notFound(id) });
  } catch (error) {
    return res.status(500).json({ msg: `Server Error!` });
  }
};

const parseQueryString = (queryArray) => {
  const objKeys = Object.keys(queryArray)
  const result = new Array(objKeys.length).fill().map(() => []);

  objKeys.forEach((element) => {
    const splited = element.split("-");
    const key = splited[0];

    let arrayTypeQuery = null;
    if (key === 'age') {
      arrayTypeQuery = JSON.parse(queryArray[element]);
    }

    result[splited[1] - 1].push({
      [key]: Array.isArray(arrayTypeQuery)
        ? { [Op.between]: [arrayTypeQuery[0], arrayTypeQuery[1]] }
        : queryArray[element],
    });
  });

  return result;
};

module.exports = {
  getAllStudents,
  getStudent,
  createStudent,
  removeStudent,
};
