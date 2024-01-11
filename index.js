//buat directory
//terminal vscode: npm init
//npm install express
//package.json: type module
//create express instance :
import express from "express"
import products from "./products.js"
const app = express()

app.get("/home", (req, res)=>{
    res.json(products)
})

app.route("/")
.get((req,res) => console.log("get all students"))
.post((req,res) => console.log("add new student"))
.put((req,res) => console.log(`update students`))
.delete((req,res) => console.log(`delete students`))

app.listen(8000, () =>{console.log(`server is ready`)})