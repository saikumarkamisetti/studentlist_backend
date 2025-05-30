const Student = require('../models/Student')

const createStudent = async(req,res)=>{
    try{
        const {id, name, place, phone } = req.body

        const student = new Student({
            id,
            name,
            place,
            phone
        })
        await student.save()
        res.status(201).json(student)
    }catch(err){
        console.log("error is there",err)
        res.status(500).json({message:'server error'})
    }
}

const getStudent = async (req,res)=>{
    try{
        const students =await Student.find()
        res.status(201).json(students)
    }catch(err){
        console.log('error is there ',err)
        res.status(501).json({message:'server error'})
    }
}

const deleteStudent = async (req,res) =>{
    try{
        const deleteStudent = await Student.findByIdAndDelete(req.params.id)
        res.status(204).send()
    }catch(err){
        console.log("there is an error ",err)
        res.status(500).json({message :"server error"})
    }
}

const singleStudent = async (req,res)=>{
    try{
        const student = await Student.findById(req.params.id)
        res.status(200).json(student)
    }catch(error) {
        console.log("there is an error",err)
        res.status(501).json({message:"server error"})
    }
}

const updateStudent = async (req,res) =>{
    try{
        const {id,name,place,phone} = req.body

        const myStudent = await Student.findByIdAndUpdate(
            req.params.id,{id,name,place,phone}
        )
        res.status(200).json(myStudent)
    }catch(err) {
        console.log('there is an error',err)
        res.status(500).json({message:'server error'})
    }
}

module.exports = {createStudent, getStudent , deleteStudent, singleStudent, updateStudent}