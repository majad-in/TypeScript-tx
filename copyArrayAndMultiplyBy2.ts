/**
 * 
 * @param function that takes an array of numbers and returns an array of numbers
 * @returns a new array with all values multiplied by 2
 */

const copyArrayAndMultiplyBy2 = (arr: number[]): number[] => {
  const output: number[] = [];
  for (let i = 0; i < arr.length; i++) {
   console.log( output.push(arr[i] * 2));
   
  }
  return output

}

const myArray = [2, 4, 8]


console.log(copyArrayAndMultiplyBy2(myArray));
