const express = require('express');
const mongoose = require('mongoose');
const cors = require("cors")
const app = express();
app.use(express.json());
app.use(cors());


mongoose.connect("mongodb://localhost:27017/crud")
    .then(() => {
        console.log("database connected successfully");
    })
    .catch((err) => {
        console.log(err);
    })

const empSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    department:
    {
        type: String,
        required: true
    },
    salary: {
        type: Number,
        required: true
    },
    phone: {
        type: String,
        required: true
    }
}, { timestamps: true })

const empModel = mongoose.model("employees", empSchema);




app.get("/employees", (req, res) => {
    empModel.find()
        .then((employees) => {
            console.log("get all employees")
            res.send(employees);
        })
        .catch((err) => {
            console.log(err);
            res.send({ message: "some problem" })
        })

})


app.get("/employees/:id", (req, res) => {
    console.log("single employee");

    empModel.findOne({ _id: req.params.id })
        .then((employee) => {
            console.log("employee with id " + req.params.id)
            res.send(employee);
        })
        .catch((err) => {
            console.log(err)
            res.send({ message: "some problem" });
        })
})


app.post("/employees", (req, res) => {

    let newEmployee = req.body;
    console.log(newEmployee);

    empModel.create(newEmployee)
        .then((employee) => {
            console.log("employee added");
            res.send({ data: employee, message: "employee created successfully" });
        })
        .catch((err) => {
            console.log(err);
            res.send({ message: "some problem" });
        })

})


app.delete("/employee/:id", (req, res) => {
    // console.log("delete request")

    empModel.deleteOne({ _id: req.params.id })
        .then((info) => {
            console.log("employee details deleted successfully")
            res.send({ message: "employee details deleted successfully" })
        })
        .catch((err) => {
            console.log(err);
            res.send({ message: "some problem" })
        })

    console.log(req.params.id);
})


app.put("/employee/:id", (req, res) => {
    // console.log("put request");
    // console.log(req.params.id);
    let updatedEmployee = req.body;
    // console.log(updatedEmployee);


    empModel.updateOne({ _id: req.params.id }, updatedEmployee)
        .then((updateEmployee) => {
            console.log("employee updated successfully")
            res.send({ data: updateEmployee, message: "employee updated successfully" })
        })
        .catch((err) => {
            console.log(err);
            res.send("some problem");
        })

})





















app.listen(8000, () => {
    console.log("Server is up and running at port 8000");
})