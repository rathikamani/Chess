import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";

export enum  PieceKind {
    KING = 'KING',
    QUEEN = 'QUEEN',
    BISHOP = 'BISHOP',
    KNIGHT = 'KNIGHT',
    ROOK = 'ROOK',
    PAWN = 'PAWN'
 }


export enum Color {
    GRAY = 'GRAY',
    WHITE = 'WHITE',
}

export interface IPiece{
    kind : PieceKind
    color: Color
    squareID: string,
}

const piecesAdapter = createEntityAdapter<IPiece>({

})


const piecesSlice = createSlice({
    name: 'pieces',
    initialState: {
        ...piecesAdapter.getInitialState()
    },
    reducers: {
        addPiece: piecesAdapter.addOne
    }
})

export default piecesSlice;