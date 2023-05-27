const Todo = require("../models/Todo");

const createTodo = async (req, res) => {
    const todo = await Todo.create(req.body);
    res.status(201).json({todo});
};

const getTodo = async (req, res) => {
    const allTodo = await Todo.find({})
    res.status(200).json({todoList:allTodo})
};

module.exports = { createTodo, getTodo };
