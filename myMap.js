// See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Map

function myMap(arr, callback) {
	//create new array 
	var newArray = [];
	//loop through array
	for(let i = 0; i < arr.length; i++){
	//push the new array into the variable set
	newArray.push(callback(arr[i], i, arr));
	}
	return newArray;
}

/*
 Best if you don't code out here.
 If you want to check your code, use `index.js`!
*/







// export this function (you can ignore this for now)
module.exports = myMap;
