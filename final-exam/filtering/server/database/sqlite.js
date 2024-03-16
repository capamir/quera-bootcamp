const { Sequelize } = require("sequelize");

const sequelize = new Sequelize({
  dialect: "sqlite",
  storage: "./server/database/db.sqlite",
});

sequelize
  .sync()
  .then(() => {
    testConnection();
  })
  .catch((e) => console.log(e));

const testConnection = async () => {
  try {
    await sequelize.authenticate();
    console.log("db connected!");
  } catch (err) {
    console.error(err);
  }
};

module.exports = sequelize;
