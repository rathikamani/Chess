import { put, takeEvery } from "redux-saga/effects"
import { Color, PieceKind, addPiece } from "./pieces.slice"


function* createPieces(){
    yield put(addPiece({id:'1',kind: PieceKind.ROOK,color: Color.WHITE,squareID:'a_1'}));
}

export function* WatchCreatePieces(){
    yield takeEvery('CREATE_PIECES',createPieces)
}