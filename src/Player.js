const Player = (str) => {
    const name = str || "default";
    const randomCoordinates = () => [Math.floor(Math.random() * 10), Math.floor(Math.random() * 10)];

    const attack = (x, y, board) => {
        return board.reciveAttack(x, y);
    }

    const allShipsSunk = (board) => {
        return board.allShipsSunk();
    }
    return {name, randomCoordinates, attack, allShipsSunk}
}