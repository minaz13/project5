import React,{useState} from "react";
import { FullName } from "./components/FullName";
import "./components/common.css"
import {Salslip} from "./components/Salslip"

function App() {
  const [basic,setBasic]=useState(0);
  const [fname,setFname]=useState("");
  const [lname,setLname]=useState("");
  const [empid,setEmpid]=useState("");
  const [depart,setDepart]=useState("");
  return (
<div className="main">
  <input type="text"  placeholder="Enter First Name" onChange={(e)=>setFname(e.target.value)}/>
  <input type="text"  placeholder="Enter Last Name" onChange={(e)=>setLname(e.target.value)}/>
  <input type="number"  placeholder="Enter your Basic Salary" onChange={(e)=> setBasic(Number(e.target.value))}/>
  <input type="number"  placeholder="Enter Employee id" onChange={(e)=>setEmpid(e.target.value)}/>
  <input type="text" placeholder="Enter your Department" onChange={(e)=>setDepart(e.target.value)}/>
  <FullName  fname= {fname} lname={lname} empid={empid} depart={depart}/>
  <Salslip basic={basic}/>
</div>
  );
}

export default App;
