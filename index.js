require("dotenv").config();
const express = require("express");
const bodyParser  = require("body-parser");
const app = express();
const cors = require("cors")
const dbConnection = require("./config/database")

app.use(cors())

app.use(bodyParser.json());;

// const employeeRouter  = require("./api/employees/employee.router")
// app.use("/api/employee", employeeRouter)
app.post("/users",(req, res) =>{
    const firstName = req.body.firstName;
  const lastName = req.body.lastName;
  const email = req.body.email;
  const phoneNumber = req.body.phoneNumber;
  const password = req.body.password;
 //encrypting password
 dbConnection.query(
    `insert into employees(firstName, lastName, email, phoneNumber, password) values(?,?,?,?,?)`,
    [firstName, lastName, email, phoneNumber, password],
    (err, result) => {
      if (err) {
        console.log(err);
        return res.status(500).json({
          success: 0,
          message: "Database Connection Error",
        });
      }
      return res.status(200).json({
        success: 1,
        data: result
    })

    }
  );
});


app.listen(process.env.APP_PORT, ()=>{
    console.log(`Server is perfectly running on ${process.env.APP_PORT}`)
})
module.exports = app;