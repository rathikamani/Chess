import { useSelector } from "react-redux";
import { IPiece } from "../../features/pieces/pieces.slice";
import Piece from "./Piece";
import { selectSquareByID } from "../../features/squares/squares.slice";
import { selectDirection } from "../../features/board/board.slice";
import { useMemo } from "react";



 const PieceContainer = (props:IPiece)=>{ 
    const { squareID } = props;
    const direction = useSelector(selectDirection);
    
    const { bwPosition,wbPosition } = useSelector(selectSquareByID(squareID))

    const squarePosition  = useMemo(()=>{
            return direction === 'BW' ? bwPosition : wbPosition
    },[direction,wbPosition,bwPosition])

    return <Piece {...props} position={squarePosition}></Piece>
}

export default PieceContainer;