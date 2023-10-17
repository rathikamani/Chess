import { createSelector, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";



const boardSlice = createSlice({
    name: 'board',
    initialState: {
        direction: 'WB',
    },
    reducers:{
        setDirection :(state,action)=>{
            state.direction = action.payload
        }
    }

})
export const { setDirection } = boardSlice.actions;
export const selectBoard  = (rootState:RootState) => rootState.board;
export const selectDirection = createSelector(selectBoard,(board)=>{
    return board.direction;
})


export default boardSlice