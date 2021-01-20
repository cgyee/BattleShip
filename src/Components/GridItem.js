import React from 'react';

const GridItem = (props) => {
    const backgroundColor = props.highlight ? 'blue' : 'white';
    return (
        <div className="grid--item" 
            style = {{
                backgroundColor
            }}
            onMouseEnter={props.onMouseEnter}
            onMouseLeave={props.onMouseLeave}
        ></div>
    )
}

export default GridItem;