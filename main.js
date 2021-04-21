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

// 10. How would you merge two sorted array?
const sorted1 = [0, 3, 7, 15, 14, 16, 18, 19];
const sorted2 = [0,1, 2, 5, 12, 18, 20, 21];

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
  return Array.from(new Set(bubbleSort(combineArrs)))
};
console.log("answer ex 10: ", mergeAndSortArrs(sorted1, sorted2));
