import commentsCounter from './pop_up_comments_counter.js';

test('commentsCounter([1,2,3,4,5,6] should return 6)', () => {
  const array = [0, 1, 2, 3, 4, 5];
  expect(commentsCounter(array)).toBe(6);
});

test('commentsCounter([] should return 0)', () => {
  const array = [];
  expect(commentsCounter(array)).toBe(0);
});

test('commentsCounter([0,1,2,3,4,5] should return 6)', () => {
  const array = [0, 1, 2, 3, 4, 5];
  expect(commentsCounter(array)).toBe(6);
});
