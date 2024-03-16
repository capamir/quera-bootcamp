const express = require("express");
const cors = require("cors");
const studentRoutes = require("./routes/Student");
const courseRouter = require('./routes/Course')

const app = express();
const port = 5000;

app.use(express.json());
app.use(cors());
app.use("/students", studentRoutes);
app.use("/courses", courseRouter);

app.listen(port, () => {
  console.log("server is running ...");
});