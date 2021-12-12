const mongoose=require('mongoose');


mongoose.connect('mongodb://localhost:27017/TaskDB',{useNewUrlParser:true},(err)=>{
    if(err){
        console.error(err);
    }
    else {
        console.log("MongoDB Connection successful")
    }
})

require('./task.model')