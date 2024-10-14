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

  return undefined;
}