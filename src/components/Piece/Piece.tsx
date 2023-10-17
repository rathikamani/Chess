

export interface IPiece {
    kind: string
    rowIndex: string
    columnIndex: string
}

const Piece = (props: IPiece) => {
    const { kind,rowIndex,columnIndex } = props;
    return <><img  style={{
        gridArea: `
    ${rowIndex}/${columnIndex}/${rowIndex + 1}/${columnIndex + 1}
  `}} src={`http://127.0.0.1:5173/assets/${kind}.png`}></img></>
};

export default Piece;