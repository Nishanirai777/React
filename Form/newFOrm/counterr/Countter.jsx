import { useEffect, useState } from "react";

 


 export default function Countter(){
    let [countx, setcountx]=useState(0);
    let [county ,setcounty]=useState(0);


    
    let incCountx =()=>{
        setcountx((currCount)=> currCount +1);
    };
    let incCounty =()=>{
        setcounty((currCount)=>currCount +1);
    };
    useEffect (function printSomething (){
console.log("this is a side-effect os use effect");
    },[countx]);
    
    return (
        <div>
            <h3>Count= {countx}</h3>
            <button onClick={incCountx}>+1</button>
            <h3>Count= {county}</h3>
            <button onClick={incCounty}>+1</button>
        </div>
     );
 }