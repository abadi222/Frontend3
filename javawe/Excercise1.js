
//ex 2.2
function binaryToInt(binaryArray) {
    if (binaryArray.every( num => num === 0 || num === 1)) {
        return parseInt(binaryArray.join(''), 2); 
    }
    else{
        return ' Array should only contain 0 and 1';
    }
}

// check
let binaryArray = [1,3, 0, 1]; 
let result = binaryToInt(binaryArray);

console.log(result); 

//ex 2.3
function findNextSquare(num) {
    const root = Math.sqrt(num);
    if (root % 1 !== 0) {
        return -1;
    }
    const nRoot = root + 1;
    return Math.pow(nRoot,2) ;
}
//check
console.log(findNextSquare(81));