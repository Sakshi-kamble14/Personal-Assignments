const express=require('express')
const router=express.Router()
const pool=require("../db/pool")
const result=require("../utills/result")


router.get('/',(request,response)=>{
    const sql=`Select *from student`
    pool.query(sql,(error,data)=>{
        response.send(result.createResult(error,data))
    })
});

router.post("/", (request, response) => {
    // Destructing
    const { name, email, course } = request.body
    const sql = `INSERT INTO student(name,email,course) VALUES(?,?,?)`
    pool.query(sql, [name, email, course], (error, data) => {
        response.send(result.createResult(error, data))
    })

});

// Todo
router.put('/',(request,response)=>{
    // Destructing
    const{course,id}=request.body
    const sql=`Update student set course=? where id=?`
    pool.query(sql,[course,id],(error,data)=>{
        response.send(result.createResult(error,data))
    })
});

router.delete('/',(request,response)=>{
    // Destructing
    const {id} =request.body
    const sql=`Delete from student where id=?`
    pool.query(sql,[id],(error,data)=>{
        response.send(result.createResult(error,data))
    })
})

module.exports=router