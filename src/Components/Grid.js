import React, {useState} from 'react';
import GridItem  from './GridItem';

const Grid = (props) => {
    
    // const gridItems = [];
    const gridItems = new Array(64).fill('white');
    const [hovered, setHoverd] = useState([]);
    const [ships, setShips] = useState([]);
    
    const mouseEnterHandler = (index) => {
        const increment = props.isHorizontal ? 1 : 8;

        if((index % 8 + 4  <= 8 && props.isHorizontal) || 
            (index / 8 <= 4 && !props.isHorizontal)) {
            const locations = [];
            for(let i = 0; i < 4*increment; i+=increment) {
                locations.push(index + i);
            }
            setHoverd(locations);
        }
    }

    const mouseLeaveHandler = () => {
        setHoverd([]);
    }

    const toCoordinates = (index) => {
        const x = Math.floor(index / 8);
        const y = index % 8;
        return [x, y];
    }
    
    const items = gridItems.map((color, i) => {
        return (
            ships.includes(i) ?
            <GridItem 
                key={i}
                onClick={() => console.log('ships',ships)}
            />:
            <GridItem 
                key={i}
                highlight={hovered.includes(i)}
                onMouseLeave={() => mouseLeaveHandler()}
                onMouseEnter={() => mouseEnterHandler(i)}
                onClick={()=> setShips(prevState=> [...prevState, ...hovered])}
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