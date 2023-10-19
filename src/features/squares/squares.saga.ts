import { put, takeEvery } from "redux-saga/effects";
import { ISquare, addSquares } from "./squares.slice";
import { Color } from "../pieces/pieces.slice";


function* createSquares(){
    let squares: ISquare[] = [];
    for(let rowIndex =1; rowIndex <=8; rowIndex++){
      console.log(rowIndex)
      for (let colIndex = 1; colIndex <= 8; colIndex++) {
        console.log('colIndex',colIndex);
        let color;
        if(rowIndex % 2 == 1){
           color = colIndex % 2 == 0 ? Color.WHITE : Color.GRAY;
        }else {
            color = colIndex % 2 == 0 ? Color.GRAY : Color.WHITE;
        }
        
        squares.push({ file: String.fromCharCode(96 + colIndex), rank: `${9-rowIndex}`, color: color, bwPosition: `${rowIndex}/${colIndex}/${1+rowIndex}/${colIndex + 1}`, wbPosition: `${9-rowIndex}/${9 - colIndex}/${10-rowIndex}/${10 - colIndex}` })
      }
    }
    yield put(addSquares(squares)) 
}

export function* watchCreateSquares(){
    yield takeEvery('CREATE_SQUARES',createSquares)
}

