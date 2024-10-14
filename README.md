# Objects, arrays and functions.

A coherent code-along on objects, arrays and functions and how we can use them together to solve things.

## Array

### Define Arrays

What is an array? A collection data. 
 
```js
const numbers = [ 4, 10, 32, 2, 3, 99];
```

Always use names in plural, and use square brackets to containt the data. The above is an array with number. We can as easily create arrays with strings instead.

```js
const cities = ["Stockholm", "Malmö", "London", "New York"];
```

But in JS, the types of the values do not have the same. We can mix and match however we would like. 

```js
const randomValues = [4, "Niklas", true, 90.5, "Nils"];
```

So even if we can mix and match, doesn't mean we should. Always try to keep them clean and only containt one type of value. Either numbers, strings, boolean and so on. 

### Maniuplating arrays

#### Getting values

How do we get a value from an array? There are several ways, the first is but using index.

```js
const cities = ["Stockholm", "Malmö", "London", "New York"];

// We want to write Malmö to the console.
const mlm = cities[1]
console.log(mlm); // Malmö
```

Arrays are index based which means every element in an array has a corresponding index. Remember, it always starts at 0.

The other way is to use a mehthod to access it.

It's called `at()`. This method exists on every array that we create by default.

```js
const sthlm = cities.at(0);
console.log(sthlm) // Stockholm
```

The difference here is that `at()` is a newer way of getting values from an array, but it also works with negative values, which means ut counts from the end of the array instead. 

#### Editing values

We edit values by unsing the same "tools" as above. With index or the `at()` method. Let's change the value "London" to "Glasgow"

```js
const cities = ["Stockholm", "Malmö", "London", "New York"];

cities[2] = "Glasgow";

console.log( cities[2] ); // Glasgow
```

#### Array methods

#### `includes()`

Checks if a value exists or not in an array. Will return `true` or `false`.

```js
const cities = ["Stockholm", "Malmö", "London", "New York"];

const sthlmExists = cities.includes("Stockholm");
console.log(sthlmExists) // true

```

#### `indexOf()`

Finds the index of the element you are searching for, or not. Returns the index if it finds it, otherwise it will return -1.

```js
const numbers = [ 4, 10, 32, 2, 3, 99];

const indexOf32 = numbers.indexOf(32);
console.log(indexOf32); // 2
```

#### 