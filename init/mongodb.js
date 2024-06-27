const mongoose=require("mongoose");
// const connectionUrl="mongodb://localhost:27017/todoDb";
const connectMongodb =async() =>{
    try{
      await mongoose.connect(process.env.CONNECTION_URL);
      console.log("connection dataBase successful");
    }catch(error){
        console.log(error.message)
        process.exit(1);

    }
};
module.exports =connectMongodb ;