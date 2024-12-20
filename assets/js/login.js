'use strict';

import { listen, select, selectAll, style } from "./data/utility.js";

const loginBtn = select('.login')
const email = select('.email');
const password = select('.password');
const emailError = select('.email-error');
const passError = select('.password-error');

sessionStorage.setItem('validForm', false);
localStorage.setItem('email','cree@gmail.com');
localStorage.setItem('pass', '12345');

listen(loginBtn, 'click', () => {
  if (validation()) { 
  sessionStorage.setItem('validForm', true);
    reset();    
    window.location.href = ('./index.html');
  }
});

function validation() {
  let emailVal = email.value;
  let passVal = password.value;

  if (sufficiantData(emailVal, passVal)) {
    return compareCredentials(emailVal, passVal);
  }

  return false;
}

function sufficiantData(email, pass) {
  let isValid = true;
  if (email === '') {
    emailError.innerText = 'Enter Email';
    isValid = false;
  } else {
    emailError.innerText = '';
  }

  if (pass === '') {
    passError.innerText = 'Enter Password';
    isValid = false;
  } else {
    passError.innerText = '';
  }

  return isValid;
}

function compareCredentials(email, pass) {
  let emailCredential = localStorage.getItem('email');
  let passCredential = localStorage.getItem('pass');

  if (emailCredential !== email || passCredential !== pass) {
      emailError.innerText = 'Incorrect Email or Password';
      return false;
  }

  return true;
}

function reset() {
  email.value = '';
  password.value = '';
}
