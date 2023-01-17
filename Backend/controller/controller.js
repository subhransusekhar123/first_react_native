const { Model } = require("../db");


const getController = async(req,res) => {
  try{
    const allTodo = await Model.find();
    res.send(allTodo)
  }catch(err){
    console.error(err);
  }
}
const postController = async(req,res) => {
  try{
    const { firstName, middleName, lastName } = req.body;
    console.log(req.body)
    const newTodo = Model({
      firstName:firstName,
      middleName:middleName,
      lastName:lastName
    })
  let savedData = await newTodo.save()
  res.send(savedData);
  }catch(err){
    console.error(err);
  }
}

const putController = async(req,res) => {
  console.log("hello")
  try{
    const { firstName, middleName, lastName } = req.body;
    const { id } = req.params;
    const updatedTodo = {
      firstName:firstName,
      middleName:middleName,
      lastName:lastName
    }
    console.log(updatedTodo)
    const updateTodo = await Model.updateOne({_id:req.params.id},{$set:{...updatedTodo}})
    res.send(updateTodo);
  }catch(err){
    console.error(err)
  }
}

const deleteController = async(req,res) => {
  try{
    const {id} = req.params;
    const todo = await Model.deleteOne({_id:id})
    res.send(todo)
  }catch(err){
    console.error(err);
  }
}

module.exports = {
  getController,
  postController,
  putController,
  deleteController
}