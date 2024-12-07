import "./Pproduct.css";
function Pproduct ( {title ,price ,features }){
 if(price>30000){

   return(
      <div className="Pproduct">
         <h1>{title}</h1>
         <h5> price : {price}</h5>
         <p>Discount 5%</p>
        
      </div>
     );
 } else{
   
   return(
      <div className="Pproduct">
         <h1>{title}</h1>
         <h5> price : {price}</h5>
         
        
      </div>
     );
 }
}
export default Pproduct;