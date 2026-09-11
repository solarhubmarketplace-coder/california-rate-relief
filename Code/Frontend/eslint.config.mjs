import { createRequire } from 'node:module';
const require=createRequire(import.meta.url);
const parser=require('@typescript-eslint/parser');
const react=require('eslint-plugin-react');
const hooks=require('eslint-plugin-react-hooks');
const a11y=require('eslint-plugin-jsx-a11y');
export default [
 {ignores:['.next/**','node_modules/**','public/**']},
 {files:['src/**/*.{ts,tsx}'],languageOptions:{parser,parserOptions:{ecmaVersion:2022,sourceType:'module',ecmaFeatures:{jsx:true}}},plugins:{react,'react-hooks':hooks,'jsx-a11y':a11y},settings:{react:{version:'detect'}},rules:{
   'react/jsx-key':'error','react/jsx-no-duplicate-props':'error','react/jsx-no-undef':'error',
   'react-hooks/rules-of-hooks':'error','react-hooks/exhaustive-deps':'warn',
   'jsx-a11y/alt-text':'error','jsx-a11y/anchor-is-valid':'error',
 }},
];
