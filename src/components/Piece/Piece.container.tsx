import { IPiece } from "../../features/pieces/pieces.slice";
import Piece from "./Piece";



 const PieceContainer = (props:IPiece)=>{ 
    return <Piece {...props}></Piece>
}

export default PieceContainer;