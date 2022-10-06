# eslint-config-earlycross

This is an ESLint shareable config that is intended for use within EarlyCross.

Currently, this package contains three presets.

| Presets                       | Details                                                        |
| ----------------------------- | -------------------------------------------------------------- |
| `earlycross/javascript`       | For project written entirely in JavaScript                     |
| `earlycross/typescript`       | For project written in TypeScript (including JavaScript)       |
| `earlycross/typescript-react` | For react project written in TypeScript (including JavaScript) |

Plus, `earlycross/jest` preset is provided for projects which use Jest. This preset is intended to be used along with presets above.

## Dependent configs or plugins

### JavaScript

- eslint-config-prettier
- eslint-plugin-import
- eslint-plugin-jsdoc

### TypeScript

In addition to JavaScript

- @typescript-eslint/eslint-plugin
- @typescript-eslint/parser

### TypeScript React

In addition to TypeScript

- eslint-plugin-jsx-a11y
- eslint-plugin-react
- eslint-plugin-react-hooks
- eslint-plugin-testing-library

### Jest

- eslint-plugin-jest

## Install

```
npm i -D eslint-config-earlycross
```

## Configuration

Examples of `.eslintrc.json`:

### JavaScript

```jsonc
{
  "extends": ["earlycross/javascript"],
  "plugins": [
    // additional plugins
  ],
  "env": { "node": true },
  "rules": {
    // javascript rules to override
  }
}
```

### TypeScript

```jsonc
{
  "extends": ["earlycross/typescript"],
  "plugins": [
    // additional plugins
  ],
  "env": { "node": true },
  "overrides": [
    {
      "files": ["*.ts"],
      "parserOptions": { "project": ["./tsconfig.eslint.json"] },
      "rules": {
        // typescript rules to override
      }
    }
  ]
}
```

### TypeScript React

```jsonc
{
  "extends": ["earlycross/typescript-react"],
  "plugins": [
    // additional plugins
  ],
  "env": { "node": true },
  "overrides": [
    {
      "files": ["*.ts", "*.tsx"],
      "parserOptions": { "project": ["./tsconfig.eslint.json"] },
      "rules": {
        // typescript rules to override
      }
    }
  ]
}
```

### JavaScript + Jest

```jsonc
{
  "extends": ["earlycross/javascript", "earlycross/jest"],
  "plugins": [
    // additional plugins
  ],
  "env": { "node": true },
  "rules": {
    // javascript rules to override
  }
}
```
