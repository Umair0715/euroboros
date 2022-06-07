const mongoose = require('mongoose');

const emailSchema = new mongoose.Schema({
   email : {
      type : String , 
      required : [true , 'Email is required'] ,
      unique: true 
   }, 
   name : {
      type: String ,
   },
   description: {
      type : Array , 
      required : true 
   } ,
   attachements: {
      type : Array ,
   }
} , { timestamps : true })

const Email = mongoose.model('Email' , emailSchema);
module.exports = Email ;