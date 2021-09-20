// ASSESSMENT 1: Coding conceptual questions

// Examine the following examples.

// First, predict the outcome based on your understanding of the code.
// Then, uncomment the console.log() and verify the output. Briefly explain why your initial answer was correct or incorrect.

// --------------------1) What will this log?

// var cohort = "Delta 2021"
// console.log(cohort.split(""))

// a) Your answer: ["D", "e", "l", "t", "a", " ", "2", "0", "2", "1"]
//    .split is a getter (accessor) method that converts a string into an array. This should return the string as a single array, and each letter will be put in its own index with each letter as its value.
// 
// b) Verify and explain: I was correct, console.log returns ['D', 'e', 'l', 't', 'a', ' ', '2', '0', '2', '1'] 
//    The .split() method does indeed convert a string to an array. Each letter becomes a value of its index, including the space between Delta and 2021.


// --------------------2) What will this log?

// const greeter = (name) => {
//   `Hello, ${name}!`
// }
// console.log(greeter("LEARN Student"))

// a) Your answer: 'undefined'
//    The function doesn't have a return keyword, and won't return anything.

// b) Verify and explain: I was correct. In order for this function to work as intended, it would need a return keyword.
//    The following would work...
      // const greeter = (name) => {
      //   return `Hello, ${name}!`
      // }
      // console.log(greeter("LEARN Student"))


// --------------------3) What will this log?

// var multBy2 = [4, 5, 6, 7, 8].map(value => value * 2)
// console.log(multBy2)

// a) Your answer: [8, 10, 12, 14, 16]
//    This is declaring a variable named multBy2 and assigning it the value of an array. The .map() method returns each value of the array and takes 'value' as a parameter. Value is being multiplied by 2, so I think each index in the array will be multiplied by 2.

// b) Verify and explain: I was correct on the output. But it's more correct to say, the .map() function iterates through an array and returns a new array of the same length. In this case, an arrow function is being used which is why there's no return keyword. The .map() function still takes the value of the array and multiplies it by 2.


// --------------------4) What will this log?

// var oddsOnly = [11, 12, 13, 14, 15].filter(value => value % 2 === 0)
// console.log(oddsOnly)

// a) Your answer: [12, 14]
//    This should return an array with only numbers that are divisible by 2.

// b) Verify and explain: I was correct. This is using the .filter() function that loops through an array and only returns values that satisfy the condition. In this case, the condition is any value that has a remainder of 0 when divided by 2.


// --------------------5) What will this log?

// class Learn {
//   constructor(name){
//     this.student = name,
//     this.cohort = "Delta",
//     this.year = 2021
//   }
// }
// var learnStudent = new Learn("George")
// console.log(learnStudent)

// a) Your answer: ["George", "Delta", 2021] 
//    The variable learnStudent is assigned to a new class called Learn. Learn takes in the parameter name, which is also the value of this.student key. Using the argument "George" will assign that value to this.student key resulting in the predicted output.
// b) Verify and explain: I was wrong. The actual output is...
//    Learn { student: 'George', cohort: 'Delta', year: 2021 }
//    This is a class called Learn. This class contains an object and returns both the key and value. I only returned the value in my answer above. I also used square brackets instead of curly brackets. Square brackets are used for arrays (which this is not). Curly brackets are used for objects.
