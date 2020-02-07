var numbers = [1,2,3,4,5];
var first = numbers.find(myFunction);

document.write(first);

function myFunction(value, index, array) {
    return value >= 5;
}