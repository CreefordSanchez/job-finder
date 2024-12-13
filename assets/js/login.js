'use strict';

import { listen, select, selectAll, style } from "./data/utility.js";

const loginBtn = select('.login')
const email = select('.email');
const password = select('.password');
const emailError = select('.email-error');
const passError = select('.password-error')
let valid = true;


listen(loginBtn, 'click', () => {
  console.log('click');
  if (validation()) {
    reset();
    //window.location.href = ('./index.html');
  }
});

function validation() {
  let emailVal = email.value;
  let passVal = password.value;
  

  if (sufficiantData(emailVal, passVal)) {
    return true;
  }

  return false;
}

function sufficiantData(email, pass) {
  let isValid = true;
  if (email === '') {
    emailError.innerText = 'Enter Email';
    isValid = false;
  }

  if (pass === '') {
    passError.innerText = 'Enter Password';
    isValid = false;
  }

  return isValid;
}
function isEmailValid(value) {
  
}
function reset() {
  email.value = '';
  password.value = '';
}
