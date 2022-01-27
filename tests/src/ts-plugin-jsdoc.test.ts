import { expectCorrectTs } from './util';

describe('jsdoc/check-param-names', () => {
  test('correct', async () => {
    const text = `
    /**
     * func
     * @param param0 param0
     * @param baz baz
     */
    function func({ foo, bar }: { foo: number; bar: number }, baz: number): number {
      console.log();
      return foo + bar + baz;
    }
    
    func({ foo: 0, bar: 0 }, 0);
    `;
    await expectCorrectTs(text);
  });
});

describe('jsdoc/require-param', () => {
  test('correct', async () => {
    const text = `
    /**
     * func
     * @param param0 param0
     * @param baz baz
     */
    function func({ foo, bar }: { foo: number; bar: number }, baz: number): number {
      console.log();
      return foo + bar + baz;
    }
    
    func({ foo: 0, bar: 0 }, 0);
    `;
    await expectCorrectTs(text);
  });
});

describe('jsdoc/require-param-type', () => {
  test('correct', async () => {
    const text = `
    /**
     * func
     * @param {*} param0 param0
     * @param baz baz
     */
    function func({ foo, bar }: { foo: number; bar: number }, baz: number): void {
      console.log(foo, bar, baz);
    }
    
    func({ foo: 0, bar: 0 }, 0);
    `;
    await expectCorrectTs(text);
  });
});

describe('jsdoc/require-returns-type', () => {
  test('correct', async () => {
    const text = `
    /**
     * func
     * @param param0 param0
     * @param param0.foo param0.foo
     * @param param0.bar param0.bar
     * @param baz baz
     * @returns sum
     */
    function func({ foo, bar }: { foo: number; bar: number }, baz: number): number {
      console.log();
      return foo + bar + baz;
    }
    
    func({ foo: 0, bar: 0 }, 0);
    `;
    await expectCorrectTs(text);
  });
});
