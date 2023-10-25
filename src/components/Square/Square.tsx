import { ISquare } from "../../features/squares/squares.slice";

export interface ISquarePresentation extends ISquare{
    direction : string,
    id: string
}

 const Square = (props:ISquarePresentation)=>{
    const {color,direction,bwPosition,wbPosition,id} = props;
    return  <div 
          style={{backgroundColor:color, 
              gridArea: 
                direction === 'BW' ? bwPosition : wbPosition
              }} 
        >
          {id}</div>
}

export default Square;

