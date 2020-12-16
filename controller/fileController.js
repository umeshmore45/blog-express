const path = require("path");
const fs = require("fs");
const fileName = path.join(__dirname, "..", "data", "data.json");
const dataBlog = JSON.parse(fs.readFileSync(fileName, "utf-8"));

const getAlltask = (req, res, next) => {
  try {
    const findBlog = dataBlog.filter((user) => {
      return Object.keys(req.query).every((property) => {
        return user[property] == req.query[property];
      });
    });

    if (!findBlog) {
      return res.status(404).send("Not Found");
    }
    res.send(findBlog);
  } catch (err) {
    console.log(err);
    return err;
  }
};

const fileController = {
  getAlltask: getAlltask,
};

module.exports.fileController = fileController;
