import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";

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
    id: string
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

export const { addPiece } = piecesSlice.actions;
export const selectPieces = (rootState:RootState) => rootState.pieces;
export const { selectAll:selectAllPieces } = piecesAdapter.getSelectors(selectPieces);

export default piecesSlice;