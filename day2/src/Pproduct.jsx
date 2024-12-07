import "./Pproduct.css";
function Pproduct ( {title ,price ,features }){
return(
 <div className="Pproduct">
    <h1>{title}</h1>
    <h5> price : {price}</h5>
    <p>{features}</p>
   
 </div>
);
}
export default Pproduct;
