const express=require("express")
const app=express()
const PORT=5000

const studentRouter=require('./routes/student')

// Middle ware 
app.use(express.json())

app.use('/student',studentRouter)

// http://localhost:5000/student
app.listen(PORT,()=>{
    console.log("Server started at port",PORT);
});