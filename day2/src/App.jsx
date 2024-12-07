
import "./app.css";
import Pproduct from "./Pproduct.jsx";
function App() {
  let options =["hi-tech","durable","fast"];
  //let options2= {a:"hi-tech",b:"durable",c:"fast"};
  return (
  <>
 <Pproduct title= " phone" price =" 40000"  features={options} />
 <Pproduct  title ="laptop" price="100000" />
 <Pproduct  title =" pen" price=" 100"/>
  </>
   
  ) ;
}

export default App;
