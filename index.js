require("dotenv").config();
const express = require("express");
const bodyParser  = require("body-parser");
const app = express();
const cors = require("cors")

app.use(cors())

app.use(bodyParser.json());;

const employeeRouter  = require("./api/employees/employee.router")
app.use("/api/employee", employeeRouter)

app.listen(process.env.APP_PORT, ()=>{
    console.log(`Server is perfectly running on ${process.env.APP_PORT}`)
})
module.exports = app