
import { useSelector } from 'react-redux';
import { selectDirection } from '../../features/board/board.slice';
import { ISquare, generateSquareId } from '../../features/squares/squares.slice';
import './Square.css';
import { useMemo } from 'react';
import Square from './Square';

const SquareContainer = ((props:ISquare)=>{
    const direction = useSelector(selectDirection);
    
    const id = useMemo(()=>{
      return  generateSquareId(props)
    },[props]);

    return <><Square {...props} direction={direction} id={id}></Square></>;
});

export default SquareContainer;