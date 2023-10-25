

// export interface IPiece {
//     kind: string
//     rowIndex: string
//     columnIndex: string
// }

const Piece = (props:any) => {
    const { kind,position,color } = props;
    return <><img  style={{
        gridArea: position}} src={`http://127.0.0.1:5173/assets/${color}_${kind}.png`}></img></>
};

export default Piece;