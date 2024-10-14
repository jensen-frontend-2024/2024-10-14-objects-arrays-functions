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

#### Simple Array methods

#### `includes(element) => boolean`

Checks if a value exists or not in an array. Takes an argument which is the element we are searching for, and it will return `true` or `false`.

```js
const cities = ["Stockholm", "Malmö", "London", "New York"];

const sthlmExists = cities.includes("Stockholm");
console.log(sthlmExists) // true

```

#### `indexOf(element) => number`

Finds the index of the element you are searching for, or not. Returns the index if it finds it, otherwise it will return -1.

```js
const numbers = [ 4, 10, 32, 2, 3, 99];

const indexOf32 = numbers.indexOf(32);
console.log(indexOf32); // 2
```

#### `push(newElement, newElement1...) => number`

This method adds an element/item to the array, at the end. it takes one or more argumnets an  returns the new length of the array. Observe, the return value in this method is rarely used.

```js
const cars = ["Volvo", "Saab", "Audi"];

// Add "Ford" to the array;
cars.push("Ford");

console.log(cars) // ["Volvo", "Saab", "Audi", "Ford"]

// Add "Mercedes" and "BMW" in one go
cars.push("Mercedes", "BMW");

console.log(cars)
// ["Volvo", "Saab", "Audi", "Ford", "Mercedes", "BMW"]
```

#### `pop() => element/item `

Pop removes the last element of the array, and returns that element. Return value is rarely used here as well.

```js
const cars = ["Volvo", "Saab", "Audi", "Ford", "Mercedes", "BMW"]

cars.pop()

console.log(cars)
// ["Volvo", "Saab", "Audi", "Ford", "Mercedes"], 

const removedCar = cars.pop()
console.log(removedCar) // "Mercedes"
```

Array methods/functions are used daily when working as a developer. You don't have to know them all but you should know that they exist and can help you solve entire problems or parts of the problems.

### Looping through arrays

The most basic way to loop through an array is with a `for-of..loop` of a `for-loop` with index. 

#### `for-loop` with index.

Syntax: `for ( initialValue; condition; change) { codeblock}`

A more common usage of the syntax is like this;

```js
for (let i = 0; i < 10; i++) {
    // Code to execute each loop.
}
```

Let's see with an example

```js
const cars = ["Volvo", "Saab", "Opel"];

for (let i = 0; i < cars.length; i++) {
    console.log(cars[i])
}
```

This loop is great when we want to do something that includes the index of each element in the array.

But if we don't need the index value, we can just use the other for loop that exists, the `for-of.. loop`.

Syntax `for (let variable 'of' array)`

```js
const cars = ["Volvo", "Saab", "Opel"];

for (let car of cars) {
    console.log(car)
}
```

This loop is more common because there is no risk to loop over elements that doens't exist, and the syntax is clearer and mor readable.

### Objects

#### Defining objects

Think of an object as a "thing" that exists in the real world. A car, a house, a boat, a person, a student, a teacher, a coach. Let's take a car for example.

```js
const carColor = "Silver";
const carModel = "V70";
const carMake = "Volvo"
const year = 2016;

console.log( carColor, carModel, carMake, year);
```

This is annoying, so many variables to handle. Why? Let's create an object instead!

```js
const car = {
    color: "Silver",
    model: "V70",
    make: "Volvo",
    year: 2016,
}

console.log(car);
```

So we collect values that relate to eachother and put them in an object that we can use. Let's do a house for instance.

```js
const house = {
    color: "green",
    floors: 2,
    size: 400,
    hasBasement: false,
    hasAttic: true,
    address: "Drottinggatan 10, Stockholm"
}
```

Above we have a house with different attributes of different types. The address is a string but it contains detailed information of the address that could be put in their own attributes, like `street`, `streetNumber` and `city` in this case. But we can also put them in their own object. This is called nested objects, or object nesting.

```js
const myAddress = {
    street: "Drottinggatan",
    streetNumber: 10,
    city: "Stockholm",
}
```

Now put this `myAddress` inside the house object.

```js
const house = {
    color: "green",
    floors: 2,
    size: 400,
    hasBasement: false,
    hasAttic: true,
    address: myAddress
}
```

An object can also includ arrays. Let's update the color attribute

```js
const house = {
    color: ["green", "white", "black"],
    floors: 2,
    size: 400,
    hasBasement: false,
    hasAttic: true,
    address: myAddress
}
```

#### Editing objects

To edit objects we can use two syntaxes, what is called dot-notation and the other one doesn't have name but I call the "array-like-syntax".

`dot-notation`

We have a house, we want to update the floors value.

```js
const house = {
    color: ["green", "white", "black"],
    floors: 2,
    size: 400,
    hasBasement: false,
    hasAttic: true,
}

house.floors = 3;

console.log(house) // the floor value will be 3.

// This wil also work

house.floors = "four";

// Changing type is okay but not recommended.
```

`Array-like-sytax` _( in lack of a better term)_

```js
const house = {
    color: ["green", "white", "black"],
    floors: 2,
    size: 400,
    hasBasement: false,
    hasAttic: true,
}

house["size"] = 500;
```

When using the array-like-syntax it has to be a string, even though we don't add "strings" as keys in the object. Keys are the name of the attributes _( to the left )_ and values are the values of the attritbues _( to the right )_. They are commonly called key/value-pairs.