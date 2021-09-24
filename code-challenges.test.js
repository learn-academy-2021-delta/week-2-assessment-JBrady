// ASSESSMENT 2: Coding practical questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest


// --------------------1) Create a function that takes a number as an argument and decides if the number is evenly divisble by three or not.

// a) Create a test with expect statements for each of the variables provided.

var num1 = 15
// Expected output: "15 is divisible by three"
var num2 = 0
// Expected output: "0 is divisible by three"
var num3 = -7
// Expected output: "-7 is not divisible by three"

// First I'll write a test, starting with the describe() method.
// The describe method lists the name of the function or the name of the test. Here I'm giving it the function name I want to use.
describe("divisibleOrNot", () => {
    // Next I'm using the test() method that describes what the function will do.
    test("takes a number as an argument and decides if the number is evenly divisible by three", () => {
        
      // Last, I'll use 3 expect() methods that will call on the divisibleOrNot() function, and will also add the .toEqual() matcher that will check the expected output of the function return. 
      expect(divisibleOrNot(num1)).toEqual("15 is divisible by three")
      expect(divisibleOrNot(num2)).toEqual("0 is divisible by three")
      expect(divisibleOrNot(num3)).toEqual("-7 is not divisible by three")
    })
})

// Running 'yarn jest' to make sure the test fails on its first iteration. I've observed it successfully fails and throws the error 'divisibleOrNot is not defined'. That means there are no other functions named divisibleOrNot within the code base, so I'm free to use that name for my function.

// b) Create the function that makes the test pass.

// Now that my test is created, I'll write the function so that it takes one argument.
// !important - The function should be generic and dynamic.

// creating the function that takes 1 argument. The argument should be a unique name, not the same as one of the variables declared above.
const divisibleOrNot = (num) => {
    if(num % 3 === 0){
        return `${num} is divisible by three`
    } else if(num % 3 !== 0) {
        return `${num} is not divisible by three`
    }
}




// --------------------2) Create a function that takes in an array of words and returns an array with all the words capitalized.

// a) Create a test with expect statements for each of the variables provided.

var randomNouns1 = ["streetlamp", "potato", "teeth", "conclusion", "nephew"]
// Expected output: ["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"]
var randomNouns2 = ["temperature", "database", "chopsticks", "mango", "deduction"]
// Expected output: ["Temperature", "Database", "Chopsticks", "Mango", "Deduction"]

// Writing the test starting with the describe() method.
// This describe method lists the function name.
describe("capitalizeWords", () => {
    // Using the test() method to describe what the function will do.
    test("takes in an array of words and returns an array with all the words capitalized", () => {
        // Using 2 expect() methods for each of the variables that will call on the capitalizeWords() function. Adding the .toEqual() matcher that checks the expected output of the function return.
        expect(capitalizeWords(randomNouns1)).toEqual("Streetlamp Potato Teeth Conclusion Nephew") 
        expect(capitalizeWords(randomNouns2)).toEqual("Temperature Database Chopsticks Mango Deduction")
    })
})
// Ran 'yarn jest' and observed that the test correctly fails on its first iteration with the error 'capitalizeWords is not defined'.


// b) Create the function that makes the test pass.

// Creating a function that takes an array
const capitalizeWords = (array) => {
    // Need to turn the array into a string first.
    // Declaring a variable called myString to store the string in memory.
    // Then using the .join() getter method to convert the array values into a string.
    // Using .replace() with regular expressions to convert only the first letter in each word to uppercase.
    let myString = array.join(" ").replace(/\w\S*/g, (w) => (w.replace(/^\w/, (c) => c.toUpperCase())))

    // Returning myString so I can get the expected output and have the test pass
    return myString
}
// Test passes

// --------------------3) Create a function that takes in a string and logs the index of the first vowel.

// a) Create a test with expect statements for each of the variables provided.

var vowelTester1 = "learn"
// Expected output: 1
var vowelTester2 = "academy"
// Expected output: 0
var vowelTester3 = "challenges"
// Expected output: 2

// Writing the test starting with the describe() method.
// This describe method lists the function name.
describe("logFirstVowel", () => {
    // Using the test() method to describe what the function will do.
    test("takes in a string and logs the index of the first vowel", () => {
        // Using 3 expect() methods for each of the variables that will invoke the logFirstVowel() function. Adding the .toEqual() matcher that checks the expected output.
        expect(logFirstVowel(vowelTester1)).toEqual(1) 
        expect(logFirstVowel(vowelTester2)).toEqual(0)
        expect(logFirstVowel(vowelTester3)).toEqual(2)
    })
})
// Ran 'yarn jest' and observed that the test correctly fails on its first iteration with the error 'logFirstVowel is not defined'

// b) Create the function that makes the test pass.

// Creating a function that takes a string as a parameter
const logFirstVowel = (string) => {

    // Trying a for loop
    // If i is less than the length of the string, keep looping
    for(i = 0; i < string.length; i++) {

        // Using a regular expression to look for vowels
        if(string.length === string.match(/[aeiou]/)) {
            // If you find a vowel, return the index of that particular character
            var vowelMatch = string.match(/[aeiou]/) // We need to store that character in memory if we're going to be able to use it later
            return string.indexOf(vowelMatch) // Returning the index of that particular character stored in vowelMatch
        }
    }
    // Trying something new I found from google
    // if (string.length == 1) {
    //     var vowels = new Array("a", "e", "i", "o", "u");
    //     var isVowel = false;
    
    //     for (e in vowels) {
    //         if (vowels[e] == char) {
    //         isVowel = true;
    //         }
    //     }
    
    //     return string.indexOf(isVowel);
    // }
    // Nope, not working either.
}

// Been working at this file for a few days now. No luck.
// Running out of time unfortunately. Moving onto code-concepts and interview questions. Will revisit this if I have time later.