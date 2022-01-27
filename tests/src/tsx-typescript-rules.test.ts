import { expectCorrectTsx } from './util';

describe('@typescript-eslint/naming-convention', () => {
  test('correct', async () => {
    const text = `
    class ClassName {
      public MethodName(): void {}
    }
    
    function FunctionName(): void {}

    const variableName1: TypeName = 1;
    const VariableName2: TypeName = 2;
    const VARIABLE_NAME_3: TypeName = 3;
    
    console.log(ClassName, FunctionName, variableName1, VariableName2, VARIABLE_NAME_3);    
    `;
    await expectCorrectTsx(text);
  });
});
