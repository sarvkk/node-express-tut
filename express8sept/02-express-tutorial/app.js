const express = require('express')
const app = express()
const people=require('./routes/people')
const auth= require('./routes/auth')

app.use(express.static('./methods-public'))

app.use(express.urlencoded({extend:false}))

app.use(express.json())

app.use('/api/people',people)

app.use('/login',auth)

app.listen('8000',(req,res)=>{
    console.log('listening on port 8000')
})