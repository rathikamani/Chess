
import { useMemo } from "react";
import SquareContainer from "../Square/Square.container";
import './Board.css'
import Piece from "../Piece/Piece";

//imges
import { useSelector } from "react-redux";
import { generateSquareId, selectAllSquares } from "../../features/squares/squares.slice";
import PieceContainer from "../Piece/Piece.container";
import { selectAllPieces } from "../../features/pieces/pieces.slice";


const Board = () => {
    const squares = useSelector(selectAllSquares) 
    const pieces = useSelector(selectAllPieces)   
    const squaresUI = useMemo(()=>{
       return squares.map((square)=>{
        return <SquareContainer key={generateSquareId(square)} {...square}></SquareContainer>
       })    
    },[squares]);

    const piecesUI = useMemo(()=>{
        return pieces.map((piece)=>{
            return <PieceContainer key={piece.id} {...piece}></PieceContainer>
        })
      
    },[pieces]);

    
    return <>
    <div className="Board">
        <div className="Squares">{squaresUI}</div>
        <div className="Pieces">{piecesUI}</div>
    </div>
      </>
};

export default Board;