import { createEntityAdapter, createSelector, createSlice } from "@reduxjs/toolkit";
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

// This will provide entities raw format
export const selectSquares = (rootState:RootState) => rootState.squares;
// selectAll will provide Items in array format
// selectEntities will provide object format 
export const { selectAll:selectAllSquares, selectEntities:selectSquareEntities } = squaresAdapter.getSelectors(selectSquares);
// selectsquareBYID will provide single item if your provide squareID
export const selectSquareByID = (squareID:string)=>{
    return createSelector(selectSquareEntities,(squareEntities)=>{
        return squareEntities[squareID] || { bwPosition:'',wbPosition:''};
    })
}

export default squaresSlice;