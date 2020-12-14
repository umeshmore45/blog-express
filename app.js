const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
dotenv.config({ path: "./config.env" });
const source = process.env.DATA_SOURCE;
const { TaskController } = require("./classControllers/classController");
const { blogRouter } = require("./router/blogrouter");

dotenv.config({ path: "./config.env" });

const app = express();
app.use(cors());
app.use("/blog", blogRouter);

app.listen(process.env.PORT, () => {
  console.log(`On Port ${process.env.PORT}`);
});
