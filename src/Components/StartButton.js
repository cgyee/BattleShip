import React from 'react';

const StartButton = () => {

    return (
        <div className="buttonContainer">
            <button>Start</button>
        </div>
    )
}

const ChangeAxisButton = (props) => {
    return (
        <div className="buttonContainer">
            <button
                onClick={()=> props.setAxis(prevState=> !prevState)}>
                    Change Axis
            </button>
        </div>
    )
}
export {StartButton, ChangeAxisButton};