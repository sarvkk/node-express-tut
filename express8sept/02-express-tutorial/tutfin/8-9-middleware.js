const express =require('express');
const app = express();
const logger= require('./logger')
const authorize=require('./authorize')

//app.use([logger,authorize])
app.use(express.static('./public'))

app.get('/',(req,res)=>{
   
    res.send("Home Page")
})
app.get('/about',(req,res)=>{
    res.send("About Page")
})

app.get('/api/products',(req,res)=>{
   
    res.send("Products")
})
app.get('/api/items',[logger,authorize],(req,res)=>{
    console.log(req.user)
    res.send("Items")
})

app.listen(8000,()=>{
    console.log("listening at port 8000.")
})