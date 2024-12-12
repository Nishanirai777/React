 function Messag({useraNme ,textColor}){
    let styles = {color: textColor};
    return (
        <h1 style={styles}> Hello {useraNme} </h1>
    );

  
}
export default Messag;