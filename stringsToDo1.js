function removeBlanks(str) {
    let newStr = '';
    for (let letter in str) {
        if (str[letter] !== ' '){
            newStr += str[letter];
        }
    }
    return newStr;
}
console.log(removeBlanks(" Pl ayTha tF u nkyM usi c "));

function getDigits(str) {
    let digits = '';
    for ( let char in str) {
        if (isNaN(str[char]) == false) {
            digits += str[char];
        }
    }
    return digits;
}
console.log(getDigits("abc8c0d1ngd0j0!8"));

function acronym(str) {
    let acronym = '';
    const words = str.split(' ');
    let temp = '';
    for (let word in words) {
        temp = words[word];
        if (temp !== ' ') {
            temp = temp.toUpperCase();
            acronym += temp[0];
        }
    }
    return acronym;
}
console.log(acronym("Live from New York, it's Saturday Night!"))

function countNonSpaces(str) {
    let count = 0;
    for (let char in str) {
        if ( str[char] !== ' ') {
            count ++;
        }
    }
    return count;
}
console.log(countNonSpaces("Hello world !"))

function removeShorterStrings (strings, val) {
    let newArr = [];
    let temp = '';
    for ( let string in strings) {
        temp =strings[string]
        if (temp.length >= val ) {
            newArr = [...newArr, strings[string]];
        }
    }
    return newArr;
}
console.log(removeShorterStrings(['There', 'is', 'a', 'bug', 'in', 'the', 'system'], 3))