function findSecondSmallest(arr) {
    let smallest = Infinity;
    let secondSmallest = Infinity;
  
    for (let num of arr) {
      if (num < smallest) {
        secondSmallest = smallest;
        smallest = num;
      } else if (num < secondSmallest && num !== smallest) {
        secondSmallest = num;
      }
    }
  
    if (secondSmallest === Infinity) {
      return undefined;
    }
  
    return secondSmallest;
  }
  
  // Test cases
  console.log(findSecondSmallest([4, 2, 5, 1, 3]));      // Output: 2
  console.log(findSecondSmallest([1, 1, 1, 1, 1]));      // Output: undefined (no second smallest)
  console.log(findSecondSmallest([10, 9, 8, 7, 6]));     // Output: 7
  console.log(findSecondSmallest([100, 100, 100, 99]));  // Output: 99
  