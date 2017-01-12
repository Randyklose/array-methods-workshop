/*## Only the pos
Write a function called `printPositives` that takes an array and uses the `forEach` method
to **print** only the positive numbers.*/

function printPositives() {
    var array= [2, 4, -6, -8, 10];
    array.forEach(function(num) {
        if(num > 0) {
            console.log(num);
        }
    })
}
printPositives();

/*## Get positive
Similar to the previous exercise, write a function called `getPositives` that takes an array and uses the `filter` method to **return a new array** with only the positive numbers.

## Filter it out
Re-do exercise 1 by first filtering the input array, and then printing the numbers from the filtered array. Your code will look something like: `return arr.filter(...).forEach(...)`.

## Filter Array
Write a function called `filterArray` that takes a callback function and an array as arguments. Your `filterArray` function should return a new array that contains only the elements where the callback function returns `true`.

**NOTE**: This is a **trick question**. The answer is a one-liner and you are allowed to use `array.filter` :)

## The Longest Word
Write a function called `longestWord` that takes a string as argument, and returns the longest word in the string. You should use `Array.prototype.reduce` to do your work.

**Hint**: You can use `String.prototype.split` to split the string into an array of words.

## I'd like to buy a vowel
Write a function called `countVowels` that takes a string and returns the number of vowels in the string. You should use `Array.prototype.reduce` to do your work.

For the string `"The quick brown fox"`, the output should be `5` because there is one `e`, one `u`, one `i` and two `o`s.

**Hint**: You can use `String.prototype.split` again. There is a way to use it to split a string by character. Try to Google it :)

**Hint 2**: You can create an array of vowels and use `Array.prototype.indexOf` to check if the current letter is a vowel.

## High? Low?
Write a function called `highLow` that takes an array of numbers, and returns an object with a property `highest` containing the highest number, and a property `lowest` containing the lowest number, using `Array.prototype.reduce`.

For example, starting with `[1, -10, 20, 40, 5]`, your function should return `{highest: 40, lowest: -10}`.

**Hint**: Javascript has a special value called `Infinity`, which is higher than any other number. See if you can initialize your reduce accumulator with `Infinity` and `-Infinity` :)

## Wheel of Fortune
Write a function called `countChars` that takes a string, and returns an object where the keys are letters, and the value is the number of times that letter appears.

For example, with input "hello world", the output should be:

```json
{
  "h": 1,
  "e": 1,
  "l": 3,
  "o": 2,
  "w": 1,
  "r": 1,
  "d": 1
}
```

**NOTE**: Unlike arrays, objects don't have any ordering on them. When you print your object on the console, your keys may be displayed in a different order, and it does not matter.

## Functional Programming
Let's take a break from calling array methods and think about a certain situation that occurs with the `filter` method. `Array.prototype.filter` will filter out elements where the callback function returns a falsy value. What if we wanted to do the opposite, and filter out elements which return a truthy value? Here's an example:

```javascript
function isEven(num) {
  return num % 2 === 0;
}

var numbers = [4,8,15,16,23,42];
var evenNumbers = numbers.filter(isEven);
```

If we want to filter for odd numbers, we have to create a new function that returns true if a number is odd. Here's one way:

```javascript
function isOdd(num) {
  return num % 2 === 1;
}
```

But we can do better, and re-use the `isEven` function that we had before:

```javascript
function isOdd(num) {
  return !isEven(num);
}
```

That's great! It's even a bit more clearer, and we don't have to rewrite the logic. Here's another example:

```javascript
function isEmpty(someList) {
  return list.length === 0;
}

function isNotEmpty(someList) {
  return !isEmpty(list);
}
```

There's a common pattern repeating itself here: whenever we want to create a function that negates the result of another function, we're simply calling the original function with the same parameters, and prefixing the call with a `!`. This will invert the boolean result from the original function, giving us exactly what we need.

However, we can do better than writing out a new function manually every time we want to create a negated version of a function. Let's use higher-order functions to do just that.

In this exercise, **your goal is to create a `negate` function**. `negate` takes one parameter: another function. `negate` should **return a function** that, when called, will return the opposite of what the input function would return on the same input.

To make things simpler, **you can assume that the original function only takes one parameter**. Here's how I should be able to use your code:

```javascript
function negate(fn) {
  // your solution goes here
}

// Original functions
function isEven(num) {
  return num % 2 === 0;
}
function isEmpty(someList) {
  return someList.length === 0;
}

// New functions
var isOdd = negate(isEven);
var isNotEmpty = negate(empty);

[1,2,3].filter(isEven) // [2]
[1,2,3].filter(isOdd) // [1,3]
```
*/