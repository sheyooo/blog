---
title: FizzBuzz Quiz (Don't use conditional statements)
date: '2019-01-20T22:00:00.284Z'
---

When you start out programming and practicing or honing your programming skills, you'll come accross different kinds of problems to solve. A very common programming quiz is the <a href="https://en.wikipedia.org/wiki/Fizz_buzz" target="_blank" rel="noopener noreferrer">FizzBuzz</a> task. Solving it the basic way is boring, so here we're going to look at how much harder the challenge can get.

###Difficulty Level #1: Conditional statements allowed
---

Write a function that accepts a number and prints out **Fizz**, **Buzz** or **FizzBuzz**. Based on the following conditions, if the accepted number is a multiple of **3**, return **Fizz**, it the number is a multiple of **5**, return **Buzz**, if the number is a multiple of **3** and **5**, return **FizzBuzz**, and if the number doesn't meet any of these conditions, return the accepted number.

###Solution

```js
function fizzBuzz(number) {
  // Instead of (number % 3 === 0 && number % 5 === 0)
  // we use (number % 15 === 0) because any multiple of 15
  // is a multiple of 3 and 5. 3 * 5
  if (number % 15 === 0) {
    return 'FizzBuzz';
  }
  if (number % 3 === 0) {
    return 'Fizz';
  }
  if (number % 5 === 0) {
    return 'Buzz';
  }
  return number;
}

fizzBuzz(15); // FizzBuzz
fizzBuzz(45); // FizzBuzz

fizzBuzz(3); // Fizz
fizzBuzz(9); // Fizz

fizzBuzz(5); // Buzz
fizzBuzz(10); // Buzz

fizzBuzz(7); // 7
fizzBuzz(2); // 2
```

###Difficulty Level #2: No Conditional statements allowed. Using a dictionary (JS Object)
---

Now without using any conditional statements like, `if`, `switch`, `||`, `&&` or ternary operators.

I recently found out there's a term for this approach it's called
<a href="https://en.wikipedia.org/wiki/Precomputation" target="_blank" rel="noopener noreferrer">Precomputation</a>. In Mathematics, this can be regarded as something similar to a *Table of Logarithms*.

#####Using an Array
```js
// If you prefer you can replace "null" with number(from the parameter)
const dict = [
  'FizzBuzz', // when result from n % 15 === 0
  null,       // when result from n % 15 === 1
  null,       // when result from n % 15 === 2
  'Fizz',     // when result from n % 15 === 3
  null,       // when result from n % 15 === 4
  'Buzz',     // when result from n % 15 === 5
  'Fizz',     // when result from n % 15 === 6
  null,       // when result from n % 15 === 7
  null,       // when result from n % 15 === 8
  'Fizz',     // when result from n % 15 === 9
  'Buzz',     // when result from n % 15 === 10
  null,       // when result from n % 15 === 11
  'Fizz',     // when result from n % 15 === 12
  null,       // when result from n % 15 === 13
  null,       // when result from n % 15 === 14
];
```

#####Using a JS Object (Dictionary)
```js
let dict = {
  0:  'FizzBuzz', // when result from n % 15 === 0
  3:  'Fizz',     // when result from n % 15 === 3
  5:  'Buzz',     // when result from n % 15 === 5
  6:  'Fizz',     // when result from n % 15 === 6
  9:  'Fizz',     // when result from n % 15 === 9
  10: 'Buzz',     // when result from n % 15 === 10
  12: 'Fizz',     // when result from n % 15 === 12
};
```

##### Now you can use either the array or object approach in a function like this
```js{6}
function fizzBuzz(n) {
  const dict = [
    'FizzBuzz', n, n, 'Fizz', n, 'Buzz', 'Fizz', n, n, 'Fizz', 'Buzz', n, 'Fizz', n, n
  ];

  return dict[n % 15];
}
```