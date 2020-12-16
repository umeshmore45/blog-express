const path = require("path");
const fs = require("fs");
const { AddBlogClass } = require("../module/Addclass");
const fileName = path.join(__dirname, "..", "data", "data.json");
const dataBlog = JSON.parse(fs.readFileSync(fileName, "utf-8"));

const AddBlog = (req, res, next) => {
  let newTask = new AddBlogClass(
    req.body.id,
    req.body.author,
    req.body.title,
    req.body.content,
    req.body.links,
    req.body.imageUrl
  );
  console.log(newTask);
  dataBlog.push(newTask);
  fs.writeFile(fileName, JSON.stringify(dataBlog, null, 2), (err) => {
    if (err) {
      console.log(err);
      return err;
    }
  });
  res.status(202).send("Added Successfullly");
};

const fileControllerAdd = {
  AddBlog: AddBlog,
};

module.exports.fileControllerAdd = fileControllerAdd;
