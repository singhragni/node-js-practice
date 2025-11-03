function placeOrder(){
    return new Promise( (resolve,reject) =>{
        resolve("placed");
       console.log("error")
    })
}

function sendNotification(i){
    return new Promise((resolve,reject) =>{
        if( typeof i == 'undefined')
            resolve("send Notification");
        else 
            reject("send failed")
    })
}


function createOrder(name){
      const data = placeOrder();
      const noti = sendNotification();
      noti.catch((er) => console.log(er))
      noti.then((data) => console.log(data))

}


createOrder("ragini")