const mongoose = require("mongoose");
const { Task } = require("../taskSchema/taskSchema");

const getAlltask = (req, res, next) => {
  mongoose.connect(
    process.env.DATA_URL,
    { useUnifiedTopology: true, useNewUrlParser: true },
    (err, connection) => {
      if (err) {
        return console.log(err);
      }
      console.log("conntected");

      Task.find({})
        .then((data) => {
          res.send(data);
        })
        .catch((err) => {
          return console.log(err);
        });
    }
  );
};

const dbController = {
  getAlltask: getAlltask,
};

module.exports.dbController = dbController;
