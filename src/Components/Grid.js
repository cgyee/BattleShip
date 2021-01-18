import React, {useState} from 'react';
import GridItem  from './GridItem';

const Grid = () => {
    
    // const gridItems = [];
    const gridItems = new Array(100).fill('white');
    const [hovered, setHoverd] = useState([]);
    
    const mouseEnterHandler = (index) => {
        const locations = [];
        for(let i = 0; i < 4; i++) {
            locations.push(index + i);
        }
        setHoverd(locations);
        console.log(locations);
    }

    const mouseLeaveHandler = () => {
        setHoverd([]);
        console.log('leave')
    }
    
    const items = gridItems.map((color, i) => {
        return (
            <GridItem 
                key={i}
                color={hovered.includes(i) ? 'blue' : 'white'}
                onMouseLeave={() => mouseLeaveHandler()}
                onMouseEnter={() => mouseEnterHandler(i)}
            />
        )
    })
    return (
        <div className="boardContainer--grid">
            {items}
        </div>
    )
}
export default Grid;