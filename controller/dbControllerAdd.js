const { Task } = require("../taskSchema/taskSchema");

const AddBlog = async (req, res, next) => {
  try {
    let newTask = await new Task({
      id: req.body.id,
      author: req.body.author,
      title: req.body.title,
      content: req.body.content,
      links: req.body.links,
      imageUrl: req.body.imageUrl,
    });
    newTask.save().then((data) => {
      console.log(data);
    });
    res.send("created Successfully");
  } catch (err) {
    return console.log(err);
  }
};

const dbControllerAdd = {
  AddBlog: AddBlog,
};

module.exports.dbControllerAdd = dbControllerAdd;
