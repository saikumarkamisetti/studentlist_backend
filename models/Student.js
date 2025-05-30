const mongoose = require('mongoose')
const { type } = require('os')

const studentSchema = new mongoose.Schema({
    id:{
        type:Number,
        require:true
    },
    name:{
        type:String,
        require:true
    },
    place:{
        type:String,
        require:true
    },
    phone:{
        type:Number,
        require:true
    }
})
module.exports = mongoose.model('Student',studentSchema)