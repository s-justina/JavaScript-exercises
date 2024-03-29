// 1. Question: How would you verify a prime number?

// have to bigger than 1
// have to be divided by itself
// have to be divided by 1

let numbers = Array.from({ length: 21 }).map((number, i) => {
  return i;
});
const isPrime = (numberToCheck) => {
  let isPrime = true;
  // liczby 1 i mniejsze nie są liczbami pierwszymi
  if (numberToCheck < 2) {
    isPrime = false;
  } else {
    // liczby, które się dzielą i mają resztę 0, to takie które się po prostu dzielą, dlatego false
    // (np. 4:2 - reszta jest 0, czyli ładnie się podzieliło, a skoro się podzieliło to znaczy że nie jest liczbą pierwszą)
    for (let i = 2; i < numberToCheck; i++) {
      if (numberToCheck % i === 0) {
        isPrime = false;
      }
    }
  }
  return isPrime;
};
const checkNumbers = numbers.map((number) => {
  return isPrime(number);
});

// console.log('answer ex 1: ', checkNumbers);

// 2. Question: How could you find all prime factors of a number?
// spośród wszystkich dzielników danej liczby, wypisz wszystkie dzielniki które są liczbami pierwszymi.

// funkcja sprawdzająca wszystkie dzielniki podanej liczby
const findAllFactors = (numberToDivide) => {
  let allFactors = [];
  for (let i = 1; i < numberToDivide; i++) {
    if (numberToDivide % i === 0) {
      allFactors = [...allFactors, i];
    }
  }
  return allFactors;
};

const allFactors = findAllFactors(10);

// funkcja sprawdzająca czy wśród dzielników są liczby pierwsze
// filter sprawdza warunek, jeżeli jest true to zwraca nam pożądaną wartość
const filterPrimeNumbers = allFactors.filter((factor) => {
  return isPrime(factor);
});

// console.log('answer ex 2: ', filterPrimeNumbers);

// 3. Question: How would you find the greatest common divisor of two numbers?
// najwyższy wspólny dzielnik

const number1 = 16;
const number2 = 12;

const allFactorsOfNumber1 = findAllFactors(number1);
const allFactorsOfNumber2 = findAllFactors(number2);

const findSameDivisors = () => {
  return allFactorsOfNumber1.filter((factor1, i) => {
    if (allFactorsOfNumber2.includes(factor1)) {
      return factor1;
    }
  });
};

const sameDivisors = findSameDivisors();
const GreatestDivisor = Math.max(...sameDivisors);
// in this case we can use: // const GreatestDivisor = sameDivisors[sameDivisors.length-1];

// console.log('answer ex 3: ', GreatestDivisor);

// 4. Question: How would you reverse a string in JavaScript?

let name = "Justyna";
let reverseString = () => name.split("").reverse().join("");

// console.log('answer ex 4: ', reverseString());

// 5. Question: How would you reverse words in a sentence? Aka Yoda speech!

let sentence = "Aka Yoda speech";
let reverseSentence = () => sentence.split(" ").reverse().join(" ");

// console.log('answer ex 5: ', reverseSentence());

// 6. Question: If you have a string like "I am the good boy".
// How can you generate "I ma eht doog yob"?
// Please note that the words are in place but reverse.

let sentenceToReverseLetters = "I am the good boy";
let wordsInCorrectOrder = sentenceToReverseLetters.split(" ");
let wordsInCorrectOrderReversed = wordsInCorrectOrder.map((word) => {
  return word.split("").reverse().join("");
});
let resultToString = wordsInCorrectOrderReversed.join(" ");

// console.log('answer ex 6: ', resultToString);

// 7. Question: How will you remove duplicate characters from a sting?

const duplicateCharString = "aaabbbsssss";
const removeDuplicate = () => {
  const removedDuplicate = new Set(duplicateCharString.split(""));
  const removedDuplicateString = Array.from(removedDuplicate).join("");
  return console.log("answer ex 7: ", removedDuplicateString);
};
// removeDuplicate();

// 8. Question: How will you verify a word as palindrome?

const word1 = "ala";
const word2 = "maam";
const word3 = "ajwu";
const word4 = "ajwuwJa";
const word5 = "ajwuwsaja";

const checkIsPalindrom = (wordForCheck) => {
  const checkLenghtOfWord = wordForCheck.length;
  const half_length_up = Math.ceil(checkLenghtOfWord / 2);
  const half_length_down = Math.floor(checkLenghtOfWord / 2);
  const wholeWordForCheck = Array.from(wordForCheck);

  // sprawdź czy jest to parzyste słowo
  if (checkLenghtOfWord % 2 === 0) {
    // parzyste
    let leftSide = wholeWordForCheck.splice(0, half_length_up);
    let rightSide = wholeWordForCheck.splice(-half_length_up).reverse();
    compareLetters(leftSide, rightSide);
  } else {
    // nieparzyste
    let leftSide = wholeWordForCheck.splice(0, half_length_down);
    let rightSide = wholeWordForCheck.splice(-half_length_down).reverse();
    compareLetters(leftSide, rightSide);
  }
};

const compareLetters = (leftSide, rightSide) => {
  const resultOfChecking = leftSide.every((letter, i) => {
    return letter.toLowerCase() === rightSide[i].toLowerCase();
  });
  if (resultOfChecking) {
    return console.log("answer ex 8: ", "to jest palindrom");
  } else {
    return console.log("answer ex 8: ", "to NIE jest palindrom!!!!!!!!!!!");
  }
};
// checkIsPalindrom(word5);

