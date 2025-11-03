function placeOrder(){
    return new Promise( (resolve,reject) =>{
        resolve("placed");
       console.log("error")
    })
}

function sendNotification(i){
    return new Promise((resolve,reject) =>{
        if(  i === 'undefined')
            resolve("send Notification");
        else 
            reject("send failed")
    })
}

async function createOrder(name){
    try{
        const data = await placeOrder();
        const noti = await sendNotification();
     
      
    }
    catch(er){
        console.log(er);
    }
     

}

createOrder("ragini")