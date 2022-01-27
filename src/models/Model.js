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
    // const randomNumber = String(
    //   MissionUtils.Random.pickNumberInRange(100, 999)
    // );
    // this.setComputerInputNumbers(randomNumber);

    this.setComputerInputNumbers('425');
  }
}

export default Model;
