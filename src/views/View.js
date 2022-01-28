class View {
  appElement;
  inputElement;
  formElement;
  resultElement;
  restartButtonElement;

  constructor() {
    this.appElement = document.querySelector('#app');
    this.inputElement = document.querySelector('#user-input');
    this.formElement = document.querySelector('form');
    this.resultElement = document.querySelector('#result');
  }

  getInputElement() {
    return this.inputElement;
  }

  getFormElement() {
    return this.formElement;
  }

  getResultElement() {
    return this.resultElement;
  }

  getRestartButtonElement() {
    return this.restartButtonElement;
  }

  setResultValue(result) {
    this.resultElement.innerHTML = result;
  }

  showCorrectSection() {
    const template = document.createElement('template');
    template.innerHTML = `<div id="correct">
    <h2>🎉 정답을 맞추셨습니다! 🎉</h2>
    <p>게임을 새로 시작하시겠습니까?</p>
    <button id="game-restart-button">게임 재시작</button>
  </div>`;

    this.appElement.insertAdjacentElement(
      'beforeend',
      template.content.firstElementChild
    );

    this.restartButtonElement = document.querySelector('#game-restart-button');
  }

  removeCorrectSection() {
    const correctSection = document.querySelector('#correct');
    correctSection.remove();
  }

  resetInputElementValue() {
    this.inputElement.value = '';
  }
}

export default View;
