const Faculty = require("../models/Faculty")
const Course = require("../models/Course")
const Registered=require("../models/Registered")

const insertfaculty = async (request, response) => {
    try 
    {
      const input = request.body;
      const faculty = new Faculty(input);
      await faculty.save();
      response.send('Registered Successfully');
    } 
    catch(e) 
    {
      response.status(500).send(e.message);
    }
  };
  const checkfacultylogin = async (request, response) => 
  {
     try 
     {
       const input = request.body
       const faculty = await Faculty.findOne(input)
       response.json(faculty)
     } 
     catch (error) 
     {
       response.status(500).send(error.message);
     }
   };
   const facultyprofile = async (request, response) => 
   {
      try 
      {
        const email = request.params.email
        const faculty = await Faculty.findOne({email})
        if(faculty)
        {
          response.json(faculty)
        }
        else
        {
          return response.status(200).send('Faculty not found with the provided email id');
        }
        
      } 
      catch (error) 
      {
        response.status(500).send(error.message);
      }
    };
    const updatefacultyprofile = async (request, response) => 
    {
      try 
      {
        const input = request.body;
        const email = input.email; 
        const faculty = await Faculty.findOne({ email });
        if (!faculty) 
        {
          response.status(200).send('Faculty not found with the provided email id');
        }
        for (const key in input) 
        {
          if (key !== 'email' && input[key]) {
            faculty[key] = input[key];
          }
        }
        await faculty.save();
        response.status(200).send('Faculty Profile Updated Successfully');
      } 
      catch (e) 
      {
        response.status(500).send(e.message);
      }
    };
    const addcourse = async (request, response) => {
      try 
      {
        const input = request.body;
        const course = new Course(input);
        await course.save();
        response.send('Registered Successfully');
      } 
      catch(e) 
      {
        response.status(500).send(e.message);
      }
    };
    const viewregistered = async (request, response) => 
    {
       try 
       {
         const  registereds= await Registered.find();
         if(registereds.length==0)
         {
           response.send("DATA NOT FOUND");
         }
         else
         {
           response.json(registereds);
         }
       } 
       catch (error) 
       {
         response.status(500).send(error.message);
       }
     };
  module.exports = {insertfaculty,checkfacultylogin,facultyprofile,updatefacultyprofile,addcourse,viewregistered}