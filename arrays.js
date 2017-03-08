var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

var addElementToBeginningOfArray = ["cat", "dog"]);
const addElementToBeginningOfArrayAgain = ["fish", ...addElementToBeginningOfArray];
return addElementToBeginningOfArrayAgain;

var destructivelyAddElementToBeginningOfArray = ["homo", "hetero"];
destructivelyAddElementToBeginningOfArray.unshift("bi");
return destructivelyAddElementToBeginningOfArray;

var addElementToEndOfArray = ["cat", "dog"];
const addElementToEndOfArrayAgain = [...addElementToEndOfArray, "fish"];
return addElementToEndOfArrayAgain;

var destructivelyAddElementToEndOfArray = ["homo", "hetero"];
destructivelyAddElementToEndOfArray.push("bi");
return destructivelyAddElementToEndOfArray;

var accessElementInArray = ["ho", "hor", "hors"];
console.log(accessElementInArray[2]);

const destructivelyRemoveElementFromBeginningOfArray = ["give", "peace", "chance"];
destructivelyRemoveElementFromBeginningOfArray.shift();
return destructivelyRemoveElementFromBeginningOfArray;

var removeElementFromBeginningOfArray = ["so", "dang", "stupid"];
removeElementFromBeginningOfArray.slice(1);
return removeElementFromBeginningOfArray;

var destructivelyRemoveElementFromEndOfArray = ["plus", "minus", "multiply"];
destructivelyRemoveElementFromEndOfArray.pop();
return destructivelyRemoveElementFromEndOfArray;

var removeElementFromEndOfArray = ["my", "ym", "fun"];
removeElementFromEndOfArray.slice(0, removeElementFromEndOfArray.length - 1);
return removeElementFromEndOfArray;
