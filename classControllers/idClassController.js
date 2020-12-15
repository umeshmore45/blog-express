const { dbControllerId } = require("../controller/dbControllerId");
const { fileControllerId } = require("../controller/fileControllerId");
class TaskIdController {
  constructor(source, req, res, next) {
    switch (source) {
      case "dataBase":
        this.getTaskById = dbControllerId.getTaskById(req, res, next);
        console.log("Using DataBase");
        break;
      case "file":
        this.getTaskById = fileControllerId.getTaskById(req, res, next);
        break;
      default:
        return new Error("Incorrect Source");
    }
  }
}

module.exports.TaskIdController = TaskIdController;
