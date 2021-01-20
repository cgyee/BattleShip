import React, { useState } from 'react';
import Grid from './Grid';
import ButtonsContainer from './ButtonsContainer';

const GameArea = () => {
    const [isHorizontal, setAxis] = useState(true);
    return (
        <div className="container">
            <div className="gameContainer">
                <Grid isHorizontal={isHorizontal}/>
                <ButtonsContainer setAxis={setAxis}/>
                <Grid />
            </div>
        </div>
    )
}

export default GameArea;