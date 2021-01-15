import React from 'react';
import ShipItem from './ShipItem';

const ShipFlex = () => {

    const ships = [5, 4, 3, 3, 2];
    return (
        <div className="boardContainer--ships">
            {ships.map(ship => <ShipItem size={ship} />)}
        </div>
    )
}
export default ShipFlex;