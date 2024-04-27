const mongoose = require("mongoose")

const registeredrschema = new mongoose.Schema({
    courseno:{
       type:String,
       required:true,
    },
    coursename: {
      type: String,
      required: true
    },
    modes: {
      type: String,
      required:true,
      enum: ['Regular', 'Advanced']
    },
    l: {
      type: String,
      required:true,
      enum: ['s11', 's12', 's21','s22','s31','s32']
    },
    t: {
      type: String,
      required:true,
      enum: ['s11', 's12', 's21','s22','s31','s32']
    },
    p: {
      type: String,
      required:true,
      enum: ['s11', 's12', 's21','s22','s31','s32']
    },
    s: {
      type: String,
      required:true,
      enum: ['s11', 's12', 's21','s22','s31','s32']
    },
  });
  
  const registered= mongoose.model('registered',registeredrschema);

  module.exports = registered;
  