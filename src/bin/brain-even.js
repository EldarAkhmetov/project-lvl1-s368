#!/usr/bin/env node

import { hello, test } from '..';


console.log('Welcome to the Brain Games!');
console.log('Answer "yes" if number even otherwise answer "no".');
const userName = hello();
test(userName);
