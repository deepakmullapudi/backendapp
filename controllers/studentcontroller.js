const Student = require("../models/Student")
const Course = require("../models/Course")
const Registered = require("../models/Registered")

const insertstudent = async (request, response) => {
    try 
    {
      const input = request.body;
      const student = new Student(input);
      await student.save();
      response.send('Registered Successfully');
    } 
    catch(e) 
    {
      response.status(500).send(e.message);
    }
  };
  const checkstudentlogin = async (request, response) => 
  {
     try 
     {
       const input = request.body
       const student = await Student.findOne(input)
       response.json(student)
     } 
     catch (error) 
     {
       response.status(500).send(error.message);
     }
   };
   const viewcourses = async (request, response) => 
 {
    try 
    {
      const courses= await Course.find();
      if(courses.length==0)
      {
        response.send("DATA NOT FOUND");
      }
      else
      {
        response.json(courses);
      }
    } 
    catch (error) 
    {
      response.status(500).send(error.message);
    }
  };
  const insertcourse = async (request, response) => {
    try 
    {
      const input = request.body;
      const registered = new Registered(input);
      await registered.save();
      response.status(200).send('Registered Successfully');
    } 
    catch(e) 
    {
      console.log(e.message)
      response.status(500).send(e.message);
    }
  };
  const studentprofile = async (request, response) => 
   {
      try 
      {
        const email = request.params.email
        const student = await Student.findOne({email})
        if(student)
        {
          response.json(student)
        }
        else
        {
          return response.status(200).send('Student not found with the provided email id');
        }
        
      } 
      catch (error) 
      {
        response.status(500).send(error.message);
      }
    };
    const updatestudentprofile = async (request, response) => 
  {
    try 
    {
      const input = request.body;
      const email = input.email; 
      const student = await Student.findOne({ email });
      if (!student) 
      {
        response.status(200).send('Student not found with the provided email id');
      }
      for (const key in input) 
      {
        if (key !== 'email' && input[key]) {
          student[key] = input[key];
        }
      }
      await student.save();
      response.status(200).send('Student Profile Updated Successfully');
    } 
    catch (e) 
    {
      response.status(500).send(e.message);
    }
  };

  module.exports = {insertstudent,checkstudentlogin,viewcourses,insertcourse,studentprofile,updatestudentprofile}