/* eslint no-underscore-dangle: 0 */

/* eslint-disable */
export let countHumm = 0;
export let countHummFalse = 0;

export default class Hammer {
  constructor(elem) {
    if (typeof elem === 'string') {
      elem = document.querySelector(elem);
    }

    this._element = elem;

    this.hammer = this._element.querySelector('.grid');

    this.hammer.addEventListener('click', this.counterHummer);
    this.hammer.addEventListener('click', this.counterFalse);
    this.hammer.addEventListener('click', this.clearCurrent);
  }

  clearCurrent(e) {
    e.target.classList.remove('grid-item-on');
  }

  counterHummer(e) {
    if (e.target.classList.contains('grid-item-on')) {
      countHumm += 1;
    }
  }

  counterFalse(e) {
    if (!e.target.classList.contains('grid-item-on')) {
      countHummFalse += 1;
    }
  }
}
