import ErrorRepository from '../js/ErrorRepository';

test('testing', () => {
  const Error = new ErrorRepository();
  const code = 1;
  expect(Error.translate(code)).toBe('Чтото не правельно');
});

test('testing', () => {
  const Error = new ErrorRepository();
  const code = 7;
  expect(Error.translate(code)).toBe('Unknown error');
});