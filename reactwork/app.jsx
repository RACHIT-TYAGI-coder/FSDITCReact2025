const container=document.getElementById('container');

// console.log(container)
const root=ReactDOM.createRoot(container);
const h2=React.createElement("h2",{style:{backgroundColor:'blue',color:'black',textAlign:'center',fontSize:'35px'}},"WEB DEVELOPMENT PROFILE");


const pic=React.createElement("img",{src:"https://www.flexjobs.com/blog/wp-content/uploads/2022/06/07130847/How-to-Put-Your-Work-Samples-Online.jpg", alt:"vikash singh",width:"200px",height:"200px"});
const h3=React.createElement("h3",{},"Vikash singh");

const li1=React.createElement("li",{},"Java");
const li2=React.createElement("li",{},"Python");
const li3=React.createElement("li",{},"React");

const ul=React.createElement("ul",{style:{background:'cyan'}},li1,li2,li3);
const div1 =React.createElement("div",{style:{display:'flex',justifyContent: 'space-evenly',color:'black'}},pic,h3);

//final wrapper to hold all the elements
const wrapper=React.createElement('div',{},h2,div1,ul,);
// root.render(wrapper); 

const heading=<h2>welcome to react development</h2>
const li4=<li>Angular</li>;
const li5=<li>Node js</li>;
const ul1=<ul>{li4} {li5}</ul>


const container1=(<div>{heading},{ul1},{wrapper}</div>)
root.render(container1);