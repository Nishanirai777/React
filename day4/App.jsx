
import "./app.css";
import Pproduct from "./Pproduct.jsx";

function App() {
  let styles={
    display: "flex",
    flexWrap:"wrap",
    justifyContent:"center",
   alignItems: "center"
  };
  return (
  <div style={styles}>
 <Pproduct title="Logitech MX Master" idx={0}/>
 <Pproduct title="Apple Pencil (2nd Gen)" idx={1}/>
 <Pproduct title="Zebronics Zeb-Transformer" idx={2}/>
 <Pproduct title="Petronics Toad 23" idx={3}/>
  </div>
   
  ) ;
}

export default App;
