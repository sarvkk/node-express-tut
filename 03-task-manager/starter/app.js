const express= require('express')
const app=express()
const tasks=require('./routes/tasks')
const connectDB = require('./db/connect')

require('dotenv').config()
require('./db/connect')

//middelware

app.use(express.static('./public'));
app.use(express.json({success:true}))

//routes
app.get('/hello',(req,res)=>{
    res.send('Task Manager APP')
})
app.use('/api/v1/tasks',tasks)

const port=8000

const start= async()=>{
    try{
        await connectDB(process.env.MONGO_URI)
        app.listen(port,console.log(`Server is listening on port ${port}`))
    }
    catch(error){
    console.log(error)
    }
}

start()
