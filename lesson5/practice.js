// реалізувати реверс стрінги (вивод в зворотньому порядку)

let originalString = "Programming is fun";
let reversedString = "";

for (let i = originalString.length - 1; i>=0; i--){
    reversedString += originalString[i];
}

console.log("\x1b[35m", reversedString);

// реалізувати функцію поліндром (коли в обидва боки одинакова стрінга)

function isPalindrome(str){
    str =str.replace(/[^a-zA-Z]/g, '').toLowerCase();
    let reversedStr = str.split('').reverse().join('');
    return str === reversedStr;
}

console.log(isPalindrome("racecar"));
console.log(isPalindrome("hello"));
console.log(isPalindrome("radar"));
console.log(isPalindrome("plan"));

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9,  10];
let evenNumbers = [];

for (let i = numbers.length - 1; i >=0; i--){
    if (numbers[i] % 2 === 0) {
        evenNumbers.push(numbers[i]);
    }
}

console.log(evenNumbers);






