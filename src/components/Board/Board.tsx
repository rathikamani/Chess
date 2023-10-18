
import { useMemo } from "react";
import SquareContainer from "../Square/Square.container";
import './Board.css'
import Piece from "../Piece/Piece";

//imges
import King from '../../../public/assets/bKing.png';
import { useSelector } from "react-redux";
import { selectAllSquares } from "../../features/squares/squares.slice";
import Square from "../Square/Square";

const Board = () => {
    const squares = useSelector(selectAllSquares)    
    const squaresUI = useMemo(()=>{
       return squares.map((square,index)=>{
        return <SquareContainer key={index} {...square}></SquareContainer>
       })
        
    },[squares]);

    
    return <>
    <div className="Board">
        {squaresUI}
    </div>
      </>
};

export default Board;