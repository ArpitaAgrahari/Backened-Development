
//Basics of looping in javaascript
// If condition in javascript

// let a = 20;
// if(a>18){
//     console.log("You are an adult now!!");
// }else{
//     console.log("You are still underage.");
// }



// if(new Date().getHours()<18){
//     console.log("Good Day!!");
// }


//if else condition

// const hour = new Date().getHours();
// let greeting;

// if(hour<18){
//     greeting = "Good Day!!";
// }else{
//     greeting = "Good Evening!!";
// }
// document.getElementById("demo").innerHML = greeting;


//if else if
// let a = 5;
// if(a >5){
//     console.log("Hi!!");
// }else if(a<5){
//     console.log("Hey!!");
// }else {
//     console.log("Hello!!");
// }



//switch statwement
// let a = 3;
// switch(a){
//     case 1:
//         console.log("Hey!! I am 1");
//         break;
//     case 2:
//         console.log("hey!! I am 2");
//         break;
//     case 3:
//         console.log("hey!! I am 3");
//     dafault:
//         console.log("Hey!! I am deafult");
// }


let day = 0;
switch(day){
    case 0:
        console.log("Sunday");
        break;
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
}