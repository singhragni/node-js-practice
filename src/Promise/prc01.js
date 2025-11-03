// this is how we are handling async operations - without Promise- 

function placeOrder(){
    return "placed";
}

function sendNotification(){
    return "send notification."
}
function createOrder( name){
    const placedOrderData = placeOrder();
    console.log(`${name}  ${placedOrderData}`);
    return sendNotification();
}

const notification =createOrder("ragini");
console.log(notification);


//--------Now how to handle with Promise - 
// Promise - 

