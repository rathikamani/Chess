import { useDispatch, useSelector } from "react-redux"
import "./App.css"
import Board from "./components/Board/Board"
import { useEffect } from "react";
import { ISquare, addSquare, addSquares } from "./features/squares/squares.slice";
import { Color } from "./features/pieces/pieces.slice";
import { selectDirection, setDirection } from "./features/board/board.slice";


function App() {
  const dispatch = useDispatch();
  const direction = useSelector(selectDirection);
  useEffect(() => {
    dispatch({type:'CREATE_SQUARES'})
    dispatch({type:'CREATE_PIECES'})
    // for (let colIndex = 1; colIndex <= 8; colIndex++) {
    //   let color =  colIndex % 2 == 0 ? Color.WHITE : Color.GRAY;
    //   squares.push({ file: String.fromCharCode(96 + colIndex), rank: `8`, color: color, bwPosition: `1/${colIndex}/2/${colIndex + 1}`, wbPosition: `8/${9 - colIndex}/9/${10 - colIndex}` })
    // }

  
    // for (let colIndex = 1; colIndex <= 8; colIndex++) {
    //   let color =  colIndex % 2 == 0 ? Color.GRAY : Color.WHITE
    //   squares.push({ file: String.fromCharCode(96 + colIndex), rank: '7', color: color, bwPosition: `2/${colIndex}/3/${colIndex + 1}`, wbPosition: `7/${9 - colIndex}/8/${10 - colIndex}`})
    // }
    // for (let colIndex = 1; colIndex <= 8; colIndex++) {
    //   let color =  colIndex % 2 == 0 ? Color.WHITE : Color.GRAY
    //   squares.push({ file: String.fromCharCode(96 + colIndex), rank: '6', color: color, bwPosition: `3/${colIndex}/4/${colIndex + 1}`, wbPosition: `6/${9 - colIndex}/7/${10 - colIndex}` })
    // }
    // for (let colIndex = 1; colIndex <= 8; colIndex++) {
    //   let color =  colIndex % 2 == 0 ? Color.GRAY : Color.WHITE
    //   squares.push({ file: String.fromCharCode(96 + colIndex), rank: '5', color: color, bwPosition: `4/${colIndex}/5/${colIndex + 1}`, wbPosition: `5/${9 - colIndex}/6/${10 - colIndex}` })
    // }
    // for (let colIndex = 1; colIndex <= 8; colIndex++) {
    //   let color =  colIndex % 2 == 0 ? Color.WHITE : Color.GRAY
    //   squares.push({ file: String.fromCharCode(96 + colIndex), rank: '4', color: color, bwPosition: `5/${colIndex}/6/${colIndex + 1}`, wbPosition: `4/${9 - colIndex}/5/${10 - colIndex}` })
    // }
    // for (let colIndex = 1; colIndex <= 8; colIndex++) {
    //   let color =  colIndex % 2 == 0 ? Color.GRAY : Color.WHITE
    //   squares.push({ file: String.fromCharCode(96 + colIndex), rank: '3', color: color, bwPosition: `6/${colIndex}/7/${colIndex + 1}`, wbPosition: `3/${9 - colIndex}/4/${10 - colIndex}` })
    // }
    // for (let colIndex = 1; colIndex <= 8; colIndex++) {
    //   let color =  colIndex % 2 == 0 ? Color.WHITE : Color.GRAY
    //   squares.push({ file: String.fromCharCode(96 + colIndex), rank: '2', color: color, bwPosition: `7/${colIndex}/8/${colIndex + 1}`, wbPosition: `2/${9 - colIndex}/3/${10 - colIndex}` })
    // }
    // for (let colIndex = 1; colIndex <= 8; colIndex++) {
    //   let color =  colIndex % 2 == 0 ? Color.GRAY : Color.WHITE
    //   squares.push({ file: String.fromCharCode(96 + colIndex), rank: '1', color: color, bwPosition: `8/${colIndex}/9/${colIndex + 1}`, wbPosition: `1/${9 - colIndex}/2/${10 - colIndex}` })
    // }

  }, [])

  const handleSubmit = () => {
    console.log(direction);
    dispatch(direction == 'BW' ? setDirection('WB') : setDirection('BW'))
  }


  return (<>
    <Board></Board>
    <button onClick={() => handleSubmit()}>flip</button>
  </>
  )
}

export default App
