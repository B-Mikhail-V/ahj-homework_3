/* eslint func-names: ["error", "never"] */
/* eslint no-unused-vars: ["error", { "vars": "local" }] */
/* global hammer1 */

import getPosition from './js/position.js';
import Game from './js/game.js';
import Hammer, { countHumm } from './js/hammer.js';
import useCounter from './js/counter.js';
import Result from './js/result.js';
import './css/game.css';
import './index.html';

const game = new Game(document.querySelectorAll('.grid-item'));
const counter1 = useCounter();
const result = new Result('.listResult');
/* eslint-disable */
const hammer1 = new Hammer('.pole');
/* eslint-enable */

let positionNow = 0;
(function () {
  const interval1 = setInterval(() => {
    game.clearAll();
    positionNow = getPosition(positionNow);
    game.addGoblin(positionNow);
    const count = counter1();
    result.renderResult(countHumm, (count - countHumm));
    if (count - countHumm > 4) {
      clearInterval(interval1);
      game.clearAll();
      result.renderFinal();
      setTimeout(() => {
        document.location.reload();
      }, 4000);
    }
  }, 1000);
}());
