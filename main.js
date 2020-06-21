// 1. Question: How would you verify a prime number?

// have to bigger than 1
// have to be divided by itself
// have to be divided by 1

let numbers = Array.from({length:21}).map((number,i)=>{
        return i
    }
);

const isPrime = (numberToCheck)=>{
    let isPrime = true;
    // liczby 1 i mniejsze nie są liczbami pierwszymi
    if(numberToCheck < 2){
        isPrime = false
    } else {
        // liczby, które się dzielą i mają resztę 0, to takie które się po prostu dzielą, dlatego false
        // (np. 4:2 - reszta jest 0, czyli ładnie się podzieliło, a skoro się podzieliło to znaczy że nie jest liczbą pierwszą)
        for(let i=2; i<numberToCheck ;i++){
            if(numberToCheck%i === 0){
                isPrime = false
            }
        }
    }
    return isPrime
};

const checkNumbers = numbers.map(number=>{
    return isPrime(number)
});

// 2. Question: How could you find all prime factors of a number?
// spośród wszystkich dzielników danej liczby, wypisz wszystkie dzielniki które są liczbami pierwszymi.


// funkcja sprawdzająca wszystkie dzielniki podanej liczby
const findAllFactors = (numberToDivide)=>{
    let allFactors = [];
    for(let i =1; i<numberToDivide; i++){
        if(numberToDivide%i === 0){
            allFactors = [...allFactors, i]
        }
    }
    return allFactors
};

const allFactors = findAllFactors(10);
// funkcja sprawdzająca czy wśród dzielników są liczby pierwsze
// filter sprawdza warunek, jeżeli jest true to zwraca nam pożądaną wartość
const filterPrimeNumbers = allFactors.filter(factor=>{
    return isPrime(factor)
});

// 3. Question: How would you find the greatest common divisor of two numbers?
// najwyższy wspólny dzielnik

const number1 = 16;
const number2 = 12;

const allFactorsOfNumber1 = findAllFactors(number1);
const allFactorsOfNumber2 = findAllFactors(number2);

const findSameDivisors = ()=>{
     return allFactorsOfNumber1.filter((factor1,i)=>{
        if(allFactorsOfNumber2.includes(factor1)){
            return factor1
        }
    })
};
const sameDivisors = findSameDivisors();
const GreatestDivisor = sameDivisors[sameDivisors.length-1];

// 4. Question: How would you reverse a string in JavaScript?

let name= "Justyna";
let reverseString = ()=> name.split('').reverse().join('');

// 5. Question: How would you reverse words in a sentence? Aka Yoda speech!

let sentence = 'Aka Yoda speech';
let reverseSentence = ()=>sentence.split(' ').reverse().join(' ');
// reverseSentence()

// 6. Question: If you have a string like "I am the good boy".
// How can you generate "I ma eht doog yob"?
// Please note that the words are in place but reverse.

let sentenceToReverseLetters = "I am the good boy";
let wordsInCorrectOrder = sentenceToReverseLetters.split(' ');
let wordsInCorrectOrderReversed = wordsInCorrectOrder.map(word =>{
    return word.split('').reverse().join('')
});
let resultToString = wordsInCorrectOrderReversed.join(' ');

// 7. Question: How will you remove duplicate characters from a sting?

const duplicateCharString = "aaabbbsssss";
const removeDuplicate = ()=>{
    const removedDuplicate = new Set(duplicateCharString.split(''));
    const removedDuplicateString= Array.from(removedDuplicate).join('');
    return console.log('to jest zwracane z funkcji:', removedDuplicateString)
};
// removeDuplicate();

// 8. Question: How will you verify a word as palindrome?

const word1 = "ala";
const word2 = 'maam';
const word3 = 'ajwu';
const word4 = 'ajwuwJa';
const word5 = 'ajwuwsaja';

const checkIsPalindrom = (wordForCheck)=>{
    const checkLenghtOfWord = wordForCheck.split('').length;
    const half_length_up = Math.ceil(checkLenghtOfWord / 2);
    const half_length_down = Math.floor(checkLenghtOfWord / 2);
    const wholeWordForCheck = Array.from(wordForCheck);

    // sprawdź czy jest to parzyste słowo
    if(checkLenghtOfWord%2 === 0){
        // parzyste
        let leftSide = wholeWordForCheck.splice(0,half_length_up);
        let rightSide = wholeWordForCheck.splice(-half_length_up ).reverse();
        compareLetters(leftSide, rightSide);
    } else {
        // nieparzyste
        let leftSide = wholeWordForCheck.splice(0,half_length_down);
        let rightSide = wholeWordForCheck.splice(-half_length_down ).reverse();
        compareLetters(leftSide, rightSide);
    }
};

const compareLetters = (leftSide, rightSide)=>{
    const resultOfChecking = leftSide.every((letter,i)=>{
        return letter.toLowerCase() === rightSide[i].toLowerCase()
    });
    if(resultOfChecking){
        return console.log('to jest palindrom');
    } else{
        return console.log('to NIE jest palindrom!!!!!!!!!!!')
    }
};
checkIsPalindrom(word4);

// 9. Question: How will you remove duplicates of an array and return an array of only unique elements
