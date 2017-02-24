// @flow

import * as greeters from './greeters';

const nameDiv = document.getElementById('name');
const ageDiv = document.getElementById('age');
const squareDiv = document.getElementById('square');

if (nameDiv != null) nameDiv.innerHTML = greeters.sayHello('Mathieu');
if (ageDiv != null) ageDiv.innerHTML = greeters.sayFutureAge(32);
if (squareDiv != null) squareDiv.innerHTML = greeters.square([1, 2, 3, 4]);
