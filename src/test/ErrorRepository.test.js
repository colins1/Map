import ErrorRepository from '../js/ErrorRepository';

test('testing', () => {
  const Repo = new ErrorRepository();
  const code = '1';
  expect(Repo.translate(code)).toBe('Чтото не правельно');
});

test('testing', () => {
  const Repo = new ErrorRepository();
  const code = '16';
  expect(Repo.translate(code)).toBe('Unknown error');
});