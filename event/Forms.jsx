
function handleForms(event){
    event.preventDefault();
    console.log("forms was submited");
}




export default function Forms(){
    return(
    <form>
        <input placeholder="Write somethings"/>
        <button onClick={handleForms}>submit</button>
    </form>
    );
   
    
}