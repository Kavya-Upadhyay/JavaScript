const parent = document.getElementById("parent");

setInterval(()=>{

    let date = Date.now();
    console.log(date);

    let targetDate = new Date(2029,1,6).getTime();
    console.log(targetDate);

    let diff = targetDate - date;

    let Days = Math.floor(diff/(1000*60*60*24));
    diff = diff%(1000*60*60*24);

    let hours = Math.floor(diff/(1000*60*60));
    diff = diff%(1000*60*60);

    let minutes = Math.floor(diff/(1000*60));
    diff = diff%(1000*60);

    let seconds = Math.floor(diff/(1000));

    parent.innerText = `${Days}: Days |   ${hours}: Hours |  ${minutes}: Minutes  | ${seconds}: Seconds`;
},1000);