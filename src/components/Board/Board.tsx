
import { useMemo } from "react";
import Square from "../Square/Square";
import './Board.css'
import Piece from "../Piece/Piece";

//imges
import King from '../../../public/assets/bKing.png';
import { useSelector } from "react-redux";
import { selectAllSquares } from "../../features/squares/squares.slice";

const Board = () => {
    const squares = useSelector(selectAllSquares)
    const squaresUI = useMemo(()=>{
       return squares.map((square)=>{
        return <Square key={square.id} {...square}></Square>
       })
        
    },[squares]);

    
    return <>
    <div className="Board">
        {squaresUI}
    </div>
      </>
};

export default Board;