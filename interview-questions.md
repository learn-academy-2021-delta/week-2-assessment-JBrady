# ASSESSMENT 2: Interview Practice Questions

Answer the following questions.

First, without external resources. Challenge yourself to answer from memory as if you were in a job interview.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. What is iteration?

  Your answer: Iteration is the process of trying something until an expected result is met. In programming, it's referring to looping through a block of code until a stated result is met.

  Researched answer: Google says "The process where a set of instructions or statements is executed repeatedly for a specified time or until a condition is met". I forgot the "specific time" in my answer. So instead of looping through until you meet a condition, you could loop through until a number of seconds have passed. One scenario would be for a webpage to wait 5 seconds for a user to read a message on the screen, then automatically forward the user to the company's new site (very 90's example, but you get the idea). Mainly though, iteration is used when referring to loops which 'iterate' or loop through the code until a condition (usually truthy) is met. 



2. The JavaScript built in method .map() takes predefined parameters. What are they? Which are required and which are optional?

  Your answer: The .map() method takes in 3 parameters. Only one is required. The first parameter is value. I can't remember the second and third.

  Researched answer: The map method take 3 parameters which are (value, index, array). From what I understand, value is the only required parameter, and hold the value of the current element. Index is an optiobal parameter and is suppossed to hold the index of the current element. Array is also optional, and is used to hold the array. Some sites have the syntax as the following... 
  
  array.map(function(currentValue, index, arr), thisValue)
  
  They list thisValue as another optional parameter thats used to hold teh value thats passed into the function. .map() is a non-mutating method, otherwise known as a getter method, also known as an accessor method.



3. What is object destructuring?

  Your answer: Object destructuring is writing code in a more concise way resulting in less code with the same results.

  Researched answer: Object destructuring is a Javascript feature that lets you take out properties from objects and put them into variables. A clearer way of saying that is it lets you 'extract' properties from objects and 'bind' them into variables. You can extract multiple properties using a single statement. Before object destructuring existed in Javascript (pre-ES2015), you would have to declare each object property with var. If you hade 10 properties, you would need 10 var declarations. With destructuring, you can put them all in a single statement in one line of code.



4. What is the difference between a function and a method?

  Your answer: A function is a block of code that's created to perform a specific action. A method is a built-in function of a language that's used within other functions.

  Researched answer: A function is a block of code thats declared by name and passed paramenters that can return data (if needed). A method is almost identical to a function, except a method is paired with an object. For example, the .lowercase() method needs to be called on a variable. You just call .lowerCase() by itself. If I created a function called lowerCase(), I could simply call that function on it's own and it would work.



5. What is the difference between a class and an object?

  Your answer: A class is a function that creates an instance of an object. An object is something that has key/value pairs.

  Researched answer: If we're talking about classes and objects synonomously, we could say that a class is a template for creating an object, and on object is an instance of that class. You can create many instances of an object using a single class. An intersting thing to note is that a class doesn't allocate space within memory when it's created, but an object does. This seems like it might be good thing to keep in mind when thinking about performance of code that I write.



6. STRETCH: What is hoisting in JavaScript?

  Your answer: I think hoisting is the ability of a function or variable to be called before it's declared. This seems like it could open a can of worms with confusing bugs. I can't think of any reason why you would want this to happen, except maybe if your function is declared in one file, and then is called in a different file. If javascript sees your function call first before its declared, it may not know what to do with it.

  Researched answer: I found a few difference answers that a probably both correct. The first is that 'hoisting' refers to the Javascript behavior in which a variable or function can be used before its declared (like I mentioned above). The other explanation is that it's the process where the Javascript interpreter sets aside memory for function and variable declarations prior to code execution.

  I also found a blog that explained hoisting as a process that moves all the declarations to the top of thier scope. This actually makes more sense. I was misunderstanding hoisting as moving all the declarations to the top of a file in memory, or the top of all the code. But if it's just the top of thier scope, then it seems much more manageable as long as your not using global variables all over the place. 



## Looking Ahead: Terms for Next Week

Research and define the following terms to the best of your ability.

1. Class Inheritance: It's a feature that allows you to use all the functionality from a parent class, and apply it to child classes with the ability to add more functionality to the child.

2. React: A javascript library used for building dynamic user interfaces. It's component-based, meaning you can build seperate pieces of your UI that are independant from other areas of the UI and manage thier own state, then put them together for more complex UI's. It renames properties and calls them 'props', it allows web applications to be dynamic and refresh data without page reloads, and embraces a CS design principle called 'seperation of concerns' (moving CSS from .html files into thier own .css file is an example of this principle).

3. React state: React has a class called the React Component Class. State is an instance of that class. It can be defined as an object with a set of observable properties (also called 'observables') that control the components behavior. The information within the object has the ability to be changed, and this is called its 'state'. State can be changed, and is mutable.

4. React lifecycle methods: Special built-in react methods that can only be used on react class components. A lifecycle is the different stages that an instance of a component goes through (creation, being rendered, being updated, death).

5. DOM: Document Object Model. This is the stucture, framework, and data of a webpage that has been rendered and displayed on your screen. There's also something called the "shadow DOM" which is only the structure, framework and data stored in memory. React uses the shadow DOM to allow data on a webpage to appear without having to manually refresh the page.
