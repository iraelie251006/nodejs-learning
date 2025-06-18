// The global object is the top-level object in JavaScript. Every environment (like the browser or Node.js) has its own global object.
// 🌍 Different Environments, Different Names:
// Environment	Global Object Name
// Browser window or self or globalThis
// Node.js	global or globalThis


// Key Properties of the Global Object:
// Built-in functions: setTimeout(), parseInt(), isNaN()

// Constructors: Object, Array, Function, Date

// Global variables you declare with var (but not with let or const)

// console.log(process)
import {generateRandomNumber, celciusToFahrenheit} from './utils.js';

const randomNumber = generateRandomNumber();
console.log(`Celcius: ${randomNumber} -> Fahrenheit: ${celciusToFahrenheit(randomNumber)}`);