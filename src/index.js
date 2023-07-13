/* eslint func-names: ["error", "never"] */

import getPosition from './js/app.js';
import Game from './js/game.js';
import './css/game.css';
import './index.html';

const game = new Game(document.querySelectorAll('.grid-item'));
// console.log(game);
//
// const chngInterval = setInterval(() => {
//   game.clearAll();
//   positionNow = getPosition(positionNow);
//   game.addGoblin(positionNow);
// }, 1000);
let positionNow = 0;
(function () {
  setInterval(() => {
    game.clearAll();
    positionNow = getPosition(positionNow);
    game.addGoblin(positionNow);
  }, 1000);
}());
