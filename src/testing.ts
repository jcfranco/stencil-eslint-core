import { RuleTester } from 'eslint';

export const ruleTester = (projectPath: string) => new RuleTester({
  parser: require.resolve("@typescript-eslint/parser"),
  parserOptions: {
    ecmaVersion: 2017,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true
    },
    project: projectPath,
    env: {
      browser: true,
      node: true,
      es6: true
    }
  }
});
