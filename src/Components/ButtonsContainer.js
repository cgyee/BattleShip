import React from 'react';
import {StartButton, ChangeAxisButton} from './StartButton';

const ButtonsContainer = (props) => {
    return (
        <div style={
            {
                display:'flex',
                flexDirection:'column',
                alignSelf:'center'
            }
        }
        >
            <StartButton />
            <ChangeAxisButton isHorizontal={props.isHorizontal} setAxis={props.setAxis}/>
        </div>
    )
}

export default ButtonsContainer;