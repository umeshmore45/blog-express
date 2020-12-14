const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({});

const Task = mongoose.model("Blog", taskSchema);

module.exports.Task = Task;
