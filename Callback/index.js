function placeOrder(Callback){

    console.log("Payment is initialized");
    setTimeout(()=>{
        console.log("Payment time completed");
        Callback();
    },3000);
}

function orderpreparation(Callback){
    console.log("Your Order is preparing");

    setTimeout(()=>{
        console.log("Your Order is prepared");
        Callback();
    },3000);
}

function pickup(){
    console.log("Rider is on the way to pickup the order");
    setTimeout(() => {
        console.log("Your Order will be dilivered soon");
    },3000)
}

placeOrder(()=>{
    orderpreparation(()=>{
        pickup();
    })
})