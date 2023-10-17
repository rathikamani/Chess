
import { useSelector } from 'react-redux';
import { selectDirection } from '../../features/board/board.slice';
import { ISquare } from '../../features/squares/squares.slice';
import './Square.css';

const Square = ((props:ISquare)=>{
    const { id,color,bwPosition,wbPosition } = props;
    const direction = useSelector(selectDirection);

    return <>
    <div style={{backgroundColor:color, 
    gridArea: 
      direction === 'BW' ? bwPosition : wbPosition
    }} 
    className='Square' ></div></>;
});

export default Square;