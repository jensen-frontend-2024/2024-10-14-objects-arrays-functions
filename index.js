function multiply(num1, num2) {
  // code to solve the question

  // create variable that holds the multiplication
  const result = num1 * num2;

  // return the value
  return result;
}

function calculate(num1, num2, operator) {
  if (operator === "+") {
    return num1 + num2;
  } else if (operator === "-") {
    return num1 - num2;
  } else if (operator === "/") {
    return num1 / num2;
  } else if (operator === "*") {
    return num1 * num2;
  }
}

function average(arrayOfNumbers) {
  let totalValue = 0;

  for (let number of arrayOfNumbers) {
    totalValue = totalValue + number;
    // totalValue += number; // same as above
  }

  const average = totalValue / arrayOfNumbers.length;
  return average;
}