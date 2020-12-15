const path = require("path");
const fs = require("fs");
const fileName = path.join(__dirname, "..", "data", "data.json");
const data = JSON.parse(fs.readFileSync(fileName, "utf-8"));

const getTaskById = (req, res, next) => {
  try {
    console.log(req.params.id);
    const findId = data.find((element) => {
      return element.id == req.params.id;
    });
    console.log(findId);
    res.send(findId);
  } catch (err) {
    console.log(err);
    return err;
  }
};

const fileControllerId = {
  getTaskById: getTaskById,
};

module.exports.fileControllerId = fileControllerId;
