const express=require("express")
const app=express()
const PORT=5000

const studentRouter=require('./routes/student')

// Middle ware 
app.use('/student',studentRouter)

app.listen(PORT,'localhost',()=>{
    console.log("Server started at port",PORT);
});