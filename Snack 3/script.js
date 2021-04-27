function sublist (array, startIndex, endIndex) {
    return array.filter(function(element, index) {
        if (index >= startIndex && index <= endIndex) {
            return true;
        }
        return false;
    });
}

/* versione con l'arrow function
function sublist (array, startIndex, endIndex) {
    return array.filter((element, index) => index >= startIndex && index <= endIndex)
}*/

function sublistForEach (array, startIndex, endIndex) {
    const result = [];
    array.forEach((element, index) => {
        if (index >= startIndex && index <= endIndex) {
            result.push(element)
        }
    });
    return result;
}

var array = [10, 5, 6, 11, 20];
var nuovoArray = sublist(array, 1, 3);
console.log(nuovoArray);

var nuovoArray2 = sublistForEach(array, 1, 3);
console.log(nuovoArray2);


// esercizio bonus map
function raddoppio(array) {
    return array.map((element) => element * 2)
}