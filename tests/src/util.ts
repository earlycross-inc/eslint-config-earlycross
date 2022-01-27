import { ESLint, Linter } from 'eslint';
import javascript from '../../src/javascript';
import typescript from '../../src/typescript';
import typescriptreact from '../../src/typescript-react';

type TargetExtension = 'js' | 'ts' | 'tsx';

/**
 * Check the rules for incorrect JavaScript code
 * @param ruleId Rules to be violated
 * @param text Text to be examined
 */
export async function expectIncorrectJs(ruleId: string, text: string): Promise<void> {
  await expectIncorrect('js', ruleId, text);
}

/**
 * Check the rules for correct JavaScript code
 * @param text Text to be examined
 */
export async function expectCorrectJs(text: string): Promise<void> {
  await expectCorrect('js', text);
}

/**
 * Check the rules for incorrect TypeScript code
 * @param ruleId Rules to be violated
 * @param text Text to be examined
 */
export async function expectIncorrectTs(ruleId: string, text: string): Promise<void> {
  await expectIncorrect('ts', ruleId, text);
}

/**
 * Check the rules for correct TypeScript code
 * @param text Text to be examined
 */
export async function expectCorrectTs(text: string): Promise<void> {
  await expectCorrect('ts', text);
}

/**
 * Check the rules for incorrect TypeScript code
 * @param ruleId Rules to be violated
 * @param text Text to be examined
 */
export async function expectIncorrectTsx(ruleId: string, text: string): Promise<void> {
  await expectIncorrect('tsx', ruleId, text);
}

/**
 * Check the rules for correct TypeScript code
 * @param text Text to be examined
 */
export async function expectCorrectTsx(text: string): Promise<void> {
  await expectCorrect('tsx', text);
}

async function expectIncorrect(ext: TargetExtension, ruleId: string, text: string): Promise<void> {
  const eslint = createESLint(ext);
  const options = lintOptions(ext);
  const results = await eslint.lintText(text, options);
  expect(results.length).toBe(1);
  const result = results[0];
  if (result === undefined) throw Error('fail');
  expect(result.messages.length).toBe(1);
  const message = result.messages[0];
  if (message === undefined) throw Error('fail');
  expect(message.ruleId).toBe(ruleId);
}

async function expectCorrect(ext: TargetExtension, text: string): Promise<void> {
  const eslint = createESLint(ext);
  const options = lintOptions(ext);
  const results = await eslint.lintText(text, options);
  expect(results.length).toBe(1);
  const result = results[0];
  if (result === undefined) throw Error('fail');
  expect(result.errorCount).toBe(0);
}

function createESLint(ext: TargetExtension): ESLint {
  const config: Linter.Config = javascript;
  config.env = { node: true };
  switch (ext) {
    case 'js': {
      break;
    }
    case 'ts': {
      config.overrides = [
        {
          files: ['*.ts'],
          parserOptions: { project: ['./tsconfig.eslint.json'] },
          ...typescript,
        },
      ];
      break;
    }
    case 'tsx': {
      config.overrides = [
        {
          files: ['*.ts', '*.tsx'],
          parserOptions: { project: ['./tsconfig.eslint.json'] },
          ...typescriptreact,
        },
      ];
      break;
    }
  }
  const options = { baseConfig: config, overrideConfig: [], useEslintrc: false } as ESLint.Options;
  return new ESLint(options);
}

type LintOptions = {
  filePath?: string | undefined;
  warnIgnored?: boolean | undefined;
};

function lintOptions(ext: TargetExtension): LintOptions | undefined {
  let options: LintOptions | undefined;
  switch (ext) {
    case 'js':
      break;
    case 'ts':
      options = { filePath: 'tests/target/typescript.ts' };
      break;
    case 'tsx':
      options = { filePath: 'tests/target/typescript-react.tsx' };
      break;
  }
  return options;
}
