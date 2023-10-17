import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";
import { Color } from "../pieces/pieces.slice";
import { RootState } from "../../app/store";



export interface ISquare{
    id: string 
    color: Color
    bwPosition : string,
    wbPosition: string
}

const squaresAdapter = createEntityAdapter<ISquare>({

})


const squaresSlice = createSlice({
    name: 'squares',
    initialState: {
        ...squaresAdapter.getInitialState()
    },
    reducers: {
        addSquare: squaresAdapter.addOne
    }
})


export const { addSquare } = squaresSlice.actions;

export const selectSquares = (rootState:RootState) => rootState.squares;
export const { selectAll:selectAllSquares } = squaresAdapter.getSelectors(selectSquares);

export default squaresSlice;