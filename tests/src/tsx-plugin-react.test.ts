import { expectIncorrectTsx, expectCorrectTsx } from './util';

describe('react/no-danger-with-children', () => {
  test('incorrect', async () => {
    const text = `
    export const App: React.FC = () => (
      <div className="App">
        <div dangerouslySetInnerHTML={{ __html: 'HTML' }}>Children</div>
      </div>
    );
    `;
    await expectIncorrectTsx('react/no-danger-with-children', text);
  });
  test('correct', async () => {
    const text = `
    export const App: React.FC = () => (
      <div className="App">
        <div dangerouslySetInnerHTML={{ __html: 'HTML' }} />
      </div>
    );    
    `;
    await expectCorrectTsx(text);
  });
});

describe('react/react-in-jsx-scope', () => {
  test('correct', async () => {
    const text = `
    export const App = (): unknown => <div className="App">React Contents</div>;
    `;
    await expectCorrectTsx(text);
  });
});
