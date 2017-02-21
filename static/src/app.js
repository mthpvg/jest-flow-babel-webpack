// @flow
import {sayHello} from './greeters';

const shell = document.getElementById('shell');

if (shell != null) {
  shell.innerHTML = sayHello('Mathieu');
}
