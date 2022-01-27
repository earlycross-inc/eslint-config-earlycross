import { expectIncorrectJs, expectCorrectJs } from './util';

describe('jsdoc/check-indentation', () => {
  test('incorrect', async () => {
    const text = `
    /**
     * func
     *  func
     */
    function func() {}
    func();    
    `;
    await expectIncorrectJs('jsdoc/check-indentation', text);
  });

  test('correct', async () => {
    const text = `
    /**
     * func
     * func
     */
    function func() {}
    func();
    `;
    await expectCorrectJs(text);
  });
});

describe('jsdoc/newline-after-description', () => {
  test('correct', async () => {
    const text = `
    /**
     * func
     * @param {*} foo foo
     */
    function func(foo) {
      console.log(foo);
    }
    func();
    `;
    await expectCorrectJs(text);
  });
});

describe('jsdoc/require-jsdoc', () => {
  test('correct', async () => {
    const text = `
    export function func(foo) {
      console.log(foo);
    }
    func();
    `;
    await expectCorrectJs(text);
  });
});

describe('jsdoc/require-returns', () => {
  test('correct', async () => {
    const text = `
    /**
     * func
     * @param foo foo
     */
    function func(foo) {
      return foo;
    }
    func();    
    `;
    await expectCorrectJs(text);
  });
});
