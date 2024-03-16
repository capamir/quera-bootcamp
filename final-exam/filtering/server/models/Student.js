const { DataTypes, Model, STRING, Op } = require("sequelize");
const sequelize = require("../database/sqlite");

class Student extends Model {}

Student.init(
  {
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    age: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    gender: {
      type: DataTypes.ENUM("male", "female"),
      allowNull: false,
    },
    course: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    location: {
      type: STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: "students",
  }
);

const QueryAllStudents = async (queryArray) => {
  const queries = queryArray.map((query) => {
    return { [Op.and]: query };
  });

  try {
    return await Student.findAll(
      queries.length
        ? {
            where: {
              [Op.or]: queries,
            },
          }
        : {}
    );
  } catch (error) {
    return error;
  }
};

const QueryGetStudent = async (id) => {
  try {
    return await Student.findByPk(id);
  } catch (error) {
    return error;
  }
};

const QueryCreateStudent = async ({
  firstName,
  lastName,
  age,
  gender,
  course,
  location,
}) => {
  try {
    return await Student.create({
      firstName,
      lastName,
      age,
      gender,
      course,
      location,
    });
  } catch (error) {
    return error;
  }
};

const QueryRemoveStudent = async (id) => {
  try {
    return await Student.destroy({ where: { id } });
  } catch (error) {
    return error;
  }
};

module.exports = {
  QueryAllStudents,
  QueryGetStudent,
  QueryCreateStudent,
  QueryRemoveStudent,
  Student
};
