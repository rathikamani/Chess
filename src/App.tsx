import { useDispatch } from "react-redux"
import "./App.css"
import Board from "./components/Board/Board"
import { useEffect } from "react";
import { addSquare } from "./features/squares/squares.slice";
import { Color } from "./features/pieces/pieces.slice";


function App() {
  const dispatch = useDispatch();
  useEffect(()=>{
      dispatch(addSquare({id:'a_1',color: Color.WHITE,bwPosition : '1/8/2/9',wbPosition: '8/1/9/2'}));
  },[])

  
  return (
   <Board></Board>
  )
}

export default App
