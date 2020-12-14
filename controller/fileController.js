const path = require("path");
const fs = require("fs");
const fileName = path.join(__dirname, "..", "data", "data.json");
const data = JSON.parse(fs.readFileSync(fileName, "utf-8"));

const getAlltask = (req, res, next) => {
  res.send(data);
};

const fileController = {
  getAlltask: getAlltask,
};

module.exports.fileController = fileController;
