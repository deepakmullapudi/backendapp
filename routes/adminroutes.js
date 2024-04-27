const admincontroller = require("../controllers/admincontroller")

const express = require("express")
const adminrouter = express.Router()

// admin routes
adminrouter.get("/viewstudents",admincontroller.viewstudents)
adminrouter.post("/checkadminlogin",admincontroller.checkadminlogin)
adminrouter.delete("/deletestudent/:email",admincontroller.deletestudent)
adminrouter.get("/viewfacultys",admincontroller.viewfacultys)
adminrouter.delete("/deletefaculty",admincontroller.deletefaculty)
adminrouter.post("/addcourse",admincontroller.addcourse)
adminrouter.get("/analysis",admincontroller.analysis)
adminrouter.get("/viewfacultyprofile/:email",admincontroller.viewfacultyprofile)
adminrouter.get("/viewstudentprofile/:email",admincontroller.viewstudentprofile)


module.exports = adminrouter