const facultycontroller = require("../controllers/facultycontroller")

const express = require("express")
const facultyrouter = express.Router()

// faculty routes
facultyrouter.post("/insertfaculty",facultycontroller.insertfaculty)
facultyrouter.post("/checkfacultylogin",facultycontroller.checkfacultylogin)
facultyrouter.get("/facultyprofile/:email",facultycontroller.facultyprofile)
facultyrouter.put("/updatefacultyprofile",facultycontroller.updatefacultyprofile)
facultyrouter.get("/viewregistered",facultycontroller.viewregistered)

module.exports = facultyrouter