


console.log(global);

global.setTimeout(()=>{
    console.log("Timed out!!");
},3000);

const int = setInterval(()=>{
    console.log("Interval out!!");
},3000);