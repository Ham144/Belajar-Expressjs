import express from "express"

const router = express.Router()

router.get(("/get", (req,res)=>{
    res.send("get all students")
}))

router.post("/post",(req, res) => {
    res.send("create new student")
})

router.put("/put",(req, res) => {
    res.send("update students")
})
router.delete("/delete",(req, res) => {
    res.send("delete student")
})

export default router