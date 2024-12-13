'use strict';

import { listen, select, selectAll, style } from "./data/utility.js";

listen(window, 'load', () => {
  window.location.href = './login.html';
});