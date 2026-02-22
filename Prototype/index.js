const obj = {
    name : "Rohit",
    age : 23,
    greet : ()=>{
        return "Hello World!";
    }
}


const obj2 = {
    actor : "Tom"
}

obj2.__proto__ = obj;
console.log(obj.hasOwnProperty("names"));

console.log(obj.__proto__);
console.log(obj2.__proto__);