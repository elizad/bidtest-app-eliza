"use strict";

const OFF = 0;
const ERROR = 2;

module.exports = {
  env: {
    browser: true,
    es6: true
  },
  extends: ["react-app", "eslint:recommended", "plugin:react/recommended"],
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 2018,
    sourceType: "module"
  },
  plugins: ["react"],
  rules: {
    semi: ["error", "never"],
    "accessor-pairs": OFF,
    //'brace-style': [ERROR, '1tbs'],
    "comma-dangle": [ERROR, "always-multiline"],
    "consistent-return": OFF,
    "dot-location": [ERROR, "property"],
    "dot-notation": ERROR,
    "eol-last": ERROR,
    eqeqeq: [ERROR, "allow-null"],
    indent: OFF,
    "jsx-quotes": [ERROR, "prefer-double"],
    "keyword-spacing": [ERROR, { after: true, before: true }],
    "no-bitwise": OFF,
    "no-inner-declarations": [ERROR, "functions"],
    "no-multi-spaces": ERROR,
    "no-restricted-syntax": [ERROR, "WithStatement"],
    "no-shadow": ERROR,
    "no-unused-expressions": ERROR,
    "no-unused-vars": [ERROR, { args: "none" }],
    "no-use-before-define": OFF,
    "no-useless-concat": OFF,
    quotes: [
      ERROR,
      "single",
      { avoidEscape: true, allowTemplateLiterals: true }
    ],
    "space-before-blocks": ERROR,
    "space-before-function-paren": OFF,
    "valid-typeof": [ERROR, { requireStringLiterals: true }],
    "no-var": ERROR,
    strict: ERROR,
    "max-len": OFF,
    "react/jsx-no-undef": ERROR,
    "react/prop-types": OFF,
    "react/jsx-sort-prop-types": OFF,
    "react/jsx-space-before-closing": ERROR,
    "react/jsx-uses-react": ERROR,
    "react/no-is-mounted": OFF,
    "react/react-in-jsx-scope": ERROR,
    "react/self-closing-comp": ERROR,
    "react/jsx-wrap-multilines": [
      ERROR,
      { declaration: false, assignment: false }
    ]
  }
};
