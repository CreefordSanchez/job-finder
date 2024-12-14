'use strict';

import { listen, select, selectAll, style } from "./data/utility.js";
import { formValid } from "./login.js";

listen(window, 'load', () => {
  if (!formValid) {    
    window.location.href = './login.html';
  }
});