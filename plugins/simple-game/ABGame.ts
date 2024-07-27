const numberString = '0123456789AB';
const maxTimes = [0, 0, 0, 10, 10, 18, 28, 36, 34, 32, 32, 36, 36];

export  class ABGame {
  // 3, 12
  private readonly hardness: number;
  private tried: number;
  private readonly maxTimes: number;
  private readonly answer: string[];
  constructor(hardness: number = 3) {

    if (hardness < 3 || hardness > 12) {
      throw new Error('min length is 3, max length is 12');
    }

    this.hardness = hardness;
    this.tried = 0;
    this.maxTimes = maxTimes[this.hardness];
    this.answer = this.generateAnswer();
  }

 public  generateAnswer() {
    const text = this.hardness < 9 ? numberString.slice(0, 9) : numberString;
    let numbers = text.split('');
    const {hardness} = this;
    return Array.from({ length: hardness }, () => {
      const index = Math.floor(Math.random() * numbers.length);
      const number = numbers[index];
      numbers = numbers.filter((_, i) => i !== index);
      return number;
    });
  }

  public onInput(input:string) {
    const { hardness } = this;
    if (input.length !== hardness) {
      return 'the input length does not match the hardness';
    }
    if (this.isFailedGame) {
      return this.failedMessage;
    }

    this.tried++;

    const result = this.compare(input);
    if (result.a === hardness) {
      return this.succeedMessage;
    }
    return `${result.a}A${result.b}B  (${this.tried}/${this.maxTimes})`;
  }
  /**
   * @param {string} inputText
   */

  public compare(inputText:string) {
    let a = 0;
    let b = 0;
    if (inputText.length !== this.hardness) {
      return { a, b };
    }


    // format input string
    const inputArray = inputText.toUpperCase().split('');


    // string answer
    const answerArray = this.answer;

    // compare
    for (let i = 0; i < this.hardness; i++) {
      const input = inputArray[i];
      if (input == answerArray[i]) {
        a++;
      }
      else if (answerArray.includes(input)) {
        b++;
      }
    }

    return { a, b };
  }

  public get isFailedGame() {
    return this.tried >= this.maxTimes;
  }

  public get failedMessage() {
    return `Failed! The answer is ${this.answerString}`;
  }
  public get answerString() {
    return this.answer.join('');
  }
  public get succeedMessage() {
    return `Congratulations! You've tried ${this.tried} times. The answer is ${this.answerString}`;
  }
}
