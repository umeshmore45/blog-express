const mongoose = require("mongoose");
const { Task } = require("../taskSchema/taskSchema");

const getAlltask = (req, res, next) => {
  Task.find({})
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      return console.log(err);
    });
};

const dbController = {
  getAlltask: getAlltask,
};

module.exports.dbController = dbController;
