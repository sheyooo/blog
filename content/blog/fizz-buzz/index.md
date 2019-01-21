---
title: Let's make FizzBuzz harder 🤯 😈
date: '2019-01-20T22:00:00.284Z'
shortBrief: Solve the FizzBuzz challenge without using any conditional statements.
---

When you start learning to code, you'll come accross different kinds of practice problems to help learn better. A very popular one is the <a href="https://en.wikipedia.org/wiki/Fizz_buzz" target="_blank" rel="noopener noreferrer">FizzBuzz</a> task.

Solving it the normal way gets boring, so here we're going to look at how much harder the challenge can get.

### Common Approach: Conditional statements allowed
---

##### Problem Statement
> Write a function that accepts a number and prints out **Fizz**, **Buzz** or **FizzBuzz**. Based on the following conditions, if the accepted number is a multiple of **3**, return **Fizz**, it the number is a multiple of **5**, return **Buzz**, if the number is a multiple of **3** and **5**, return **FizzBuzz**, and if the number doesn't meet any of these conditions, return **null** or the accepted number.

##### A common solution

```js
function fizzBuzz(number) {
  if (number % 15 === 0) { // Multiple of 3 && 5, same as multiple of 15
    return 'FizzBuzz';
  }
  if (number % 3 === 0) { // Multiple of 3
    return 'Fizz';
  }
  if (number % 5 === 0) { // Multiple of 5
    return 'Buzz';
  }
  return number;
}
```

### Now the interesting bit:
##### No Conditional statements allowed. Using a dictionary (JS Object)
---

Now without using any conditional statements like, `if`, `switch`, `||`, `&&` or ternary operators.

We can use an object or an array to achieve this, by storing the correct values; *Fizz* or *Buzz* at the corresponding indexes in our array. This means we will use the result from our modulo expression to access our array.

If we are dividing our **number** by **15** ( `n % 15` ), the remainder from the division / modulo operation can not be greater than 15. So we'll have an array of 15 elements. Here's what it would look like.

##### Using an Array
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

##### Alternative: Using a JS Object (Dictionary)
```js
const dict = {
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
```js{2}
function fizzBuzz(n) {
  const dict = // Using either the array or object approach

  return dict[n % 15];
}
```

##### This is what our results should look like...
```js{10,11}
fizzBuzz(15); // FizzBuzz
fizzBuzz(45); // FizzBuzz

fizzBuzz(3); // Fizz
fizzBuzz(9); // Fizz

fizzBuzz(5); // Buzz
fizzBuzz(10); // Buzz

fizzBuzz(7); // 7 If you want the number returned
fizzBuzz(2); // 2
```

Thanks for reading... If you have any other interesting approaches, please get at me on [Twitter](https://twitter.com/sheyooo).