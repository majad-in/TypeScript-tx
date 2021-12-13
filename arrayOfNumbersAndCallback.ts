
// Create a function called map that takes two inputs:
// an array of numbers (a list of numbers)
// a 'callback' function - a function that is applied to each element of the array (inside of the function 'map')
// Have map return a new array filled with numbers that are the result of using the 'callback' 
// function on each element of the input array.

/**
 * 
 * @param array of numbers 
 * @param callback function that takes 2 arguments, number of array and callback 
 * @returns array of numbers that are the result of using the callback function on each element of the input array
 */

// Challenge 3
function map(array: number[], callback: (input: number) => number): number[] {
	let newArray: number[] = []
	
	for (let i = 0; i < array.length; i++) {
		newArray.push(callback(array[i]))
		
	}
	return newArray
}

const multiplyByTwo = (input: number) => input * 2


const result = map([1,2,3,4,5], multiplyByTwo); 


console.log(result);


/**
 * @param sayHello is callback function 
 * @returns string
 */

// simple example of passing function
function sayHello(): string {
	return "JavaScript!";
 }
 function greeting(name: string, helloMessage: () => void): void {
   console.log(name + helloMessage());
 }
 // Pass `sayHello` as an argument to `greeting` function
 greeting("Hello, ", sayHello);
 // Hello, JavaScript!