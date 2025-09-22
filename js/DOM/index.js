// const div=document.getElementsByTagName('div');

// div[0].innerText="Hello World";
// div[0].style.color='red';
// div[0].style.backgroundColor='cyan';
// console.log(div);
const container=document.getElementsByClassName('container');

// container[0].innerHTML='<h2 style=color:red>Hello user</h2>';
// console.dir(container);
const h2=document.createElement('h2');
h2.innerText="Abes Engineering College";
h2.style.color = "white";
h2.style.backgroundColor = "brown";
console.log(h2);
container[0].appendChild(h2);
// const img=document.createElement('img');
// img.src='WhatsApp Image 2025-09-12 at 12.52.29_884232f4.jpg';
// img.setAttribute('height','200px');
// img.setAttribute('width','200px');
// console.log(img);
// container[0].appendChild(img);
const button=document.getElementById('btn');
console.log(button);

function msg(){
    document.getElementById('disp').innerHTML="<h>Loading image...</h>"
    setTimeout(()=>{
const img=document.createElement('img');
img.src='https://imgv3.fotor.com/images/blog-cover-image/a-shadow-of-a-boy-carrying-the-camera-with-red-sky-behind.jpg';
img.setAttribute('height','200px');
img.setAttribute('width','200px');
console.log(img);
document.getElementById('disp').innerHTML="<h2>Welcome to Abes Engineering College</h2>";
container[0].appendChild(img);
},2000);
   
    //alert("hii.. I am using Dom");
}
button.addEventListener('click',msg);