1. Skapa en funktion som tar emot två stycken nummer och returnerar produkten av de två numrena. 

```js
function multiply (num1, num2) {    
    // create variable that holds the multiplication
    const result = num1 * num2;

    // return the value
    return result;
}
```

2. Skapa en funktion som tar emot tre parametrar, två stycken nummer och en operator. Returnera resultatet av den operationen.

```js
function calculate(num1, num2, operator) {
  if (operator === "+") {
    return num1 + num2;
  } else if (operator === "-") {
    return num1 - num2;
  } else if (operator === "/") {
    return num1 / num2
  } else if (operator === "*") {
    return num1 * num2
  }
}

// return-nyckelordet terminerar ( tvångsavslutar ) alltid funktionen oavsett om det kommer kod efteråt.
```

3. Utgå ifrån denna array:

```js
const numbers = [3, 6, 10, 55, 7, 32, 99];
```

Skapa en funktion som retunerar medelvärdet av alla dessa nummer.

```
medelvärdet = totala värdet / antalet värden
```

```js
function average (arrayOfNumbers){
    let totalValue = 0;

    for (let number of arrayOfNumbers) {
        totalValue = totalValue + number;
        // totalValue += number; // same as above
    }

    const average  = totalValue / arrayOfNumbers.length
    return average;
}
```

---

```js
// Skillande mellan två "="-tecken och 3.

1 == 1 true
1 == "1" true // Typ spelar ingen roll här
1 === "1" false // Olika typer, nummer kan inte likställas med en sträng
```