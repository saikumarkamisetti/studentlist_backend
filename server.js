const express = require('express')
const mongoose = require('mongoose')
const dotEnv = require('dotenv')
const bodyparser = require('body-parser')
const studentRoutes = require('./router/studentRoutes')
const cors = require('cors');

const app = express()
app.use(cors());
app.use(bodyparser.json())
dotEnv.config()
port = process.env.port || 8000


mongoose.connect(process.env.MONGO)
.then(()=>{
    console.log("Database connected")
    })
    .catch((err)=>{
        console.log("error is there:",err)
    })

app.use('/students',studentRoutes)

app.listen(port,()=>{
    console.log("server created")
})

