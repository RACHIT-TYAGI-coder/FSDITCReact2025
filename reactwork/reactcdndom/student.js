const parent = document.getElementById('container');
console.log(parent);

const root = ReactDOM.createRoot(parent);
const h2 = React.createElement("h2", { style: {backgroundColor:'brown',color: 'white',textAlign:'center'}}, "Profile Page");
const myname = <h3 style={{color:'brown'}}>Name:Rachit</h3>
const mybranch = <h3 style={{color:'brown'}}>Branch:IT</h3>
const mycollege = <h3 style={{color:'brown'}}>College:ABES Engineering College</h3>
const myroll = <h3 style={{color:'brown'}}>Roll No.:2300320130184</h3>
const myadm = <h3 style={{color:'brown'}}>Admission No.:2023b0131052</h3>


root.render(
    <div style={{border:'2px solid black', width:'400px',margin:'auto', marginTop:'50px', padding:'20px',boxShadow:'5px 5px 10px grey'}}>
        {h2}
        {myname}
        {mybranch}
        {mycollege}
        {myroll}
        {myadm}
    </div>
);