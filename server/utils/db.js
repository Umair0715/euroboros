const mongoose = require('mongoose');

const DB = process.env.DATABASE_URI;

const connectDB = () => {
   mongoose.connect(DB , {
      useNewUrlParser : true ,
      useUnifiedTopology : true 
   }).then(() => console.log('database connected'))
   .catch(err => console.log('database connected failed' , err))
}

module.exports = connectDB;