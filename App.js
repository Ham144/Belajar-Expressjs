import express from "express"
// import students from "./Students.js"
// import teachers from "./Teachers.js"
// import router from "./routes/Students.js"
// import products from "./products.js"
const app = express()
// app.use("/students", students)
// app.use("/teachers", teachers)

// app.get("/shop/category/:productName/:price", (req, res) =>{
//     const {productName, price} = req.params()
//     res.send(`product name = ${productName}, \n price =  ${price}`)
// })

// app.param("id", (req,res,next,id) =>{
//     console.log(`id: ${id},`)
//     next()
// })

// app.get("user/:id", (req,res) =>{
//     console.log(`this is user id path`)
//     res.send("response OK")
// })
// app.use("/Options", router)
// app.get("/shop" ,(req,res) =>{
//     const {category, id} = req.query
//     res.send(`the category you pick is ${category} and the id = ${id}`)
    
// }) 

app.get("/home", (req,res) => {
    res.send("tes")
})

app.listen(8000, ()=> console.log("server is up "))