/* eslint no-underscore-dangle: 0 */

export default class Game {
  constructor(element) {
    this._element = element;
  }

  clearAll() {
    this._element.forEach((elem) => {
      elem.classList.remove('grid-item-on');
    });
  }

  addGoblin(position) {
    this._element[position].classList.add('grid-item-on');
  }
}
