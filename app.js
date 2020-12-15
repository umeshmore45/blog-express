const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");
dotenv.config({ path: "./config.env" });
const source = process.env.DATA_SOURCE;
const { TaskController } = require("./classControllers/classController");
const { blogRouter } = require("./router/blogrouter");
dotenv.config({ path: "./config.env" });

mongoose
  .connect(process.env.DATA_URL, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useCreateIndex: true,
  })
  .then(() => {
    const app = express();
    app.use(cors());
    app.use("/blog", blogRouter);
    app.listen(process.env.PORT, () => {
      console.log(`On Port ${process.env.PORT}`);
    });
  })
  .catch((err) => {
    console.log(err);
    return err;
  });
