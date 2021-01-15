const Ship = (len) => {
    const length = len;
    const hull = [];

    for(let i = 0; i < length -1; i++) {hull.push(true);}

    const hit = (index) => {
        if(hull[index]) {
            hull[index] = false;
            return true;
        }
        return false;
    }

    const isSunk = () => {
        return hull.every(section => !section);
    }

    return {length, hit, isSunk}
}

module.exports = Ship;

