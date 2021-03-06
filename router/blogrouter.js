const express = require("express");
const { ADDTaskcontroller } = require("../classControllers/classAddblog");
const { TaskController } = require("../classControllers/classController");
const { TaskIdController } = require("../classControllers/idClassController");
const source = process.env.DATA_SOURCE;
const blogRouter = express.Router();

blogRouter
  .route("/")
  .get((req, res, next) => {
    new TaskController(source, req, res, next);
  })
  .post((req, res, next) => {
    new ADDTaskcontroller(source, req, res, next);
  });

blogRouter.route("/:id").get((req, res, next) => {
  new TaskIdController(source, req, res, next);
});

module.exports.blogRouter = blogRouter;