// 9. Question: How will you remove duplicates of an array and return an array of only unique elements

const arrayWithDuplicates = [1, 2, 3, 5, 1, 5, 9, 1, 2, 8];
const removedDuplicates = Array.from(new Set(arrayWithDuplicates));
// console.log("answer ex 9: ", removedDuplicates);

// 10. Question: How would you merge two sorted array?
const sorted1 = [0, 3, 7, 15, 14, 16, 18, 19];
const sorted2 = [0, 1, 2, 5, 12, 18, 20, 21];

const bubbleSort = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        const temporaryVal = arr[j + 1];
        arr[j + 1] = arr[j];
        arr[j] = temporaryVal;
      }
    }
  }
  return arr;
};

const mergeAndSortArrs = (arr1, arr2) => {
  const combineArrs = [...arr1, ...arr2];
  return Array.from(new Set(bubbleSort(combineArrs)));
};
// console.log("answer ex 10: ", mergeAndSortArrs(sorted1, sorted2));

// 11. Question: How would you swap two numbers without using a temporary variable?

let a = 0;
let b = 100;

const swapNumbers = (a, b) => {
  //Bitwise operators
  a = a ^ b;
  b = b ^ a;
  return console.log("answer ex 11: ", "a =", a, "b = ", b);
};
// swapNumbers(a, b);

// 12. Question: How could you find the first non repeating char in a string?
const repeatingChars = "aabbbbaaassahopteaa";

const selectFirstNonRepeatedChar = (chars) => {
  const transformedToArr = repeatingChars.split("");
  let firstLetter;

  for (let i = 0; i < transformedToArr.length; i++) {
    const acc = transformedToArr[i];
    const letterOccurrencies = transformedToArr.filter((l) => l === acc);
    if (letterOccurrencies.length === 1) {
      firstLetter = acc;
      break;
    }
  }
  return firstLetter;
};
// console.log("answer ex 12: ", selectFirstNonRepeatedChar(repeatingChars));

// 13. Question: From a unsorted array, check whether there are any two numbers that will sum up to a given number?
const givenNumber = 9;
const unsortedArr = [0, 1, 4, 7, 3, 11, 2, 4, 5]; // there is a pair
const unsortedArr2 = [0, 1]; // there is no pair

const findSummingTwoNumbers = (number, arrToCheck) => {
  let properTwoNumbers = "There is no pair to sum up";
  for (let i = 0; i < arrToCheck.length; i++) {
    const acc = arrToCheck[i];
    const needToFind = number - acc;
    const possibleToSumUp = arrToCheck.find((num) => num === needToFind);
    if (possibleToSumUp !== undefined) {
      properTwoNumbers = [acc, needToFind];
      break;
    }
  }
  return properTwoNumbers;
};
// console.log("answer ex 13: ", findSummingTwoNumbers(givenNumber, unsortedArr2));

// 14. Question: I want this code to log out “doggo”, but it logs out undefined!
let dog = {
  name: "doggo",
  sayName() {
    console.log(this.name);
    return this.name;
  },
};
let sayName = dog.sayName;
// sayName();
//---------------------------------------------------------------------
// We need to bind "this" to a dog object in this way:
let sayName2 = dog.sayName.bind(dog);
// console.log("answer ex 14: ", sayName2());

// 15. Question: I want this code to log out “hey amy”, but it logs out “hey arnold” - why?
// function greet (person) {
//   if (person == { name: 'amy' }) {
//     return 'hey amy'
//   } else {
//     return 'hey arnold'
//   }
// }
// console.log("answer ex 15: ", greet({ name: 'amy' }));
//---------------------------------------------------------------------
// two objects are always different because of their references so we could transform the condition like this:
function greet(person) {
  if (person.name === "amy") {
    return "hey amy";
  } else {
    return "hey arnold";
  }
}

// 16. Question: I want my dog to bark(), but instead, I get an error. Why?
// function Dog(name) {
//   this.name = name;
// }
// Dog.bark = function () {
//   console.log(this.name + " says woof");
// };
// let fido = new Dog("fido");
// fido.bark();
//---------------------------------------------------------------------

// we can add a method by prototype:
// function Dog(name) {
//   this.name = name;
// }
// Dog.prototype.bark = function () {
//   console.log(this.name + " says woof");
//   return this.name + " says woof";
// };
// let fido = new Dog("fido");
//
// console.log("answer ex 16: ", fido.bark());

// or we could change it to class
class Dog {
  constructor(name) {
    this.name = name;
  }
  bark() {
    console.log(this.name + " says woof");
    return this.name + " says woof";
  }
}

let sparky = new Dog("sparky");
// console.log("answer ex 16: ", sparky.bark());

// 17. Question: Suppose an array of numbers is given. Create method that creates a palindrome out of your array.

Array.prototype.toPalindrome = function () {
  const result = this.slice();
  for (let i = this.length - 2; i >= 0; --i) {
    result.push(this[i]);
  }
  return result;
};

const arr = [1, 2, 3];

const arr2 = arr.toPalindrome();

const arr3 = arr2.toPalindrome();
console.log("answer ex 17: ", arr3);
