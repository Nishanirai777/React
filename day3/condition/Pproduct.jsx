import "./Pproduct.css";
function Pproduct ( {title ,price ,features }){
   let styles ={backgroundColor:  price > 30000 ? "blue" :""};
 

   return(
      <div className="Pproduct" style={styles}>
         <h1>{title}</h1>
         <h5> price : {price}</h5>
        { price>30000? <p>"discount of 5%"</p>: <a href="/get discount"></a>}
        
      </div>
     );
 } 

export default Pproduct;