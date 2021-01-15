import React from 'react';

const ShipItem = (props) => {
    
    let divs = [];
    for(let i = 0; i < props.size; i++) {
        divs.push((<div className='grid--item'></div>));
    } 
    return (
        <div
        draggable='true'
        style={
            {
                display: 'grid',
                gridTemplateRows: `repeat(${props.size}, 45px)`, 
                width: '45px'
            }
        }>
            {divs}
        </div>
    )
}
export default ShipItem;