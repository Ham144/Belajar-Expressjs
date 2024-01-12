//buat directory
//terminal vscode: npm init
//npm install express
//package.json: type module
//create express instance :
//==================================
// import products from "./products.js"
// import showCredenstials from "./logs/credentials.js"
import express from 'express'
import {join} from "path"
import route from "./routes2/router.js"
const app = express()
app.set('view engine','ejs')

// app.use(express.static(join(process.cwd(), "public")))

app.use("/", route)


app.listen("8000", ()=> console.log(`server is ready`))