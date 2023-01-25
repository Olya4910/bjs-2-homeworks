function getArrayParams(...args) {
  let min = args[0];
  let max = args[0];
  let sum = args[0];
  let avg;

  for (let i = 1; i < args.length; i++ ) {
    if (args[i] > max) {
      max = args[i];
    } 
    if (args[i] < min) {
      min = args [i];
    }
    sum = sum + args[i];
  }
  avg = sum / 2;

  return { min: min, max: max, avg: +avg.toFixed(2) };
}

function summElementsWorker(...arr) {
  if (arr.length === 0) {
    return 0;
    }
  let total = arr.reduce(
    function (sum, arguments) {
      return sum + arguments
    }
  );
  return total;
}


function differenceMaxMinWorker(...arr) {
  if (arr.length === 0) {
    return 0;
    }
let max = Math.max(...arr);
let min = Math.min(...arr);  
let diff = max - min;
  return diff
}

function differenceEvenOddWorker(...arr) {
  if (arr.length === 0) {
  return 0;
  }
  let sumEvenElement = 0;
  let sumOddElement = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 != 0) {
      sumOddElement = arr[i] + sumOddElement;
    } else if (arr[i] % 2 == 0) {
      sumEvenElement = arr[i] + sumEvenElement;
    }
  }
  return sumEvenElement - sumOddElement;
}

function averageEvenElementsWorker(...arr) {
  if (arr.length === 0) {
    return 0;
    }
  let sumEvenElement = 0;
  let countEvenElement = 0;
  for (let i = 0; i < arr.length; i++) {
   if (arr[i] % 2 == 0) {
      sumEvenElement = arr[i] + sumEvenElement;
      countEvenElement++;
    }
  }
  return sumEvenElement / countEvenElement ;
}


function makeWork (arrOfArr, func) {
  function makeWork (arrOfArr, func) {
    let maxWorkerResult = -Infinity;
    for (let i = 1; i < arrOfArr.length; i++) {
      const result = func(...arrOfArr[i]);
      if (result > maxWorkerResult) {
        maxWorkerResult = result;
      }
    }
    return maxWorkerResult;
  }

}
