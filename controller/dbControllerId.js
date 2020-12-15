const { Task } = require("../taskSchema/taskSchema");

const getTaskById = async (req, res, next) => {
  try {
    const task = await Task.findOne({ id: req.params.id });
    console.log(task);
    res.send(task);
  } catch (err) {
    console.log(err);
    return err;
  }
};

const dbControllerId = {
  getTaskById: getTaskById,
};

module.exports.dbControllerId = dbControllerId;
