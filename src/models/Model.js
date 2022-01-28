class Model {
  computerInputNumbers;
  userInputNumbers;

  constructor() {
    this.computerInputNumbers = '';
    this.userInputNumbers = '';
  }
  getComputerInputNumbers() {
    return this.computerInputNumbers;
  }

  getUserInputNumbers() {
    return this.userInputNumbers;
  }

  setComputerInputNumbers(computerInputNumbers) {
    this.computerInputNumbers = computerInputNumbers;
  }

  setUserInputNumbers(userInputNumbers) {
    this.userInputNumbers = userInputNumbers;
  }

  setRandomComputerInputNumber() {
    let randomNumber = '';

    while (
      new Set([...randomNumber]).size !== 3 ||
      randomNumber.indexOf('0') !== -1
    ) {
      randomNumber = String(MissionUtils.Random.pickNumberInRange(123, 987));
    }

    this.setComputerInputNumbers(randomNumber);
  }
}

export default Model;
