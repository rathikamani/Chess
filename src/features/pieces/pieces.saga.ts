import { put, takeEvery } from "redux-saga/effects"
import { Color, PieceKind, addPiece } from "./pieces.slice"


function* createPieces(){
    yield put(addPiece({id:'1',kind: PieceKind.ROOK,color: Color.WHITE,squareID:'a_1'}));
    yield put(addPiece({id:'2',kind: PieceKind.KNIGHT,color: Color.WHITE,squareID:'b_1'}));
    yield put(addPiece({id:'3',kind: PieceKind.BISHOP,color: Color.WHITE,squareID:'c_1'}));
    yield put(addPiece({id:'4',kind: PieceKind.QUEEN,color: Color.WHITE,squareID:'d_1'}));
    yield put(addPiece({id:'5',kind: PieceKind.KING,color: Color.WHITE,squareID:'e_1'}));
    yield put(addPiece({id:'6',kind: PieceKind.BISHOP,color: Color.WHITE,squareID:'f_1'}));
    yield put(addPiece({id:'7',kind: PieceKind.KNIGHT,color: Color.WHITE,squareID:'g_1'}));
    yield put(addPiece({id:'8',kind: PieceKind.ROOK,color: Color.WHITE,squareID:'h_1'}));
    yield put(addPiece({id:'9',kind: PieceKind.PAWN,color: Color.WHITE,squareID:'a_2'}));
    yield put(addPiece({id:'10',kind: PieceKind.PAWN,color: Color.WHITE,squareID:'b_2'}));
    yield put(addPiece({id:'11',kind: PieceKind.PAWN,color: Color.WHITE,squareID:'c_2'}));
    yield put(addPiece({id:'12',kind: PieceKind.PAWN,color: Color.WHITE,squareID:'d_2'}));
    yield put(addPiece({id:'13',kind: PieceKind.PAWN,color: Color.WHITE,squareID:'e_2'}));
    yield put(addPiece({id:'14',kind: PieceKind.PAWN,color: Color.WHITE,squareID:'f_2'}));
    yield put(addPiece({id:'15',kind: PieceKind.PAWN,color: Color.WHITE,squareID:'g_2'}));
    yield put(addPiece({id:'16',kind: PieceKind.PAWN,color: Color.WHITE,squareID:'h_2'}));
    yield put(addPiece({id:'17',kind: PieceKind.PAWN,color: Color.GRAY,squareID:'a_7'}));
    yield put(addPiece({id:'18',kind: PieceKind.PAWN,color: Color.GRAY,squareID:'b_7'}));
    yield put(addPiece({id:'19',kind: PieceKind.PAWN,color: Color.GRAY,squareID:'c_7'}));
    yield put(addPiece({id:'20',kind: PieceKind.PAWN,color: Color.GRAY,squareID:'d_7'}));
    yield put(addPiece({id:'21',kind: PieceKind.PAWN,color: Color.GRAY,squareID:'e_7'}));
    yield put(addPiece({id:'22',kind: PieceKind.PAWN,color: Color.GRAY,squareID:'f_7'}));
    yield put(addPiece({id:'23',kind: PieceKind.PAWN,color: Color.GRAY,squareID:'g_7'}));
    yield put(addPiece({id:'24',kind: PieceKind.PAWN,color: Color.GRAY,squareID:'h_7'}));
    yield put(addPiece({id:'25',kind: PieceKind.ROOK,color: Color.GRAY,squareID:'a_8'}));
    yield put(addPiece({id:'26',kind: PieceKind.KNIGHT,color: Color.GRAY,squareID:'b_8'}));
    yield put(addPiece({id:'27',kind: PieceKind.BISHOP,color: Color.GRAY,squareID:'c_8'}));
    yield put(addPiece({id:'28',kind: PieceKind.QUEEN,color: Color.GRAY,squareID:'d_8'}));
    yield put(addPiece({id:'29',kind: PieceKind.KING,color: Color.GRAY,squareID:'e_8'}));
    yield put(addPiece({id:'30',kind: PieceKind.BISHOP,color: Color.GRAY,squareID:'f_8'}));
    yield put(addPiece({id:'31',kind: PieceKind.KNIGHT,color: Color.GRAY,squareID:'g_8'}));
    yield put(addPiece({id:'32',kind: PieceKind.ROOK,color: Color.GRAY,squareID:'h_8'}));
}

export function* WatchCreatePieces(){
    yield takeEvery('CREATE_PIECES',createPieces)
}