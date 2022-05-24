// Write your solution here!
const cats = ['Milo', 'Otis', 'Garfield'];

// cats.push("Ralph");

// const newCats = [...cats.push("Ralph")];

function destructivelyAppendCat(name) {
    [...cats.push(name)];
}

function destructivelyPrependCat(name) {
    [...cats.unshift(name)];
}

function destructivelyRemoveLastCat(name) {
    [...cats.pop(name)];
}

function destructivelyRemoveFirstCat(name) {
    [...cats.shift(name)];
}

function appendCat(name) {
    const newCats = [...cats, name];
    return newCats;
}

function prependCat(name) {
    const moreCats = [name, ...cats];
    return moreCats;
}

function removeLastCat() {
    const sliceCat = [...cats.slice(0, 2)];
    return sliceCat;
}

function removeFirstCat() {
    const spliceCat = [...cats.slice(1, 3)];
    return spliceCat;
}

// function removeFirstCat() {
//     const spliceCat = [...cats.splice(1, 3)];
//     return spliceCat;
// }

// Failed attempts at removeLastCat:
// function removeLastCat() {
//     const popCat = [slice(...cats(0, 2)];
//     return popCat;
// }

// function removeLastCat() {
//     const popCat = [...cats.slice(-1)];
//     return popCat;
// }

// cannot read properties of length
// function removeLastCat(name) {
//     const popCats = [...cats.pop(name.length -1)];
//     return popCats;
// }

// Returned each letter in Garfield
// function removeLastCat(name) {
//     const popCats = [...cats.pop(name)];
//     return popCats;
// }

// Failed attempts at appendCat:

// expected [] to have the same ordered members as [ 'Milo', 'Otis', 'Garfield', 'Broom' ]
// function appendCat(name) {
//     return [...cats.push(name)];
// }

// expected undefined to be an array
// function appendCat(name) {
//     [...cats.push(name)];
// }

// expected undefined to be an arra
// function appendCat(name) {
//     const newCats = [...cats.push(name)];
// }

// RangeError: Maximum call stack size exceeded
// function appendCat(name) {
//     const newCats = [...cats.push(name)];
//     return appendCat("Broom");
// }

// Returning cats array, but it wants to see the new cat name added to the end.
// function appendCat(name) {
//     const newCats = [...cats.push(name)];
//     return cats;
// }

// Returning empty array:
// function appendCat(name) {
//     const newCats = [...cats.push(name)];
//     return newCats;
// }