import { useState } from "react";




export default function Form() {



    let [fullName, setfullName] = useState("nisha");
    let [username ,setusername] =useState("");
    
    let handleNameChange = (event) => {
        setfullName(event.target.value) };
        let  handleUsername =(event)=>{
            setusername(event.target.value);
        };

    return (
        <form>
            <label htmlFor="username">Full Name

            </label>
            <input placeholder="Enter the full Name.." type="text" value={fullName} onChange={handleNameChange} id="username" />

            <br></br>
             <br></br>
            <label htmlFor="username">UserName</label>
            <input type="text" placeholder="inter username" value={username}
            onChange={handleUsername}
            id="username"/>

            <button>Submit</button>
        </form>
    );
}