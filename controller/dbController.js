const mongoose = require("mongoose");
const { Task } = require("../taskSchema/taskSchema");

const getAlltask = (req, res, next) => {
  try {
    Task.find(req.query)
      .then((data) => {
        console.log(data);
        res.send(data);
      })
      .catch((err) => {
        console.log(err);
        return err;
      });
  } catch (err) {
    console.log(err);
    return err;
  }
};

const dbController = {
  getAlltask: getAlltask,
};

module.exports.dbController = dbController;
