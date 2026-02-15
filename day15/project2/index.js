const parent = document.getElementById('parent');


setInterval(function () {
    let date = new Date();
    parent.textContent = date.toLocaleTimeString();
},1000)

