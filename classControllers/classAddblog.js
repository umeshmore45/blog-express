const { dbControllerAdd } = require("../controller/dbControllerAdd");
const { fileControllerAdd } = require("../controller/fileControllerAdd");

class ADDTaskcontroller {
  constructor(source, req, res, next) {
    switch (source) {
      case "dataBase":
        this.AddAlltask = dbControllerAdd.AddBlog(req, res, next);
        console.log("Using DataBase");
        break;
      case "file":
        this.AddAlltask = fileControllerAdd.AddBlog(req, res, next);
        break;
      default:
        return new Error("Incorrect Source");
    }
  }
}

module.exports.ADDTaskcontroller = ADDTaskcontroller;
