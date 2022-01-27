import { expectIncorrectTs, expectCorrectTs } from './util';

describe('@typescript-eslint/array-type', () => {
  test('incorrect', async () => {
    const text = `
    const x: Array<string> = ['a', 'b'];
    console.log(x);
    `;
    await expectIncorrectTs('@typescript-eslint/array-type', text);
  });

  test('correct', async () => {
    const text = `
    const x: string[] = ['a', 'b'];
    console.log(x);
    `;
    await expectCorrectTs(text);
  });
});

describe('@typescript-eslint/naming-convention', () => {
  const ruleId = '@typescript-eslint/naming-convention';

  test('incorrect', async () => {
    await expectIncorrectTs(ruleId, 'class classname {} console.log(classname);');
    await expectIncorrectTs(ruleId, 'enum EnumName { enumMember } console.log(EnumName);');
    await expectIncorrectTs(ruleId, 'const variable_name = 1; console.log(variable_name);');

    const text1 = `
    function function_name(): void {}

    function_name();
    `;
    await expectIncorrectTs(ruleId, text1);

    const text2 = `
    class ClassName {
      public MethodName(): void {}
    }
    console.log(ClassName);    
    `;
    await expectIncorrectTs(ruleId, text2);

    const text3 = `
    type typeName = number;
    const a: typeName = 1;
    console.log(a);
    `;
    await expectIncorrectTs(ruleId, text3);

    const text4 = `
    function FunctionName(): void {}

    FunctionName();
    `;
    await expectIncorrectTs(ruleId, text4);
  });

  test('correct', async () => {
    const text = `
    class ClassName {
      public methodName(): void {}
    }
    
    enum EnumName {
      EnumValue1,
    }
    
    function functionName(): void {}
    
    type TypeName = number;
    
    const variableName1: TypeName = 1;
    const VARIABLE_NAME_3: TypeName = 3;
    
    console.log(ClassName, EnumName, functionName, variableName1, VARIABLE_NAME_3);    
    `;
    await expectCorrectTs(text);
  });
});

describe('@typescript-eslint/typedef', () => {
  test('correct', async () => {
    const text = `
    const [a, b] = [1, 2];
    const [c, d] = Math.random() ? [1, 2] : [3, 4];
    const { e, f } = { e: 0, f: 'f' };
    console.log(a, b, c, d, e, f);
    ['hello', 'world'].map((text) => text.length);
    `;
    await expectCorrectTs(text);
  });
});
