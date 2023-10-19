

// export interface IPiece {
//     kind: string
//     rowIndex: string
//     columnIndex: string
// }

const Piece = (props:any) => {
    const { kind,color,squareID,id } = props;
    return <><img  style={{
        gridArea: `
    ${rowIndex}/${columnIndex}/${rowIndex + 1}/${columnIndex + 1}
  `}} src={`http://127.0.0.1:5173/assets/${kind}.png`}></img></>
};

export default Piece;