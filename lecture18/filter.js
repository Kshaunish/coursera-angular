var numberArray=[1,2,3,4,5,6,7,8,9,10];
console.log("Number Array : ",numberArray);

function above5Filter(value) {
	return value>5;
}

var filterNumberedArray=numberArray.filter(above5Filter);


/*var filterNumberedArray=numberArray.filter(function (value) {
	return value>5;
});*/

console.log("Filtered Number Array : ",filterNumberedArray);

var shoppingList = [
  "Milk", "Donuts", "Cookies", "Chocolate", "Peanut Butter", "Pepto Bismol", "Pepto Bismol (Chocolate flavor)", "Pepto Bismol (Cookie flavor)"
];

console.log("Shopping List ",shoppingList);

var searchValue = "Bismol";

function containsFilter(value) {
	return value.indexOf(searchValue) !== -1;
}

var searchedShoppingList = shoppingList.filter(containsFilter);

console.log("Searched Shopping List: ", searchedShoppingList);