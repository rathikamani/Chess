import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit"
import counterReducer from "../features/counter/counterSlice"
import boardSlice from "../features/board/board.slice"
import squaresSlice from "../features/squares/squares.slice"
import piecesSlice from "../features/pieces/pieces.slice"

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    board: boardSlice.reducer,
    squares : squaresSlice.reducer,
    pieces: piecesSlice.reducer,
  },
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>
