const Todo =require("../models/todo");
const express =require("express");
const router =express.Router();
const moment =require("moment");
const todo =require("../controllers/todo");
router.get("/",todo.homeController)
router.get("/add-todo",todo.addTodoController)
router.get("/update-todo",todo.updateTodoController)
router.get("/delete-todo",todo.deleteTodoController);
router.post("/add-todo",todo.addTodopostController);
router.get("/confirm-delete",todo.deleteTodoControllerConfirm);
router.post("/update-todo/:id", todo.updateTodoControllerPost);


module.exports=router ;