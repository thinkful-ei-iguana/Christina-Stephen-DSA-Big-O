/*

1) a) This solution would have a Big O notation of O(1).
    You only need to ask the question once (operation)
    in order to receive the wanted output (person with
    a retriever).

   b) This solution would hav a Big O notation of O(n).
    You would use a for loop to iterate through the length
    of the 'arr' of dog owners until you found the dog you
    are looking for or ran out of dog owners.

2) This solution would have a Big O notation of O(1) because
 there will only ever be one operation running each time
 you call the function.

3) This solution would have a Big O notation of O(n^2) because
 there is a set (2) nested loops. The outer loop will run with the 
 inner loop (n) times. Each time, the inner loop will run (n) times.
 (If there was ANOTHER nested loop the complexity would then be
 o(n^3))

4) The Big O notation for this algorithm would be O(n).
 There is only one for loop meaning the number of
 operations is directly linked to how many pieces of data
 are in the input.
 
5) The Big O notation for this algorithm would be O(n). Only ONE item 
 is being seached for but we do not know the length of the array.  This 
 would mean it would continue to iterate through the loop until 
 the correct item is located then return the index number.

6) The Big O notation for this algorithm would be O(n^2).
 This is due to the nesting of the for loops causing the
 operations to grow exponentially for each iteration of
 the original loop.

7) The Big O notation for this algorithm would be o(n). This algorithm
uses a for loop to iterate incrementally until it hits a given number.
The complexity of this algorigthm is proportional to its input size.

8) This algorithms Big O notation would be O(log n).The
 algorithm breaks the problem down into smaller sample sizes
 before running it's search on the sample. If it is unable
 to find the result in the sample it grabs another sample
 group to check.

9) The Big O notation for this would be O(1).  The run time doesn't
depend upon the size of the imput and it has a fixed number of 
operations.

10) This algorithm checks if a number is prime. This
 algorithm has a Big O notation of O(n). It only goes
 through a set number of operations based on the original
 input. 

*/

//12-1 O(n)
function countSheep(num) {
  for (let i = 0; i <= num; --num) {
    if (num === 0) {
      console.log('All sheep jumped over the fence');
    } else {
      console.log(`${num} Another sheep jumps over the fence`);
    }
  }
}
// countSheep(3);

//12-2 O(n)
function powerCalculator(num, exp) {
  if (exp <= 0) {
    return 'exponent should be >= 0';
  } else if (num === 1) {
    return '1';
  } else {
    return Math.pow(num, exp);
  }
}

console.log(powerCalculator(10, 2));


//12-3 o(n)
function reverseString(str)  {
  let newString = ' ';
  for (let i = str.length -1; i >= 0; i--) {
    newString += str[i];
  }
  return newString;

}

console.log(reverseString(''));

//12-4 O(n)

function triangular(num) {
  if (num <= 0) {
    return 'Number must be higher than 0';
  } else {
    let count = 0;
    for (let i = 0; i <= num; i++) {
      count += i;
    }
    return count;
  }
}

console.log(triangular(4));