const studentcontroller = require("../controllers/studentcontroller")

const express = require("express")
const studentrouter = express.Router()

// student routes
studentrouter.post("/insertstudent",studentcontroller.insertstudent)
studentrouter.post("/checkstudentlogin",studentcontroller.checkstudentlogin)
studentrouter.get("/viewcourses",studentcontroller.viewcourses)
studentrouter.post("/insertcourse",studentcontroller.insertcourse)
studentrouter.get("/studentprofile/:email",studentcontroller.studentprofile)
studentrouter.put("/updatestudentprofile",studentcontroller.updatestudentprofile)


module.exports = studentrouter