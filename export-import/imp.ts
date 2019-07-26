// Named import 
import { Count, Multiply } from './exp'
console.log(Count, Multiply(3, 3))

// Default import 
import abc from './exp'
console.log(abc.name) 

// All import
import * as theExp from './exp'
console.log(theExp.Count, theExp.Multiply(3, 3), theExp.default.name) // 5 9 'baby'
