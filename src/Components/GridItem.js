import React from 'react';

const GridItem = (props) => {
    return (
        <div className="grid--item" 
            style = {{
                color:props.color
            }}
            onMouseLeave={props.onMouseEnter}
            onMouseEnter={props.onMouseLeave}
        ></div>
    )
}

export default GridItem;