function createresult(error,data){
    const result={}
    if(data){
        result.status="success"
        result.data=data
    }
    else{
        result.status="error"
        result.status=error
    }
    return result;
}

module.exports={createresult}