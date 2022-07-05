export default class ErrorRepository {
  constructor() {
    this.errorLib = new Map([
      [1, 'Чтото не правельно'],
      [2, 'Было не верно введено'],
      [3, 'Я ошарашен'],
    ]);
  }
  
  translate(code) {
    if (this.errorLib.has(code)) {
      return this.errorLib.get(code);
    }
    return 'Unknown error';
  }
}