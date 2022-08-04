// Easy algorithms practice

function canComplete(A, B) {
  let init = 0;
  let tank = 0;
  let emptyTank = 0;
  let it = 0;

  for (let index = 0; index < A.length; index += 1) {
    it = A[index] - B[index];
    tank += it;

    if (tank < 0) {
      init = index + 1;
      tank = 0;
      
    }
    emptyTank += it;
  }
  
  if (emptyTank >= 0) {
      return init;
  }
  return -1;

}
// Try to find the relation between sum of gas and sum of cost for solution to exist.
// When will you shift your starting point from 0?
// Do you really need to cover every starting point? How can you use answer of above question to optimize this part?

function canCompleteCircuit(gas, gasCost) {
  let start = 0;
  let tank = 0;
  let gasShortage = 0;
  let calculate = 0;

  gas.map((item, index) => {
    calculate = item - gasCost[index];
    tank += it;

    if (tank < 0) {
      start = index + 1;
      tank = 0;
    }
    gasShortage += calculate;
  });
  if (gasShortage >= 0) {
    return start;
  } else {
    return -1;
  }
}

function majorityElements(A){
  let auxList = []
  let duplicates = [];
  let counter = 0;
  let factor = Math.floor(A.length / 2);

  for (let index = 0; index <= A.length; index += 1) {

    for (let idx = index + 1; idx < A.length; idx += 1) {
      if (A[index] === A[idx]) {
        counter += 1;
        duplicates.push(A[index]);
      }
    }
  }

  if (counter >= factor) {
    console.log(duplicates[0])
  }
}

// majorityElements([1, 3, 3, 3, 4])

// Easier solution, but not optimal
function twoNumberSum(array, targetSum) {
  // Write your code here.
  let list = [];
  if (array && array.length > 0) {
    for (let index = 0; index <= array.length; index += 1) {
      
      for (let idx = index + 1; idx < array.length; idx += 1) {
        if (array[index] + array[idx] === targetSum){
          list.push(array[index]);
          list.push(array[idx]);
        }
      }
    }

    return list;
  }
}

// Better space performance | better time performance than the 2 for loop solution
function twoNumberSumWithOneLoop(array, targetSum) {
  // Write your code here.
  let list = [];
  // let num = 0;
  // let hashTable = {};
  let lastPointer = array.length - 1;
  let firstPointer = 0;
  if (array && array.length > 0) {
    array.sort((a, b) => a - b).map((_item) => {
      
      if (array[firstPointer] + array[lastPointer] < targetSum) {
        console.log('first pointer:', firstPointer);
        firstPointer += 1;
      } else if (array[firstPointer] + array[lastPointer] > targetSum) {
        lastPointer -= 1;
        console.log('first pointer:', firstPointer);
        console.log('last pointer:', lastPointer);
      } else if (array[firstPointer] + array[lastPointer] === targetSum) {
        list = [array[firstPointer], array[lastPointer]];
        return;
      }
    });
    
    return list;
  }
}

// Better time performance | not so good at space performance

function twoSumNumHash(array, targetSum) {
  let nums = {};
  let list = [];
  for (let num = 0; num < array.length; num +=1) {
    let soughtNumber = targetSum - array[num];
    if (nums[num] && nums[num] === soughtNumber) {
      list = [soughtNumber, nums[num]];
      return;
    } 
    
    // else {
    //   nums[num] = true;
    // }
  }
  return list;

}

console.log(twoSumNumHash([1, 3, 5, 8, 10, 21], 31))

function isValidSubsequenceWithFor(array, sequence) {
  let index = 0;
  for (let idx = 0; idx < array.length; idx += 1) {
    if (index === sequence.length) {
      break;
    }
    if (array[idx] === sequence[index] && index < sequence.length) {
      index += 1;
    }
  }
  return index === sequence.length;
}

function isValidSubsequenceWithWhile(array, sequence) {
  let arrayIndex = 0;
  let sequenceIndex = 0;
  while (arrayIndex < array.length && sequenceIndex < sequence.length) {
    if (array[arrayIndex] === sequence[sequenceIndex]) {
      sequenceIndex += 1;
    }
    arrayIndex += 1
  }

  return sequenceIndex === sequence.length;
}

// O(nlogN) time | O(n)space
function sortedSquaredArray(array) {
  let list = [];
  if (array.length > 0) {
    array.map((item) => {
        list.push(item * item);
    });
  }
  return list.sort((a, b) => a - b);
}

function sortedSquaredArrayOptimal(array) {
  let list = [];
  let start = 0;
  let end = array.length -1;
  for (let index in array.reverse()) {
    console.log('index: ', index);
  }

  return list;
}

console.log(sortedSquaredArrayOptimal([-5, -3, -2, -1, 9, 10, 12]));