import express from "express"
import { AddStudent, Allstudents, UpdateStudents, DeleteStudent} from "../controller/Students.js"
const router = express.Router()

router.get("/allStudents", Allstudents )

router.post("/addStudent", AddStudent)

router.put("/updateStudent", UpdateStudents)

router.delete("/deleteStudent", DeleteStudent)

export default router