const Gameboard = () => {

    let board = [];
    let isVertical = true;
    let shipRegistry = [];

    for(let i = 0; i < 10; i++) {
        board.push(new Array(10));
    }

    const toggleDirection = () => {
        isVertical = isVertical ? false : true;
        return isVertical;
    }

    const addShip = (x, y, ship) => {
        //expect x, y coordinates and adds a ship of a given length(ship.length)
        //starting at the x, y position of the board
        //if not ship already present at a ship to the corresponding postion and a index of
        //that position as it relates to the ship to the Gameboard
        if(!board[x][y]) {

            shipRegistry.push(ship);
            for(let i = 0; i < ship.length; i++) {
                const [n, m] = isVertical ? [x + i, y] : [x, y + i]

                board[n][m] = 
                {
                    position: i,
                    ship
                };
            }
        }
    }

    const receiveAttack = (x, y) => {
        if(board[x][y] === 'hit' || board[x][y] === 'x') {
            return false;
        }
        
        const {position, ship} = board[x][y] || null; 
        if(ship) {
            ship.hit(position);
            board[x][y] = 'hit'
        }
        else {
            board[x][y] = 'x';
        }
        return true;;
    }

    const allShipsSunk = () => {
        return shipRegistry.every(s => s.isSunk());
    }

    return {addShip, board, toggleDirection, receiveAttack, allShipsSunk, shipRegistry}
}

module.exports = Gameboard;