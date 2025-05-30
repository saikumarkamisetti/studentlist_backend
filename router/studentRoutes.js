const Student = require('../models/Student')
const studentController = require('../controller/studentController')
const express = require('express')
const router = express.Router()


router.post('/add-stu',studentController.createStudent)
router.get('/get-stus',studentController.getStudent)
router.delete('/del-stu/:id',studentController.deleteStudent)
router.get('/get-stu/:id',studentController.singleStudent)
router.put('/put-stu/:id',studentController.updateStudent)
module.exports = router

