class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers.sort((a,b) => a-b);
  }

  #validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error("[ERROR] 로또 번호는 6개여야 합니다.");
    }

    for (const number of numbers){
      if (!(1<=number && number <= 45))
        throw new Error("[ERROR] 로또 번호의 범위는 1~45 사이여야 합니다.");
    }

    if (new Set(numbers).size!=6)
      throw new Error("[ERROR] 로또 번호는 중복될 수 없습니다.");
  }

  getNumbers() {
    return this.#numbers;
  }
}

export default Lotto;
