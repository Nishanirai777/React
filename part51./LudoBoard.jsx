import { useState } from "react";




export default function LudoBoard() {
    let [Moves, setMoves] = useState({ blue: 0, red: 0, marron: 0, yellow: 0, green: 0 });

    let updateBlue = () => {

        //console.log(`moves.blue=${Moves.blue}`);
        setMoves((prevMoves) => {
            return { ...prevMoves, blue: prevMoves.blue + 1 };

        });
    };
    let updateRed = () => {

        // console.log(`moves.blue=${Moves.blue}`);
        setMoves((prevMoves) => {
            return { ...prevMoves, red: prevMoves.red + 1 };

        });
    };
    let updateMarron = () => {
        setMoves((prevMoves) => {
            return { ...prevMoves, marron: prevMoves.marron + 1 };
        });
    };
    let updateYellow = () => {

        //console.log(`moves.blue=${Moves.blue}`);
        setMoves((prevMoves) => {
            return { ...prevMoves, yellow: prevMoves.yellow + 1 };

        });
    };
    let updateGreen = () => {

        //console.log(`moves.blue=${Moves.blue}`);
        setMoves((prevMoves) => {
            return { ...prevMoves, green: prevMoves.green + 1 };

        });
    };

    return (



        <div className="board">
            <p> Game start</p>
            <p>Blue moves= {Moves.blue}</p>
            <button style={{ backgroundColor: "blue" }} onClick={updateBlue}>+1</button>

            <p>red moves= {Moves.red}</p>
            <button style={{ backgroundColor: "red", color: "black" }} onClick={updateRed}>+1</button>
            <p>maroon moves= {Moves.marron}</p>
            <button style={{ backgroundColor: "marron", color: "black" }} onClick={updateMarron}>+1</button>

            <p>  yellow moves= {Moves.yellow}</p>
            <button style={{ backgroundColor: "yellow", color: "black" }} onClick={updateYellow}>+1</button>
            <p> green moves= {Moves.green}</p>
            <button style={{ backgroundColor: "green", color: "black" }} onClick={updateGreen}>+1</button>
        </div>

    );
}
