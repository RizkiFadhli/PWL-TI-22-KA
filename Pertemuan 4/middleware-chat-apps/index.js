require("dotenv").config();
const express = require("express");
const app = express();

const db_mysql = require("./models/");
const userRoute = require("./routers/userRouter");

const port = process.env.API_PORT;

app.use(express.json());
app.use("/api/user", userRoute);

db_mysql.sequelize.sync();
app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Server app listening on 
http://localhost:${port}`);
});
