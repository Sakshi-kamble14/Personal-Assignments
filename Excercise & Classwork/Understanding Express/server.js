const express=require("express")

// Object of the express
const app=express()
const PORT=4500

const userRouter=require("./routes/users")
const productRouter=require("./routes/products")
const orderRouter=require("./routes//orders")

// middleware 
app.use("/users",userRouter)
app.use("/products",productRouter)
app.use("/orders",orderRouter)


app.listen(PORT,'localhost',()=>{
    console.log("Server started at port ",PORT)
})