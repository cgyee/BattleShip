const Ship = require('./Ship');

test('check length is assigned correctly', () => {
    const tShip = Ship(4);
    expect(tShip.length).toEqual(4);
});

test('check if hit works as intended', () => {
    const tShip = Ship(4);
    expect(tShip.hit(0)).toBe(true);
});

test('check if hit accounts for out of index', () => {
    const tShip = Ship(5);
    expect(tShip.hit(-1)).toBe(false);
});

test('check if isSunk works as intended w/ one hit', () => {
    const tShip = Ship(4);
    tShip.hit(2);
    expect(tShip.isSunk()).toBe(false);
});

test('check if isSunk works as inteded w/ 1< hits < ship.length-2', () => {
    const tShip = Ship(4);
    tShip.hit(0)
    tShip.hit(1)
    tShip.hit(3)
    expect(tShip.isSunk()).toBe(false);

});

test('check if isSunk works as inteded w/ hits = ship.length-1(total HP)', () => {
    const tShip = Ship(4);
    tShip.hit(0)
    tShip.hit(1)
    tShip.hit(2)
    tShip.hit(3)
    expect(tShip.isSunk()).toBe(true);

});