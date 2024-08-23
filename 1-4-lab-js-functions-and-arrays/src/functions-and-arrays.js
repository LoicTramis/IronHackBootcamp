// Iteration 1 | Find the Maximum
function maxOfTwoNumbers(a, b) {
    return a < b ? b : a;
}

// Iteration 2 | Find the Longest Word
const words = ["mystery", "brother", "aviator", "crocodile", "pearl", "orchard", "crackpot"];

function findLongestWord(words) {
    let longestWord = "";
    if (words.length === 0) {
        return null;
    }
    for (let index = 0; index < words.length; index++) {
        longestWord = longestWord.length < words[index].length ? words[index] : longestWord;
    }
    return longestWord;
}

// Iteration 3 | Sum Numbers
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function sumNumbers(numbers) {
    let sum = 0;
    for (let index = 0; index < numbers.length; index++) {
        sum += numbers[index];
    }
    return sum;
}

// Iteration 4 | Numbers Average
const numbers2 = [2, 6, 9, 10, 7, 4, 1, 9];

function averageNumbers(numbers) {
    if (numbers.length === 0) {
        return 0;
    }
    const sum = sumNumbers(numbers);
    return sum / numbers.length;
}

// Iteration 5 | Find Elements
const words2 = ["machine", "subset", "trouble", "starting", "matter", "eating", "truth", "disobedience"];

function doesWordExist(words, word) {
    if (words.length === 0) {
        return null;
    }
    for (let index = 0; index < words.length; index++) {
        if (word === words[index]) {
            return true;
        }
    }
    return false;
}
