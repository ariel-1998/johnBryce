import { avgArray, maxNumInArray, minNumInArray, printArray, sumArray } from "homework1-arrays-module"
import os from "os";

let arr = [-2, 10, 7, 16];
console.log(`printArray`);
printArray(arr);
 let sum = sumArray(arr);
 let avg = avgArray(arr);
 let max = maxNumInArray(arr);
 let min = minNumInArray(arr);
console.log(`sum: `, sum);
console.log(`avg: `, avg);
console.log(`max: `, max);
console.log(`min: `, min);

console.log(os.platform());
console.log(os.arch())
console.log(os.freemem())
console.log(os.release())
console.log(os.loadavg())

