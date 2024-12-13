'use strict';

import { listen, select, selectAll, style } from "./data/utility.js";

const loginBtn = select('.login')
const email = select('.email');
const password = select('.password');
let valid = true;
listen(loginBtn, 'click', () => {
  if (valid) {
    reset();
    window.location.href = ('./index.html');
  }
});

function validation() {
  
}
function reset() {
  email.value = '';
  password.value = '';
}
