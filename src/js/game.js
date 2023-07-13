/* eslint no-underscore-dangle: 0 */

export default class Game {
  constructor(element) {
    this._element = element;
  }

  clearAll() {
    // const el = document.querySelectorAll('.grid-item-on');
    this._element.forEach((elem) => {
      // elem.setAttribute('src', 'img/no_goblin.png');
      elem.classList.remove('grid-item-on');
    });
  }

  addGoblin(position) {
    // const el = document.querySelectorAll('.grid-item');
    // this._element[position].setAttribute('src', 'img/goblin.png');
    this._element[position].classList.add('grid-item-on');
  }
}
