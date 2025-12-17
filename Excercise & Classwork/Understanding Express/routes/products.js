const express=require("express")
const router=express.Router()

router.get('/',(request,response)=>{
    response.send("All products data");
});

router.post('/',(request,response)=>{
    response.send("products data added")
});

router.put('/',(request,response)=>{
    response.send("products data updated")
});

router.delete('/',(request,response)=>{
    response.send("product data deleted")
});
module.exports=router