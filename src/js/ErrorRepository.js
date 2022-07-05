export default class ErrorRepository {
  constructor() {
    this.errorLib = new Map([
      ['1', 'DDDD'],
      ['2', 'BBBB'],
      ['3', 'CCCC'],
    ]);
  }

  translate(code) {
    if (this.errorLib.has(code)) {
      return this.errorLib.get(code);
    }
    return 'Unknown error';
  }
}