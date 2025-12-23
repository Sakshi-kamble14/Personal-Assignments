const express=require("express")
const router=express.Router()
const result=require("../utils/result")
const pool=require("../db/pool")
const cryptojs=require('crypto-js')


router.post('/signup',(request,response)=>{
    const {name,email,password,mobile}=request.body
    const sql= `Insert into users (name,email,password,mobile) values(?,?,?,?)`
    const hasedPassword=cryptojs.SHA256(password).toString()
    pool.query(sql,[name,email,hasedPassword,mobile],(error,data)=>{
        response.send(result.createresult(error,data))
    });
})
// Query parameters
router.get('/',(request,response)=>{
    const {email}=request.query
    const sql=`Select * from users where email = ?`
    pool.query(sql,[email],(error,data)=>{
        response.send(result.createresult(error,data))
    })
})

// Request Parameter

router.delete(':/uid',(request,response)=>{
    const uid=request.params.uid
    const sql='delete from users where uid=?'
    pool.query(sql,[uid],(error,data)=>{
        response.send(result.createresult(error,data))
    })
})
module.exports=router