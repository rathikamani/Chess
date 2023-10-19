import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit"
import counterReducer from "../features/counter/counterSlice"
import boardSlice from "../features/board/board.slice"
import squaresSlice from "../features/squares/squares.slice"
import piecesSlice from "../features/pieces/pieces.slice"


import createSagaMiddleware from 'redux-saga';
import { watchCreateSquares } from "../features/squares/squares.saga"
import { WatchCreatePieces } from "../features/pieces/pieces.saga"
const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  middleware:(getMiddlewares)=>[...getMiddlewares(),sagaMiddleware],
  reducer: {
    counter: counterReducer,
    board: boardSlice.reducer,
    squares : squaresSlice.reducer,
    pieces: piecesSlice.reducer,
  },
})

sagaMiddleware.run(watchCreateSquares)
sagaMiddleware.run(WatchCreatePieces)

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>
