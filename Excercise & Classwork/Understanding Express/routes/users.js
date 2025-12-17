const express=require("express")
const router=express.Router()

router.get('/',(request,response)=>{
    response.send("All users data");
});

router.post('/',(request,response)=>{
    response.send("Users data added")
});

router.put('/',(request,response)=>{
    response.send("Users data updated")
});

router.delete('/',(request,response)=>{
    response.send("User data deleted")
});
module.exports=router