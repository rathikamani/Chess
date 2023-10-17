
import './Square.css';

const Square = ((props:any)=>{
    const {color,rowIndex,columnIndex } = props;
    return <><div style={{backgroundColor:color, 
    gridArea: `
      ${rowIndex}/${columnIndex}/${rowIndex+1}/${columnIndex+1}
    `}} 
    className='Square' >{rowIndex},{columnIndex}</div></>;
});

export default Square;