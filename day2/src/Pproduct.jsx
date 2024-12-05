import "./Pproduct.css";
function Pproduct ( {title ,price }){
return(
 <div className="Pproduct">
    <h1>{title}</h1>
    <h5> price : {price}</h5>
 </div>
);
}
export default Pproduct;
