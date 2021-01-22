import React from 'react';

const GridItem = (props) => {

    const backgroundColor = props.highlight ? 'blue' : 'white';
    return (
        props.onMouseEnter ?
            <div className="grid--item"
                style={{
                    backgroundColor
                }}
                onMouseEnter={props.onMouseEnter}
                onMouseLeave={props.onMouseLeave}
                onClick={props.onClick}
            ></div>:
            <div className="grid--item"
                style={{
                    backgroundColor:'green'
                }} 
                onClick={props.onClick}
            ></div>
        );
}

export default GridItem;