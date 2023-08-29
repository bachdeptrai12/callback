const callBack =(errr, data)=>{
    if(errr){
        console.log('errr',errr);
    
    }
    if(data){
        console.log('data', data)
    }
}
function getTodo(id, callBack){
    return new Promise((resolve,reject)=>{
        var request=new XMLHttpRequest();
        request.onreadystatechange=function(){
            if(this.readyState==4&&request.status===200){
                const data=JSON.parse(request.responseText)
                resolve(data)
            }
            if(this.readyState==4&&request.status!==200){
                reject('something wrongs',+id)
            }
            
        };
        request.open("GET","http://jsonplaceholder.typicode.com/todos",true);
        request.send();
    })
   

}
getTodo(1)
    .then(data1=>{
        console.log('data1:',data1)
        return getTodo(2);
    })
    .then(data2=>{
        console.log('data2:',data2)
        return getTodo(3);
    })
    .catch(errr=>{
        console.log("errrr:",errr)
    })
//promises----------------
// const promisesexp = ()  =>  {
//     return new Promise((resolve,reject)=>{

//     });
// }
// promisesexp().then(data=>{
//     console.log(data)
// });