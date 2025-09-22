// console.log("hello world")
// var a=10;
// console.log("a="+a)

// var a=20;
// console.log(a);

// var a=50;
// if(a>10){
//     var a=1000;
// }
// else{
//     console.log("hii")
// }
// console.log("hiii"+a);

//normal function

// function fun(msg){
//     return "heyyyy.."+msg;
//     console.log("Hello")
// }
// const data=fun("meowwww");
// console.log(data);


// const data=function(a,b){
//     return a*b
// }

// const data = ()=>{
//     console.log("Heyyy... using arrow function")
// }
// data("in react developemnet");

// const data=msg=>msg;
// const output=data("gretting of the day");
// console.log(output);


//IIFE
// (function(){
//     console.log("Welcome to MERN Session");
// })();


// function greet(msg="Java"){
//     console.log(msg+ "is a good language");

// } 
// greet("python");


function Selectlanguage(lang){
    let result;
    if(lang=="java"){
        function cCompiler(){
            return "using c compiler"
        }
        result=cCompiler();
    }
    else{
        result="No complier found";
    }
    return result;
}