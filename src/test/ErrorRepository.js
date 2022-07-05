import ErrorRepository from '../js/ErrorRepository';

test('testing', () => {
  const ErRepo = new ErrorRepository();
  const code = '1';
  console.log(ErRepo.translate(code))
  expect(ErRepo.translate(code)).toBe('DDDD');
});

test('testing', () => {
  const ErRepo = new ErrorRepository();
  const code = '16';
  expect(ErRepo.translate(code)).toBe('Unknown error');
});