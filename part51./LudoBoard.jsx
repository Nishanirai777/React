import { useState } from "react";




export default function LudoBoard() {
    let [Moves, setMoves] = useState({ blue: 0, rd: 0, yello: 0, green: 0 });

    return (



        <div className="board">
            <p> Game start</p>
            <p>Blue moves= {Moves.blue}</p>
            <button style={{ backgroundColor: "blue" }}>+1</button>


        </div>

    );
}