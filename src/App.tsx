import { useDispatch,useSelector } from "react-redux"
import "./App.css"
import Board from "./components/Board/Board"
import { useEffect } from "react";
import { addSquare } from "./features/squares/squares.slice";
import { Color } from "./features/pieces/pieces.slice";
import { selectDirection, setDirection } from "./features/board/board.slice";


function App() {
  const dispatch = useDispatch();
  const direction = useSelector(selectDirection);
  useEffect(()=>{
    // 1 row
      dispatch(addSquare({file:'h',rank:'1',color: Color.WHITE,bwPosition : '1/8/2/9',wbPosition: '8/1/9/2',kind:'bQueen'}));
      dispatch(addSquare({file:'g',rank:'1',color: Color.GRAY,bwPosition : '1/7/2/8',wbPosition: '8/2/9/3',kind:'bKnight'}));
      dispatch(addSquare({file:'f',rank:'1',color: Color.WHITE,bwPosition : '1/6/2/7',wbPosition: '8/3/9/4',kind:'bBishop'}));
      dispatch(addSquare({file:'e',rank:'1',color: Color.GRAY,bwPosition : '1/5/2/6',wbPosition: '8/4/9/5',kind:'bKing'}));
      dispatch(addSquare({file:'d',rank:'1',color: Color.WHITE,bwPosition : '1/4/2/5',wbPosition: '8/5/9/6',kind:'bQueen'}));
      dispatch(addSquare({file:'c',rank:'1',color: Color.GRAY,bwPosition : '1/3/2/4',wbPosition: '8/6/9/7',kind:'bBishop'}));
      dispatch(addSquare({file:'b',rank:'1',color: Color.WHITE,bwPosition : '1/2/2/3',wbPosition: '8/7/9/8',kind:'bKnight'}));
      dispatch(addSquare({file:'a',rank:'1',color: Color.GRAY,bwPosition : '1/1/2/2',wbPosition: '8/8/9/9',kind:'bQueen'}));
      // 2 row
      dispatch(addSquare({file:'h',rank:'2',color: Color.WHITE,bwPosition : '2 / 8 / 3 / 9',wbPosition: '7 / 1 / 8 / 2',kind:'bPawn'}));
      dispatch(addSquare({file:'g',rank:'2',color: Color.GRAY,bwPosition : '2 / 7 / 3 / 8',wbPosition: '7 / 2 / 8 / 3',kind:'bPawn'}));
      dispatch(addSquare({file:'f',rank:'2',color: Color.WHITE,bwPosition : '2 / 6 / 3 / 7',wbPosition: '7 / 3 / 8 / 4',kind:'bPawn'}));
      dispatch(addSquare({file:'e',rank:'2',color: Color.GRAY,bwPosition : '2 / 5 / 3 / 6',wbPosition: '7 / 4 / 8 / 5',kind:'bPawn'}));
      dispatch(addSquare({file:'d',rank:'2',color: Color.WHITE,bwPosition : '2 / 4 / 3 / 5',wbPosition: '7 / 5 / 8 / 6',kind:'bPawn'}));
      dispatch(addSquare({file:'c',rank:'2',color: Color.GRAY,bwPosition : '2 / 3 / 3 / 4',wbPosition: '7 / 6 / 8 / 7',kind:'bPawn'}));
      dispatch(addSquare({file:'b',rank:'2',color: Color.WHITE,bwPosition : '2 / 2 / 3 / 3',wbPosition: '7 / 7 / 8 / 8',kind:'bPawn'}));
      dispatch(addSquare({file:'a',rank:'2',color: Color.GRAY,bwPosition : '2 / 1 / 3 / 2',wbPosition: '7 / 8 / 8 / 9',kind:'bPawn'}));
      // 3 row
      dispatch(addSquare({file:'h',rank:'3',color: Color.WHITE,bwPosition : '3 / 8 / 4 / 9',wbPosition: '6 / 1 / 7 / 2',kind:''}));
      dispatch(addSquare({file:'g',rank:'3',color: Color.GRAY,bwPosition : '3 / 7 / 4 / 8',wbPosition: '6 / 2 / 7 / 3',kind:''}));
      dispatch(addSquare({file:'f',rank:'3',color: Color.WHITE,bwPosition : '3 / 6 / 4 / 7',wbPosition: '6 / 3 / 7 / 4',kind:''}));
      dispatch(addSquare({file:'e',rank:'3',color: Color.GRAY,bwPosition : '3 / 5 / 4 / 6',wbPosition: '6 / 4 / 7 / 5',kind:''}));
      dispatch(addSquare({file:'d',rank:'3',color: Color.WHITE,bwPosition : '3 / 4 / 4 / 5',wbPosition: '6 / 5 / 7 / 6',kind:''}));
      dispatch(addSquare({file:'c',rank:'3',color: Color.GRAY,bwPosition : '3 / 3 / 4 / 4',wbPosition: '6 / 6 / 7 / 7',kind:''}));
      dispatch(addSquare({file:'b',rank:'3',color: Color.WHITE,bwPosition : '3 / 2 / 4 / 3',wbPosition: '6 / 7 / 7 / 8',kind:''}));
      dispatch(addSquare({file:'a',rank:'3',color: Color.GRAY,bwPosition : '3 / 1 / 4 / 2',wbPosition: '6 / 8 / 7 / 9',kind:''}));
    // 4 row
    dispatch(addSquare({file:'h',rank:'4',color: Color.WHITE,bwPosition : '4 / 8 / 5 / 9',wbPosition: '5 / 1 / 6 / 2',kind:''}));
    dispatch(addSquare({file:'g',rank:'4',color: Color.GRAY,bwPosition : '4 / 7 / 5 / 8',wbPosition: '5 / 2 / 6 / 3',kind:''}));
    dispatch(addSquare({file:'f',rank:'4',color: Color.WHITE,bwPosition : '4 / 6 / 5 / 7',wbPosition: '5 / 3 / 6 / 4',kind:''}));
    dispatch(addSquare({file:'e',rank:'4',color: Color.GRAY,bwPosition : '4 / 5 / 5 / 6',wbPosition: '5 / 4 / 6 / 5',kind:''}));
    dispatch(addSquare({file:'d',rank:'4',color: Color.WHITE,bwPosition : '4 / 4 / 5 / 5',wbPosition: '5 / 5 / 6 / 6',kind:''}));
    dispatch(addSquare({file:'c',rank:'4',color: Color.GRAY,bwPosition : '4 / 3 / 5 / 4',wbPosition: '5 / 6 / 6 / 7',kind:''}));
    dispatch(addSquare({file:'b',rank:'4',color: Color.WHITE,bwPosition : '4 / 2 / 5 / 3',wbPosition: '5 / 7 / 6 / 8',kind:''}));
    dispatch(addSquare({file:'a',rank:'4',color: Color.GRAY,bwPosition : '4 / 1 / 5 / 2',wbPosition: '5 / 8 / 6 / 9',kind:''}));

    // 5 row
    dispatch(addSquare({file:'h',rank:'5',color: Color.WHITE,bwPosition : '5 / 8 / 6 / 9',wbPosition: '4 / 1 / 5 / 2',kind:''}));
    dispatch(addSquare({file:'g',rank:'5',color: Color.GRAY,bwPosition : '5 / 7 / 6 / 8',wbPosition: '4 / 2 / 5 / 3',kind:''}));
    dispatch(addSquare({file:'f',rank:'5',color: Color.WHITE,bwPosition : '5 / 6 / 6 / 7',wbPosition: '4 / 3 / 5 / 4',kind:''}));
    dispatch(addSquare({file:'e',rank:'5',color: Color.GRAY,bwPosition : '5 / 5 / 6 / 6',wbPosition: '4 / 4 / 5 / 5',kind:''}));
    dispatch(addSquare({file:'d',rank:'5',color: Color.WHITE,bwPosition : '5 / 4 / 6 / 5',wbPosition: '4 / 5 / 5 / 6',kind:''}));
    dispatch(addSquare({file:'c',rank:'5',color: Color.GRAY,bwPosition : '5 / 3 / 6 / 4',wbPosition: '4 / 6 / 5 / 7',kind:''}));
    dispatch(addSquare({file:'b',rank:'5',color: Color.WHITE,bwPosition : '5 / 2 / 6 / 3',wbPosition: '4 / 7 / 5 / 8',kind:''}));
    dispatch(addSquare({file:'a',rank:'5',color: Color.GRAY,bwPosition : '5 / 1 / 6 / 2',wbPosition: '4 / 8 / 5 / 9',kind:''}));

    // 6 row
    dispatch(addSquare({file:'h',rank:'6',color: Color.WHITE,bwPosition : '6 / 8 / 7 / 9',wbPosition: '3 / 1 / 4 / 2',kind:''}));
    dispatch(addSquare({file:'g',rank:'6',color: Color.GRAY,bwPosition : '6 / 7 / 7 / 8',wbPosition: '3 / 2 / 4 / 3',kind:''}));
    dispatch(addSquare({file:'f',rank:'6',color: Color.WHITE,bwPosition : '6 / 6 / 7 / 7',wbPosition: '3 / 3 / 4 / 4',kind:''}));
    dispatch(addSquare({file:'e',rank:'6',color: Color.GRAY,bwPosition : '6 / 5 / 7 / 6',wbPosition: '3 / 4 / 4 / 5',kind:''}));
    dispatch(addSquare({file:'d',rank:'6',color: Color.WHITE,bwPosition : '6 / 4 / 7 / 5',wbPosition: '3 / 5 / 4 / 6',kind:''}));
    dispatch(addSquare({file:'c',rank:'6',color: Color.GRAY,bwPosition : '6 / 3 / 7 / 4',wbPosition: '3 / 6 / 4 / 7',kind:''}));
    dispatch(addSquare({file:'b',rank:'6',color: Color.WHITE,bwPosition : '6 / 2 / 7 / 3',wbPosition: '3 / 7 / 4 / 8',kind:''}));
    dispatch(addSquare({file:'a',rank:'6',color: Color.GRAY,bwPosition : '6 / 1 / 7 / 2',wbPosition: '3 / 8 / 4 / 9',kind:''}));

    // 7 row
    dispatch(addSquare({file:'h',rank:'7',color: Color.WHITE,bwPosition : '7 / 8 / 8 / 9',wbPosition: '2 / 1 / 3 / 2',kind:'wPawn'}));
    dispatch(addSquare({file:'g',rank:'7',color: Color.GRAY,bwPosition : '7 / 7 / 8 / 8',wbPosition: '2 / 2 / 3 / 3',kind:'wPawn'}));
    dispatch(addSquare({file:'f',rank:'7',color: Color.WHITE,bwPosition : '7 / 6 / 8 / 7',wbPosition: '2 / 3 / 3 / 4',kind:'wPawn'}));
    dispatch(addSquare({file:'e',rank:'7',color: Color.GRAY,bwPosition : '7 / 5 / 8 / 6',wbPosition: '2 / 4 / 3 / 5',kind:'wPawn'}));
    dispatch(addSquare({file:'d',rank:'7',color: Color.WHITE,bwPosition : '7 / 4 / 8 / 5',wbPosition: '2 / 5 / 3 / 6',kind:'wPawn'}));
    dispatch(addSquare({file:'c',rank:'7',color: Color.GRAY,bwPosition : '7 / 3 / 8 / 4',wbPosition: '2 / 6 / 3 / 7',kind:'wPawn'}));
    dispatch(addSquare({file:'b',rank:'7',color: Color.WHITE,bwPosition : '7 / 2 / 8 / 3',wbPosition: '2 / 7 / 3 / 8',kind:'wPawn'}));
    dispatch(addSquare({file:'a',rank:'7',color: Color.GRAY,bwPosition : '7 / 1 / 8 / 2',wbPosition: '2 / 8 / 3 / 9',kind:'wPawn'}));

    // 8 row
    dispatch(addSquare({file:'h',rank:'8',color: Color.WHITE,bwPosition : '8 / 8 / 9 / 9',wbPosition: '1 / 1 / 2 / 2',kind:'wQueen'}));
    dispatch(addSquare({file:'g',rank:'8',color: Color.GRAY,bwPosition : '8 / 7 / 9 / 8',wbPosition: '1 / 2 / 2 / 3',kind:'wKnight'}));
    dispatch(addSquare({file:'f',rank:'8',color: Color.WHITE,bwPosition : '8 / 6 / 9 / 7',wbPosition: '1 / 3 / 2 / 4',kind:'wBishop'}));
    dispatch(addSquare({file:'e',rank:'8',color: Color.GRAY,bwPosition : '8 / 5 / 9 / 6',wbPosition: '1 / 4 / 2 / 5',kind:'wKing'}));
    dispatch(addSquare({file:'d',rank:'8',color: Color.WHITE,bwPosition : '8 / 4 / 9 / 5',wbPosition: '1 / 5 / 2 / 6',kind:'wQueen'}));
    dispatch(addSquare({file:'c',rank:'8',color: Color.GRAY,bwPosition : '8 / 3 / 9 / 4',wbPosition: '1 / 6 / 2 / 7',kind:'wBishop'}));
    dispatch(addSquare({file:'b',rank:'8',color: Color.WHITE,bwPosition : '8 / 2 / 9 / 3',wbPosition: '1 / 7 / 2 / 8',kind:'wKnight'}));
    dispatch(addSquare({file:'a',rank:'8',color: Color.GRAY,bwPosition : '8 / 1 / 9 / 2',wbPosition: '1 / 8 / 2 / 9',kind:'wQueen'}));    



  },[])

  const handleSubmit = () => {  
    console.log(direction);
    dispatch(direction == 'BW'? setDirection('WB'): setDirection('BW'))
}

  
  return (<>
  <Board></Board>
  <button onClick={() =>handleSubmit()}>flip</button>
  </>
  )
}

export default App
