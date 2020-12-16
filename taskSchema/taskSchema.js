const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({
  id: {
    type: String,
  },
  author: {
    type: String,
  },
  title: {
    type: String,
  },
  content: {
    type: String,
  },
  imageUrl: {
    type: String,
  },
});

const Task = mongoose.model("Blog", taskSchema);

module.exports.Task = Task;
