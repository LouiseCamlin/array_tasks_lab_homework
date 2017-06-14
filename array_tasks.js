var arrayTasks = {

	concat: function (arr1, arr2) {
		var arr3 = arr1.concat(arr2);
		return arr3;
	},

	insertAt: function (arr, itemToAdd, index) {
		arr.splice(index, 0, itemToAdd);
		return arr;
	},

	square: function (arr) {
		return arr.map(function(element){
			return element * element;
		});
	},

	sum: function (arr) {
		total = arr.reduce(function(acc, val) {
			return acc + val; 
		}, 0);
		return total;
	},


	findDuplicates: function (arr) {
		var newArr = [];
		arr.forEach(function (element, index) {
			if (arr.indexOf(element, index + 1) > -1) {
				if (newArr.indexOf(element) === -1) {
					newArr.push(element);
				}
			}
		});
		return newArr;
	},

	removeAndClone: function (arr, valueToRemove) {
    for(var i = 0; i < arr.length; i++){
      if(arr[i] === valueToRemove) {
        arr.splice(i,1);
        i--;
      }
    }
    return arr;
	},

	findIndexesOf: function (arr, itemToFind) {
		var indices = [], i;
		for( i = 0; i < arr.length; i++) {
			if (arr[i] === itemToFind){
				indices.push(i);
			}
		}
		return indices
	},


	// sumOfAllEvenNumbersSquared: function (arr) {
		
	// }

}

module.exports = arrayTasks
