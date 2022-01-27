import { expectIncorrectJs, expectCorrectJs } from './util';

describe('array-callback-return', () => {
  test('incorrect', async () => {
    const text = `
    const myArray = [];
    const indexMap = myArray.reduce((memo, item, index) => {
      memo[item] = index;
    }, {});
    console.log(indexMap);
    `;
    await expectIncorrectJs('array-callback-return', text);
  });

  test('correct', async () => {
    const text = `
    const myArray = [];
    const indexMap = myArray.reduce((memo, item, index) => {
      memo[item] = index;
      return memo;
    }, {});
    console.log(indexMap);
    `;
    await expectCorrectJs(text);
  });
});
