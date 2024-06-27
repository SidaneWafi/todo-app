const moment =require("moment");
const Todo =require("../models/todo")
const homeController =async(req,res,next)=>{
    try{
        const todos = await Todo.find({}).sort({createdAt:-1 });
        res.locals.moment=moment ;
     res.render("index",{title:"List todo",todos:todos});
    }catch(error){
        res.status(500).json({message:error.message});
    }
};
const addTodoController =(req,res,next)=>{
    try{
     res.render("newTodo",{title:"New Todo"})
    }catch(error){
        res.status(500).json({message:error.message});
    }
}
const deleteTodoController =(req,res,next)=>{
    try{
        const {id} =req.query ;
     res.render("deleteTodo",{title:"Delete todo",id})
    }catch(error){
        res.status(500).json({message:error.message});
    }
}

const addTodopostController =async(req,res,next)=>{
    try{

        const {title,desc}= req.body ;
        if(!title){
            return res.status(400).json({message:"Title is required"});
        }
        const newTodo = new Todo({title,desc})
        await newTodo.save();
        res.redirect("/");

    }catch(error){
        res.status(500).json({message:error.message});
    }
}
// const updateTodoController =async(req,res,next)=>{
//     try{
//         const { id } = req.query;
//         const { title, desc } = req.body;

//         const todo = await Todo.findById(id);
//         if (!todo) {
//             return res.status(404).send('Todo not found');
//         }
//      res.render("updateTodo",{title:"Update todo ",todo});
//      console.log(todo);
//     }catch(error){
//         res.status(500).json({message:error.message});
//     }
// }
const updateTodoController = async (req, res, next) => {
    try {
        const { id } = req.query;
        const todo = await Todo.findById(id);
        if (!todo) {
            return res.status(404).send('Todo not found');
        }
        res.render('updateTodo', { title: 'Update todo', todo });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
const updateTodoControllerPost = async(req,res,next) => {
    try{
     const {id} =req.params ;
     const {title,desc}=req.body ;
     if (!id) {
        return res.status(400).send('ID is missing');
    }
    if (!title || !desc) {
        return res.status(400).send('Title or description is missing');
    }
     const todo = await Todo.findById(id);
     if (!todo) {
        return res.status(404).send('Todo not found');
    }
    todo.title =title ;
    todo.desc =desc ;
    await todo.save();
    res.redirect("/");
    }catch(error){
        res.status(500).json({ message: error.message });
    }
}
const deleteTodoControllerConfirm = async(req,res,next) => {
    try{
     const {id,confirm}=req.query ;
     if(confirm== "yes"){
        await Todo.findByIdAndDelete(id);
     }
     res.redirect("/");
    }catch(error){
        res.status(500).json({ message: error.message });
    }
}
module.exports ={homeController,addTodoController ,deleteTodoController ,addTodopostController ,updateTodoController ,updateTodoControllerPost ,deleteTodoControllerConfirm}