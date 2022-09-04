function pushFront(arr, val) {
    var newArr = [val]; //create a new array instead of altering the input and start with the value we want in the first slot
    for (var i=0; i <arr.length; i++) { //iterate over the initial array
        newArr.push(arr[i]); //put all of those values into the new array
    }
    return newArr; //don't forget to return it!
}

function popFront (arr) {
    var front = arr[0]; //put the variable we want to return in a new variable
    var newArr = []; //create an empty array instead of altering the input
    for (var i=1; i <arr.length; i++) { //iterate over the rest of the array
        newArr.push(arr[i]); //and put it into the new array
    }
    console.log(newArr); //check to make sure the new array doesn't have the first array value
    return front; //return that first value
}

function insertAt (arr, index, val) {
    var newArr = []; //create an empty array instead of altering the input
    for (var i=0; i <arr.length; i++) { //iterate over the initial array
        if (i == index) { // we need to add the value in the array at the given index so we'll check to see if we're in position yet
            newArr.push(val); //and put the value in if we are
            newArr.push(arr[i]); //but also make sure to include what was initially in that position
        }
        else { //and if we aren't at the proper index spot to insert at...
            newArr.push(arr[i]); //...just put that value in
        }
    }
    return newArr; //don't forget to return!
}

