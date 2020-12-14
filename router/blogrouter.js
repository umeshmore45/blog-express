const express = require("express");
const { TaskController } = require("../classControllers/classController");
const source = process.env.DATA_SOURCE;
const blogRouter = express.Router();

blogRouter.route("/").get((req, res, next) => {
  new TaskController(source, req, res, next);
});

module.exports.blogRouter = blogRouter;
