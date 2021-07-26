//Palindrome

function checkPalindrome(str) {

    const len = string.length;

    for (let i = 0; i < len / 2; i++) {

        if (string[i] !== string[len - 1 - i]) {
            return 'It is not a palindrome';
        }
    }
    return 'It is a palindrome';
}

string = 'mom';

value = checkPalindrome(string);

console.log(value);

//

//Remove Duplicates

//Example: ["John", "Mary", "Alex", "Steve", "Mary", "John"]

//Result should be: ["John","Mary","Alex","Steve"] 

const arr = ["John", "Mary", "Alex", "Steve", "Mary", "John"] ;

const uniqueArr = arr.filter((value, index) => {
  return arr.indexOf(value) === index;
});
console.log(uniqueArr);

//

//Return True or False

console.log(arr.includes("John"))
console.log(arr.includes("Mary"))
console.log(arr.includes("Joe"))
console.log(arr.includes("Oscar"))

//

//Find the largest number in the array.
//Find the smallest number in the array.

console.log(Math.max(12, 56, 89));

console.log(Math.min(8, 2, 6));

//

//FizzBuzz App

let number = 15

if (number % 3 === 0 && number % 5 === 0) {
    console.log("FizzBuzz");
} else if (number % 5 === 0) {
    console.log("Buzz");
} else if (number % 3 === 0) {
    console.log("Fizz");
} else {
    console.log(number)
}

//

//Even or Odd
// number=15 

if(number % 2 == 0) {
    console.log("Even");
}
else {
    console.log("Odd");
}

//

//Ascending and Descending

const newArray= [3,4,56,7,8,1];
newArray.sort(function(a, b){return a-b});
console.log(newArray)

const newerArray = [3,4,56,7,8,1];
newerArray.sort(function(a, b){return b-a});
console.log(newerArray)

//

//Bank Account


class BankAccount {
    constructor(balance, accountType) {
        this.balance = 100
        this.accountType = accountType
        this.firstName = ""
        this.lastName = ""
        this.middleName = ""
        this.status = True
    }
    deposit(amount) {
        this.balance + deposit()
    }

    withdraw(amount) {
        this.balance - withdraw()
    }
}





