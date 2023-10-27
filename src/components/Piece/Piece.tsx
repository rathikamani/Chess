

// export interface IPiece {
//     kind: string
//     rowIndex: string
//     columnIndex: string
// }

import { useCallback, useRef, useState } from "react";

const Piece = (props:any) => {
    const [localPos,setLocalPos] = useState({
        offsetX: 0,
        offsetY: 0
    })
    const pieceRef = useRef<HTMLImageElement|null>(null)
    const { kind,position,color } = props;

    const onMouseMove =  useCallback((event:MouseEvent)=>{
        console.log('onMouseMove');
        console.log(pieceRef);
        console.log(event);
        setLocalPos({
            offsetX: event.clientX-event.offsetX,
            offsetY: event.clientY-event.offsetY
        })
       // pieceRef.current?.style.transform = `translate:${event.offsetX}px ${event.offsetY}px`
    },[]);

    const onMouseDown = useCallback(()=>{
        console.log('onMouseDown');
        window.addEventListener("mousemove",onMouseMove)
    },[onMouseMove])



    return <><img  ref={pieceRef} draggable={false} onMouseDown={onMouseDown} style={{
        gridArea: position, transform:`translate(${localPos.offsetX}px,${localPos.offsetY}px)` }} src={`http://127.0.0.1:5173/assets/${color}_${kind}.png`}></img></>
};

export default Piece;