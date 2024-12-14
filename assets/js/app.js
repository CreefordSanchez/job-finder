'use strict';

import { listen, select, selectAll, style } from "./data/utility.js";
export { formValid } from "./login.js";

listen(window, 'load', () => {
  if (!formValid) {    
    window.location.href = './login.html';
  }
});