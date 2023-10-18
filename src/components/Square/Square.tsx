import { ISquare } from "../../features/squares/squares.slice";

export interface ISquarePresentation extends ISquare{
    direction : string,
    id: string
}

 const Square = (props:ISquarePresentation)=>{
    const {color,direction,bwPosition,wbPosition,id,kind} = props;
    return  <div style={{backgroundColor:color, 
        gridArea: 
          direction === 'BW' ? bwPosition : wbPosition
        }} 
        className='Square'>
          {kind != ''? <img  style={{gridArea: direction === 'BW' ? bwPosition : wbPosition}} src={`http://127.0.0.1:5173/assets/${kind}.png`}></img> : ''}
          {id}</div>
}

export default Square;

