import React from 'react';
import Grid from './Grid';
import ShipFlex from './ShipFlex';

const BoardArea = () => {
    
    return (
        <div className="playerContainer">
            <Grid />
            <ShipFlex />
        </div>   
    )
}
export default BoardArea;