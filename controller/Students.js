
const Allstudents = (req, res) =>{
    res.send("show all students")
}

const AddStudent = (req, res) =>{
    res.send("add new student")
}

const UpdateStudents = (req,res) =>{
    res.send("update students")
}

const DeleteStudent = (req,res) =>{
    res.send("remove a student")
}

export {Allstudents, AddStudent, UpdateStudents, DeleteStudent}
