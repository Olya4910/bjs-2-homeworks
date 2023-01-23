"use strict"
function solveEquation(a, b, c) {
  let discriminant
  let arr = [];
  discriminant = b ** 2 - 4 * a *c;
  if (discriminant < 0) {
    arr = [];
  } else if (discriminant == 0) {
    arr = -b / ( 2 * a );
  } else if (discriminant > 0) {
    arr[0] = (-b + Math.sqrt(discriminant) )/(2*a);
    arr[1] = (-b - Math.sqrt(discriminant) )/(2*a);
  }
  return arr;
}
console.log(solveEquation(15, 8, 9));

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  if(isNaN(percent) || isNaN(contribution) || isNaN(amount) || isNaN(countMonths)) {
    return false
  };
  percent = percent / 100 / 12;
  let loanBody;
  let monthlyPayment;
  let grangTotal;
  loanBody = amount - contribution;
  monthlyPayment = loanBody * (percent + (percent / (((1 + percent)**countMonths) - 1)));
  grangTotal = monthlyPayment * countMonths;

  return +grangTotal.toFixed(2)
}