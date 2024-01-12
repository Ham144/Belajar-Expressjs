//buat directory
//terminal vscode: npm init
//npm install express
//package.json: type module
//create express instance :
//==================================
// import products from "./products.js"
// import showCredenstials from "./logs/credentials.js"
import express from "express"
import path from "path"
const app = express()

app.use(express.static("./public"))
app.get("/" ,(req,res) =>{
    res.sendFile(path.join(process.cwd(), "./public.index.html"))
})

app.get("/about", (req,res) => {
    res.send("h1>ini adalah about page")
})

app.route("/" )
.get(("/home", (req,res) => console.log(`Show all of them`)))
.post(("/create", (req,res) => console.log(`add new`)))
.put(("/update", (req,res) => console.log(`update data`)))
.delete(("/delete", (req,res) => console.log(`delete data`)))











app.listen(8000, () =>{console.log(`server is ready`)})