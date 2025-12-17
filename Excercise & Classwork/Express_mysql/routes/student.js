const express=require('express')
const router=express.Router()
const pool=require("../db/pool")
const result=require("../utills/result")


router.get('/',(request,response)=>{
    const sql=`Select *from student`
    pool.query(sql,(error,data)=>{
        response.send(result.createResult(error,data))
    })
})

router.post('/',(request,response)=>{
    // Destructing
    const {name,email,course}=request.body
    const sql=`Insert into students(name,email,course) Values(?,?,?)`
    pool.query(sql,[name,email,course],(error,data)=>{
        response.send(result.createResult(error,data))
    })
})

// Todo
router.put()
router.delete()

module.exports=router