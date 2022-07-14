# Small Javascript taks

Task Description: small tasks practicing on Error.Storages

1. Task 1

Implementing two functions in index.js – visitLink and viewResults.

visitLink function should save to localStorage how many times each link was clicked (visited).

viewResults should display a list how many times each link was visited (see example below) and afterwards clear the storage

![image](https://user-images.githubusercontent.com/87691625/178937395-fbda3916-14e9-405a-ae48-89357b63bbd8.png)

2. Task 2

Implementing PIPE function.

The function is supposed to accept the following arguments: value and a sequence of functions.

Each of the functions should operate on the provided value and pass the output to the other function in a sequence. 

In case provided argument is not a function, pipe should immediately throw an error and stop the execution.

Example:

const result = pipe(

  "john_doe",
  
  replaceUnderscoreWithSpace,
  
  capitalize,
  
  appendGreeting,
  
);

alert(result); // Hello, John Doe!

const result = pipe(

  "john_doe",
  
  replaceUnderscoreWithSpace,
  
  capitalize,
  
  "",
  
);

alert(result); // Provided argument at position 2 is not a function!

