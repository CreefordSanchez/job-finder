'use strict';

import { listen, select, selectAll, style } from "./data/utility.js";

listen(window, 'load', () => {
  let getValid = JSON.parse(sessionStorage.getItem('validForm'));
  if (!getValid ) {        
    window.location.href = './login.html';
  }
});