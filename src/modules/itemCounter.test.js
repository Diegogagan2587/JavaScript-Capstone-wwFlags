import cardItemCounter from './itemCounter.js';

test('returns 0 when cardElements is falsy', async () => {
  const result = await cardItemCounter(null);
  expect(result).toBe(0);
});

test('returns the length of cardElements when it is truthy', async () => {
  const cardElements = [1, 2, 3, 4, 5];
  const result = await cardItemCounter(cardElements);
  expect(result).toBe(cardElements.length);
});

test('returns 0 when cardElements is an empty array', async () => {
  const cardElements = [];
  const result = await cardItemCounter(cardElements);
  expect(result).toBe(0);
});

test('returns 1 when cardElements has a single element', async () => {
  const cardElements = [1];
  const result = await cardItemCounter(cardElements);
  expect(result).toBe(1);
});

test('returns the correct length when cardElements has 1000 elements', async () => {
  const cardElements = Array.from({ length: 1000 }, (_, index) => index + 1);
  const result = await cardItemCounter(cardElements);
  expect(result).toBe(1000);
});

test('returns 0 when cardElements is false', async () => {
  const cardElements = false;
  const result = await cardItemCounter(cardElements);
  expect(result).toBe(0);
});
