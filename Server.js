const express = require("express")
const mongoogse = require("mongoose")
const cors = require("cors")

//MongoDB Compass Connection
const dburl = "mongodb://localhost:27017/sdpproject"
mongoogse.connect(dburl).then(() => {
      console.log("Connected to DB Successfully")
}).catch((err) => {
      console.log(err.message)
});
/*
//MongoDB Atlas Connection
const dburl = "mongodb+srv://admin:admin@cluster0.6zgynls.mongodb.net/sdpproject?retryWrites=true&w=majority"
mongoogse.connect(dburl).then(() => {
      console.log("Connected to MongoDB Atlas Successfully")
}).catch((err) => {
      console.log(err.message)
});
*/
require("mongoose")
const app= express()
app.use(express.json()) // to parse JSON data
app.use(cors())

const adminrouter = require("./routes/adminroutes")
const studentrouter = require("./routes/studentroutes")
const facultyrouter= require("./routes/facultyroutes")

app.use("",adminrouter)//It includes admin routes
app.use("",studentrouter)//It includes student routes
app.use("",facultyrouter)//It includes faculty routes


const port="2004"
app.listen(port,()=>{
    console.log(`server is running at port ${port}`)
})
