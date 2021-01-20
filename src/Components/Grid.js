import React, {useState} from 'react';
import GridItem  from './GridItem';

const Grid = (props) => {
    
    // const gridItems = [];
    const gridItems = new Array(64).fill('white');
    const [hovered, setHoverd] = useState([]);
    
    const mouseEnterHandler = (index) => {
        //check to see if is within range for horizontal axis
        const increment = props.isHorizontal ? 1 : 8;

        if((index % 8 + 4  <= 8 && props.isHorizontal) || 
            (index / 8 <= 4 && !props.isHorizontal)) {
            const locations = [];
            for(let i = 0; i < 4*increment; i+=increment) {
                locations.push(index + i);
            }
            setHoverd(locations);
            console.log(locations);
        }
    }

    const mouseLeaveHandler = () => {
        setHoverd([]);
        console.log('leave');
    }
    
    const items = gridItems.map((color, i) => {
        return (
            <GridItem 
                key={i}
                highlight={hovered.includes(i)}
                onMouseLeave={() => mouseLeaveHandler()}
                onMouseEnter={() => mouseEnterHandler(i)}
            />
        )
    })
    return (
        <div className="playerContainer">
            <div className="boardContainer--grid">
                {items}
            </div>
        </div>
    )
}
export default Grid;