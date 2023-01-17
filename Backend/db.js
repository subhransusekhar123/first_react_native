const mongoose = require('mongoose');
require("dotenv").config();
const url = process.env.mongo_url;

const connectDB = async() =>{
  mongoose.set('strictQuery',false)
   await mongoose.connect(url,{useNewUrlParser: true})
   .then((res)=>{console.log('connected')})
   .catch(err=>console.log(err))
}


const dataSchema = mongoose.Schema({
    firstName:{
        type:String,
        required:true
    },
    middleName:{
        type:String,
        required:true
    },
    lastName:{
      type:String,
      require:true
    }
});

const Model = mongoose.model('data',dataSchema);

module.exports = {
    connectDB:connectDB,
    Model:Model
}