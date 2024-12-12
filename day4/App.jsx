
import "./app.css";
import Pproduct from "./Pproduct.jsx";
import Messag from "./Messag.jsx";
function App() {
  let options =["hi-tech","durable","fast"];
  //let options2= {a:"hi-tech",b:"durable",c:"fast"};
  return (
  <>
 <Messag useraNme = "nisha" textColor ="maroon" />
 <Messag useraNme= " Beautiful" textColor=" blue"/>
 <Pproduct title= " phone" price =" 40000"   />
 <Pproduct  title ="laptop" price="100000" />
 <Pproduct  title =" pen" price=" 100"/>
  </>
   
  ) ;
}

export default App;
