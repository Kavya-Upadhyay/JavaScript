
// fetch("https://api.github.com/users")
//     .then((res) => {
//         return res.json();
//     })
//     .then((data)=>{
//
//             const parent = document.getElementById("first");
//             for(let i = 0; i<data.length; i++) {
//                 const image = document.createElement("img");
//                 image.src = data[i].avatar_url;
//                 image.style.height = "50%";
//                 image.style.width = "50%";
//                 image.style.padding = "2%"
//                 parent.append(image);
//             }
//
//         }
//     )


function placeOrder(orderDetail) {
    console.log(`Processing the payment of ${orderDetail.cost}`);

    setTimeout(() => {
        console.log("Payment completed and Order is placed");
        orderDetail.paymetStatus = true;  // ✅ Add new data

    }, 3000);
}


function preparingOrder(orderDetail) {
    console.log(`Your Order is getting Prepared ${orderDetail.items}`);

    setTimeout(() => {
        console.log("Your Order is prepared");
        orderDetail.token = "10";  // ✅ Add token number
    }, 3000);
}


function pickupOrder(orderDetail) {
    console.log(`Delivery partner is on the way to pickup the order from ${orderDetail.restaurant_name}`);
    const p1 = new Promise((resolve,reject) => {
        setTimeout(() => {
            console.log("I have picked up your order");
            orderDetail.pickup = true;
            resolve(orderDetail);// ✅ Mark as picked up
        }, 3000);


    })

    return p1;

}

function deleiverOrder(orderDetail) {
    console.log(`I am on my way to deliver the order ${orderDetail.customer_location}`);

    setTimeout(() => {
        console.log("Your order is delivered successfully");
        orderDetail.delivery = true;  // ✅ Final status
    }, 1000);
}






