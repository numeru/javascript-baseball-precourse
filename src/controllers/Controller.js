class Controller {
  view;

  model;

  constructor(view, model) {
    this.view = view;
    this.model = model;
  }

  init() {
    this.model.setRandomComputerInputNumber();

    this.bindInputHandler();
    this.bindFormHandler();
  }

  submitForm() {
    try {
      const computerInputNumbers = this.model.getComputerInputNumbers();
      const userInputNumbers = this.model.getUserInputNumbers();

      this.checkUserInputNumbers(userInputNumbers);

      const result = this.play(computerInputNumbers, userInputNumbers);
      this.view.setResultValue(result);

      if (result === '') {
        this.view.showCorrectSection();
        this.bindRestartButtonHandler();
      }
    } catch (error) {
      this.model.setUserInputNumbers('');
      alert(error.message);
      this.view.getInputElement().focus();
    }
  }

  bindInputHandler() {
    const inputElement = this.view.getInputElement();
    inputElement.addEventListener('change', (event) => {
      this.model.setUserInputNumbers(event.target.value);
    });
  }

  bindFormHandler() {
    const formElement = this.view.getFormElement();
    formElement.addEventListener('submit', (event) => {
      event.preventDefault();

      this.submitForm();
    });
  }

  bindRestartButtonHandler() {
    const restartButtonElement = this.view.getRestartButtonElement();

    restartButtonElement.addEventListener('click', () => {
      this.model.setUserInputNumbers('');
      this.view.resetInputElementValue();

      this.view.removeCorrectSection();

      this.model.setRandomComputerInputNumber();
    });
  }

  checkDuplication(userInputNumbers) {
    const newUserInputNumbers = new Set([...userInputNumbers]);

    return newUserInputNumbers.size === userInputNumbers.length;
  }

  checkUserInputNumbers(userInputNumbers) {
    if (userInputNumbers.trim() === '') {
      throw new Error('숫자를 입력해주세요.');
    }

    if (userInputNumbers.length !== 3) {
      throw new Error('세자리 수만 입력 가능합니다.');
    }

    const regExp = /^[1-9]*$/;

    if (!regExp.test(userInputNumbers)) {
      throw new Error('1부터 9까지의 이상의 숫자만 입력 가능합니다.');
    }

    const checkDuplicationResult = this.checkDuplication(userInputNumbers);

    if (!checkDuplicationResult) {
      throw new Error('중복된 값이 존재합니다. 다시 입력해주세요.');
    }
  }

  checkStrike(computerInputNumbers, userInputNumbers) {
    let strikeCount = 0;
    [...computerInputNumbers].forEach((value, idx) => {
      if (value === userInputNumbers[idx]) {
        strikeCount += 1;
      }
    });

    return strikeCount;
  }

  checkBall(computerInputNumbers, userInputNumbers) {
    let ballCount = 0;
    [...userInputNumbers].forEach((value, idx) => {
      const findIndex = computerInputNumbers.indexOf(value);

      if (findIndex !== -1 && findIndex !== idx) {
        ballCount += 1;
      }
    });

    return ballCount;
  }

  printResult(strikeCount, ballCount) {
    if (strikeCount === 3) return '';

    if (strikeCount > 0 && ballCount > 0)
      return `${ballCount}볼 ${strikeCount}스트라이크`;

    if (strikeCount > 0 && ballCount === 0) return `${strikeCount}스트라이크`;

    if (strikeCount === 0 && ballCount > 0) return `${ballCount}볼`;

    return '낫싱';
  }

  play(computerInputNumbers, userInputNumbers) {
    const curStrikeCount = this.checkStrike(
      computerInputNumbers,
      userInputNumbers
    );
    const curBallCount = this.checkBall(computerInputNumbers, userInputNumbers);

    const result = this.printResult(curStrikeCount, curBallCount);

    return result;
  }
}

export default Controller;
