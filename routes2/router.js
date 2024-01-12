import { aboutController } from "../controller2/aboutController.js"
import express from 'express'
import { homeController } from "../controller2/homeController.js"
const route = express.Router()

route.get("/home", homeController)
route.get("/about", aboutController)

export default route;