import { useState } from "react";




export default function Form(){
   
   
   
   let [fullName ,setfullName]= useState("nisha");
   let handleNameChange = (event)=>{
setfullName(event.target.value)
   };
    return(
        <form>
            <label htmlFor="username">Full Name

            </label>
            <input placeholder="Enter the full Name.." type="text" value={fullName} onChange={handleNameChange} id="username"/>
            <button>Submit</button>
        </form>
    );
}