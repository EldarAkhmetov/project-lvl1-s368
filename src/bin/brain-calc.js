#!/usr/bin/env node
import { hello, test, checkExpression } from '..';

console.log('Welcome to the Brain Games!');
console.log('What is the result of the expression?');
const userName = hello();
test(userName, checkExpression);
