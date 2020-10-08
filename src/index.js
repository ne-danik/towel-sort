
// You should implement your task here.

module.exports = function towelSort (matrix) {
    let arr = [];
    if(Array.isArray(matrix)) {
        matrix.forEach((elem, i, array) => { !(i % 2 === 0) ? array[i].reverse() : array[i]; });
        return matrix.flat();
    } 
    return arr;
}
