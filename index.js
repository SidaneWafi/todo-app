// const express = require("express");
// const { Timestamp } = require("mongodb");
// const mongoose= require("mongoose");
// const path =require("path");
// const bodyParser=require("body-parser") ;
//  const moment =require("moment");

// const connectMongodb =require("./init/mongodb");
// const Todo =require("./models/todo")
// const todoRoute =require("./routes/todo");
const app =require("./app");
const PORT= process.env.PORT || 8000 ;
//init app
// const app = express();
// const connectionUrl="mongodb://localhost:27017/todoDb";
// mongoose.connect(connectionUrl)
// .then(()=> console.log("DataBase connection successful"))
// .catch((error)=>console.log(error.message));
//mongoDb connection
// connectMongodb();
//,required :true,unique:true ,maxlength:20 ,minlength :3 ,trim:true
// const todoSchema = mongoose.Schema({title:{type :String,required :true }  ,desc :String}
//     ,{timestamps:true});
//     const Todo =mongoose.model("todo",todoSchema)
//view engine
// app.set("view engine","ejs");
// app.use(express.static(path.join(__dirname,"public")))
// app.use(bodyParser.urlencoded({extended:true}));
// app.use("/",todoRoute);
//listen to server
app.listen(PORT,()=>{
    console.log(`Server is runing on Port ${PORT}`);
});