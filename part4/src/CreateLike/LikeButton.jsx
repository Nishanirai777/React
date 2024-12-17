



import { useActionState, useState } from "react";

export default function LikeButton(){
    let [isLiked , setisLiked]= useState(false);
    let [clicks, setClicks]= useState(0);
   let toggleLike =()=>{
    setisLiked(!isLiked);
    console.log(!isLiked);
    setClicks(clicks +1);
   };
   let LikeStyle ={color:"red"};
   
    return(
        <div>
            <p>Click= {clicks}</p>
            <p onClick={toggleLike}>
                {isLiked ? (
                    <i class="fa-solid fa-heart" style={LikeStyle}></i>
                ):( <i className="fa-regular fa-heart"></i>)}
               </p>
        </div>
    );
}