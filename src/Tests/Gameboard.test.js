const Gameboard = require("../Gameboard");
const Ship = require('../Ship');


test('board array is created', () => {
    const gb = Gameboard();
    
    expect(gb.board[0].length).toBe(10);
});

test('board array is working as intended', () => {
    const gb = Gameboard();

    gb.board[0][0] = true;
    
    expect(gb.board[0][0]).toBe(true);
});

test('board is created with Falsy values', () => {
    const gb = Gameboard();

    expect(gb.board[0][0]).toBeFalsy();
});

test('toggle ship directions', () => {
    const gb = Gameboard();

    expect(gb.toggleDirection()).toBeFalsy();
    expect(gb.toggleDirection()).toBeTruthy();
})

test('add ship works with y-axis', () => {
    const gb = Gameboard();

    gb.addShip(0, 0, {length:4});
    expect(gb.board[0][0]).toBeTruthy();
    expect(gb.board[1][0]).toBeTruthy();
    expect(gb.board[2][0]).toBeTruthy();
    expect(gb.board[3][0]).toBeTruthy();

});

test('add ship works with y-axis and position', () => {
    const gb = Gameboard();

    gb.addShip(0, 1, {length:4});
    expect(gb.board[0][1].position).toBe(0);
    expect(gb.board[1][1].position).toBe(1);
    expect(gb.board[2][1].position).toBe(2);
    expect(gb.board[3][1].position).toBe(3);

});

test('add ship works with x-axis and position', () => {
    const gb = Gameboard();

    gb.toggleDirection();
    gb.addShip(1, 1, {length:4});
    expect(gb.board[1][1].position).toBe(0);
    expect(gb.board[1][2].position).toBe(1);
    expect(gb.board[1][3].position).toBe(2);
    expect(gb.board[1][4].position).toBe(3);
});

test('add multiple ships w/o y-axis(vertical) overlap', () => {
    const gb = Gameboard();
    const a = {length:4};
    const b = {length:5};

    gb.addShip(0, 1, a);
    gb.addShip(0, 1, b);

    expect(gb.board[0][1].ship).toBe(a);
});

test('add multiple ships w/o x & y-axis overlap', () => {
    const gb = Gameboard();
    const a = {length:4};
    const b = {length:5};

    gb.addShip(0, 1, a);
    gb.toggleDirection();
    gb.addShip(0, 1, b);

    expect(gb.board[0][1].ship).toBe(a);
});

test('add multiple ships w/ overlap, check that ship is not added w/ overlap', () => {
    const gb = Gameboard();
    const a = {length:4};
    const b = {length:5};

    gb.addShip(0, 1, a);
    gb.toggleDirection();
    gb.addShip(0, 1, b);

    expect(gb.board[0][2]).toBeFalsy();
});

test('receiveAttack working as intended', () => {
    const gb = Gameboard();
    const a = Ship(4);

    gb.addShip(0, 0, a);

    expect(gb.receiveAttack(0, 0)).toBeTruthy();
});

test('shipRegistry holding ships', ()=> {
    const gb = Gameboard();
    const a = {isSunk : function(){ return true }, length: 4};
    const b = {isSunk : function(){ return true }, length: 4};
    const c = {isSunk : function(){ return true }, length: 4};

    gb.addShip(0, 0, a);
    gb.addShip(0, 1, b);
    gb.addShip(0, 2, c);

    expect(gb.shipRegistry[0]).toBe(a);
});

test('allShipsSunk working as intended', () => {
    const gb = Gameboard();
    const a = {isSunk : function(){ return true }, length: 4};
    const b = {isSunk : function(){ return true }, length: 4};
    const c = {isSunk : function(){ return true }, length: 4};

    gb.addShip(0, 0 ,a);
    gb.addShip(0, 1, b);
    gb.addShip(0, 2, c);
    
    expect(gb.allShipsSunk()).toBeTruthy();
})