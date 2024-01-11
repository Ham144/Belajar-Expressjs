import express from "express"

const router2 = express.Router()

router.get("/All", (req, res) => {
    res.send("return all teachers id and names")
})

router.post("/New", (req, res) => {
    res.send("adding a new teacher")
})

router.put("/update", (req,res) =>{
    res.send("updating the teacher data")
})

router.delete("/remove", (req, res) => {
    res.send("deleting a teachers fropm db")
})

export default router