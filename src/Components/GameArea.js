import React from 'react';
import BoardArea from './BoardArea';
import StartButton from './StartButton';

const GameArea = () => {
    return (
        <div className="container">
            <div className="gameContainer">
                <BoardArea />
                <StartButton />
                <BoardArea />
            </div>
        </div>
    )
}

export default GameArea;