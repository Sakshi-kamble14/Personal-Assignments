const express=require("express")
const router=express.Router()

router.get('/',(request,response)=>{
    response.send("All orders data");
});

router.post('/',(request,response)=>{
    response.send("orders data added")
});

router.put('/',(request,response)=>{
    response.send("orders data updated")
});

router.delete('/',(request,response)=>{
    response.send("order data deleted")
});

module.exports=router
