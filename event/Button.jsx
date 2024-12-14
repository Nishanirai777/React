function printHello(){
   console.log("hello!");
}
function printBye(){
    console.log("bye beautifule");
}
function doublel(){
    console.log("nisha");
}


export default function Button(){
    return(
<div>
    <button onClick={printHello}>Click me!</button>
    <button onClick={printBye}>press</button>
    <p onMouseOver={printHello}> hello</p>
    <button onDoubleClick={doublel}>you double clicke me</button>
</div>
    );
}