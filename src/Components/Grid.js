import React from 'react';
import GridItem  from './GridItem';

const Grid = () => {
    
    const gridItems = [];
    for(let i = 0; i < 100; i++) {
        gridItems.push((<GridItem />));
    } 
    return (
        <div className="boardContainer--grid">
            {gridItems}
        </div>
    )
}
export default Grid;