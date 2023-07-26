export default class Result {
  constructor(elem) {
    if (typeof elem === 'string') {
      /* eslint-disable */
      elem = document.querySelector(elem);
    }
    /* eslint-enable */
    this.elem = elem;
  }

  renderResult(scoreHit, scoreMiss) {
    this.elem.innerHTML = `
        <li>ИГРА ДО 5 ПРОМАХОВ</li><br>
        <li>ПОПАДАНИЯ - ${scoreHit}</li>
        <li>ПРОМАХИ - ${scoreMiss}</li>
        `;
  }

  renderFinal() {
    this.elem.innerHTML = `
        <li>КОНЕЦ ИГРЫ</li>
        `;
  }
}
