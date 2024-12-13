import "./Pproduct.css";
import Price from "./Price";
function Pproduct ( {title ,idx }){
   //let styles ={backgroundColor:  price > 30000 ? "blue" :""};
 let oldPrice =["12,567","44,67","34,67","677"];
 let newPrices =["6,777","4,666","456"];
 let description =[
   "8,000 DIP",
   "instuitive surface",
   "designed for ipad pro",
   "wireless",
 ];

   return(
      <div className="Pproduct">
         <h4>{title}</h4>
         <p>{description[idx]}</p>
         <Price oldPrice = {oldPrice[idx]} newPrice= {newPrices[idx]}/>
         
      
</div>      
     );
 } 

export default Pproduct;