const mongoose = require("mongoose");
const TodoSchema = new mongoose.Schema({
  todoTitle: {
    type: String,
    required: true,
  },
  todoDescription: {
    type: String,
    required: true,
  },
});

module.exports = new mongoose.model("Todo", TodoSchema);
