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

  return undefined;
}

// return-nyckelordet terminerar ( tvångsavslutar ) alltid funktionen oavsett om det kommer kod efteråt.
```

3. 

---

```js
// Skillande mellan två "="-tecken och 3.

1 == 1 true
1 == "1" true // Typ spelar ingen roll här
1 === "1" false // Olika typer, nummer kan inte likställas med en sträng
```