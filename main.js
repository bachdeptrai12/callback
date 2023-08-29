const callBack =(errr, data)=>{
    if(errr){
        console.log('errr',errr);
    
    }
    if(data){
        console.log('data', data)
    }
}
function getTodo(){
    var request=new XMLHttpRequest();
    request.onreadystatechange=function(){
        if(this.readyState==4&&request.status===200){
            const data=request.responseText;
            callBack(undefined,data)
        }
        if(this.readyState==4&&request.status!==200){
            callBack('errr',undefined);
        }
        
    };
    request.open("GET","http://jsonplaceholder.typicode.com/todos",true);
    request.send();
}
getTodo(callBack);