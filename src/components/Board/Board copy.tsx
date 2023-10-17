
import { useMemo } from "react";
import Square from "../Square/Square";
import './Board.css'
import Piece from "../Piece/Piece";

//imges
import King from '../../../public/assets/bKing.png';

const Board = () => {
    const squares = useMemo(()=>{
        const squareComponts = [];
        for(let rowIndex=1; rowIndex <= 8; rowIndex++){
            let rr = rowIndex%2;
            for(let columnIndex=1;columnIndex <= 8;columnIndex++){
                if(columnIndex%2 === rr){
                    squareComponts.push(<Square color="white" rowIndex={rowIndex} columnIndex={columnIndex}></Square>);
                }else {
                    squareComponts.push(<Square color="gray" rowIndex={rowIndex} columnIndex={columnIndex}></Square>);
                }
               
            }
        } 
        return squareComponts;
        
    },[]);

    
    return <>
    <div className="Board">{squares}
    <Piece kind="bRook" rowIndex='1' columnIndex='1'></Piece>
    <Piece kind="bKnight" rowIndex='1' columnIndex='2'></Piece>
    <Piece kind="bBishop" rowIndex='1' columnIndex='3'></Piece>
    <Piece kind="bKing" rowIndex='1' columnIndex='4'></Piece>
    <Piece kind="bQueen" rowIndex='1' columnIndex='5'></Piece>
    <Piece kind="bBishop" rowIndex='1' columnIndex='6'></Piece>
    <Piece kind="bKnight" rowIndex='1' columnIndex='7'></Piece>
    <Piece kind="bRook" rowIndex='1' columnIndex='8'></Piece>
    <Piece kind="bPawn" rowIndex='2' columnIndex='1'></Piece>
    <Piece kind="bPawn" rowIndex='2' columnIndex='2'></Piece>
    <Piece kind="bPawn" rowIndex='2' columnIndex='3'></Piece>
    <Piece kind="bPawn" rowIndex='2' columnIndex='4'></Piece>
    <Piece kind="bPawn" rowIndex='2' columnIndex='5'></Piece>
    <Piece kind="bPawn" rowIndex='2' columnIndex='6'></Piece>
    <Piece kind="bPawn" rowIndex='2' columnIndex='7'></Piece>
    <Piece kind="bPawn" rowIndex='2' columnIndex='8'></Piece>
    <Piece kind="wRook" rowIndex='8' columnIndex='1'></Piece>
    <Piece kind="wKnight" rowIndex='8' columnIndex='2'></Piece>
    <Piece kind="wBishop" rowIndex='8' columnIndex='3'></Piece>
    <Piece kind="wKing" rowIndex='8' columnIndex='4'></Piece>
    <Piece kind="wQueen" rowIndex='8' columnIndex='5'></Piece>
    <Piece kind="wBishop" rowIndex='8' columnIndex='6'></Piece>
    <Piece kind="wKnight" rowIndex='8' columnIndex='7'></Piece>
    <Piece kind="wRook" rowIndex='8' columnIndex='8'></Piece>
    <Piece kind="wPawn" rowIndex='7' columnIndex='1'></Piece>
    <Piece kind="wPawn" rowIndex='7' columnIndex='2'></Piece>
    <Piece kind="wPawn" rowIndex='7' columnIndex='3'></Piece>
    <Piece kind="wPawn" rowIndex='7' columnIndex='4'></Piece>
    <Piece kind="wPawn" rowIndex='7' columnIndex='5'></Piece>
    <Piece kind="wPawn" rowIndex='7' columnIndex='6'></Piece>
    <Piece kind="wPawn" rowIndex='7' columnIndex='7'></Piece>
    <Piece kind="wPawn" rowIndex='7' columnIndex='8'></Piece>
    </div>
      </>
};

export default Board;