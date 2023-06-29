/**
 * @jest-environment jsdom
 */
import commentsCounter from './pop_up_comments_counter.js';

test('commentsCounter(nodeList ) should return 6', () => {
    const container = document.createElement('ul')
    container.innerHTML = `
    <li>test</li>
    <li>test</li>
    `
    const list = container.querySelectorAll('li');
  expect(commentsCounter(list)).toBe(2);
});

test('commentsCounter(nodeList ) should return 0', () => {
    const container = document.createElement('ul')
    container.innerHTML = `
    `
    const list = container.querySelectorAll('li');
  expect(commentsCounter(list)).toBe(0);
});

test('commentsCounter([] ) should return 0', () => {
  const array = [];
  expect(commentsCounter(array)).toBe(0);
});

test('commentsCounter([0,1,2,3,4,5] ) should return 6', () => {
  const array = [0, 1, 2, 3, 4, 5];
  expect(commentsCounter(array)).toBe(6);
});
