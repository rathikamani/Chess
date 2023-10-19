import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";
import { Color } from "../pieces/pieces.slice";
import { RootState } from "../../app/store";



export interface ISquare{
    file: string, 
    rank: string,
    color: Color,
    bwPosition : string,
    wbPosition: string
}
export const generateSquareId = (square:ISquare) =>`${square.file}_${square.rank}`
const squaresAdapter = createEntityAdapter<ISquare>({
    selectId: generateSquareId
})


const squaresSlice = createSlice({
    name: 'squares',
    initialState: {
        ...squaresAdapter.getInitialState()
    },
    reducers: {
        addSquare: squaresAdapter.addOne,
        addSquares: squaresAdapter.addMany
    }
})


export const { addSquare,addSquares } = squaresSlice.actions;

export const selectSquares = (rootState:RootState) => rootState.squares;
export const { selectAll:selectAllSquares } = squaresAdapter.getSelectors(selectSquares);

export default squaresSlice;