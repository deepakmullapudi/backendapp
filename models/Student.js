const mongoose = require("mongoose")

const studentschema = new mongoose.Schema({
    ID:{
       type:String,
       required:true,
       unique: true
    },
    fullname: {
      type: String,
      required: true
    },
    gender: {
      type: String,
      required:true,
      enum: ['male', 'female', 'others']
    },
    dateofbirth: {
      type: String,
      required: true
    },
    email: {
      type: String,
      required: true,
      unique: true
    },
    password: {
      type: String,
      required: true,
      default:"klef1234"
    },
    location: {
      type: String,
      required: true
    },
    contact: {
        type: String,
        required: true,
        unique:true
      },
  });

const student= mongoose.model('student',studentschema);


module.exports = student;