const Student = require("../models/Student")
const Faculty = require("../models/Faculty")
const Course = require("../models/Course")
const Admin=require("../models/Admin");

 const viewstudents = async (request, response) => 
 {
    try 
    {
      const students= await Student.find();
      if(students.length==0)
      {
        response.send("DATA NOT FOUND");
      }
      else
      {
        response.json(students);
      }
    } 
    catch (error) 
    {
      response.status(500).send(error.message);
    }
  };
  const deletestudent = async (request, response) => 
 {
    try 
    {
      const email = request.params.email
      const student= await Student.findOne({"email":email})
      if(student!=null)
      {
        await Student.deleteOne({"email":email})
        response.send("Deleted Successfully")
      }
      else
      {
        response.send("Email ID Not Found")
      }

    } 
    catch (error) 
    {
      response.status(500).send(error.message);
    }
  };
  const viewfacultys = async (request, response) => 
  {
     try 
     {
       const facultys= await Faculty.find();
       if(facultys.length==0)
       {
         response.send("DATA NOT FOUND");
       }
       else
       {
         response.json(facultys);
       }
     } 
     catch (error) 
     {
       response.status(500).send(error.message);
     }
   };
   
   const deletefaculty= async (request, response) => 
  {
     try 
     {
       const email = request.params.email
       const faculty= await Faculty.findOne({"email":email})
       if(faculty!=null)
       {
         await Faculty.deleteOne({"email":email})
         response.send("Deleted Successfully")
       }
       else
       {
         response.send("Email ID Not Found")
       }
 
     } 
     catch (error) 
     {
       response.status(500).send(error.message);
     }
   };

  const checkadminlogin = async (request, response) => 
  {
     try 
     {
       const input = request.body
       console.log(input)
       const admin = await Admin.findOne(input)
       response.json(admin)
     } 
     catch (error) 
     {
       response.status(500).send(error.message);
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
  const analysis = async (req, res) => {
    try 
    {
        const facultyCount = await Faculty.countDocuments();
        const studentCount = await Student.countDocuments();
        res.json({facultyCount,studentCount});
    } 
    catch (error) 
    {
        res.status(500).send(error.message);
    }
  };
  const viewfacultyprofile = async (request, response) => 
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
   const viewstudentprofile = async (request, response) => 
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
   const changeadminpwd = async (request, response) => {
    try 
    {
      const { username, oldpassword, newpassword } = request.body;
      const admin = await Admin.findOne({ username, password: oldpassword });
      
       if (!admin) 
      {
        response.status(400).send('Invalid Old Password');
      }
      else
      {
          if(oldpassword==newpassword)
          {
            response.status(400).send('Both Passwords are Same');
          }
          else
          {
            await Admin.updateOne({username},{ $set: { password: newpassword } });
             response.json('Password Updated Successfully');
          }
        
      }
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

  module.exports = {viewstudents,deletestudent,viewfacultys,deletefaculty,checkadminlogin,addcourse,viewfacultyprofile,analysis,viewstudentprofile,changeadminpwd,viewcourses}