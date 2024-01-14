


console.log(global);

global.setTimeout(()=>{
    console.log("Timed out!!");
    clearInterval(int);
},3000);

const int = setInterval(()=>{
    console.log("Interval out!!");
},3000);