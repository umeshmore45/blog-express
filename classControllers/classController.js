const { dbController } = require("../controller/dbController");
const { fileController } = require("../controller/fileController");

class Taskcontroller {
  constructor(source, req, res, next) {
    switch (source) {
      case "dataBase":
        this.getAlltask = dbController.getAlltask(req, res, next);
        console.log("Using DataBase");
        break;
      case "file":
        this.getAlltask = fileController.getAlltask(req, res, next);
        break;
      default:
        return new Error("Incorrect Source");
    }
  }
}

module.exports.TaskController = Taskcontroller;
