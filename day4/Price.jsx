export default function Price({ oldPrice ,newPrice}){
   let oldStyles ={
    textDecorationline :" line-through",

   };
   let newStyles={
    fontWeight: "bold",
   };
   let styles ={
    backgroundColor : "#e0367",
   };

    return (
        <div>
            <span style={oldStyles}>{oldPrice}</span>
            &nbsp; &nbsp;&nbsp;
            <span style={newStyles}>{newPrice} </span>
        </div>
    );
}