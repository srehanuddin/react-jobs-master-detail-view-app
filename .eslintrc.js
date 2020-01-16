module.exports = {
  'env': {
    'browser': true,
    'es6': true,
    'node': true
  },
  'parser': 'babel-eslint',
  "extends": "eslint:recommended",
  'parserOptions': {
    'ecmaFeatures': {
      'jsx': true
    },
    'ecmaVersion': 2018,
    'sourceType': 'module'
  },
  'plugins': [
    'react'
  ],
  'rules': {
    'array-callback-return': 1,
    'arrow-body-style': 0,
    'arrow-callback-return': 0,
    'arrow-parens': 0,
    'arrow-spacing': 0,
    'block-spacing': 2,
    'camelcase': 0,
    'comma-dangle': [2, 'never'],
    'consistent-return': 0,
    'class-methods-use-this': 0,
    'curly': 0,
    'dot-notation': 0,
    'eol-last': 0,
    'function-paren-newline': 0,
    'generator-star-spacing': 0,
    'indent': ['error', 2, {
      "SwitchCase": 1
    }],
    'implicit-arrow-linebreak': 0,
    'import/newline-after-import': 0,
    'import/no-unresolved': 0,
    'import/no-useless-path-segments': 0,
    'import/order': 0,
    'import/prefer-default-export': 0,
    'jsx-quotes': 0,
    'keyword-spacing': 2,
    'key-spacing': 2,
    'linebreak-style': ['error', 'unix'],
    'lines-between-class-members': [2, 'always', {
      exceptAfterSingleLine: true
    }],
    'max-len': [2, {
      'code': 80,
      'ignoreStrings': true,
      'ignoreComments': true
    }],
    'multiline-ternary': [2, 'always-multiline'],
    'no-confusing-arrow': 0,
    'no-console': 2,
    'no-else-return': 1,
    'no-mixed-operators': 0,
    'no-multi-spaces': 0,
    'no-param-reassign': 0,
    'no-plusplus': 1,
    'no-restricted-globals': 1,
    'no-script-url': 0,
    'no-spaced-func': 2,
    'no-trailing-spaces': 2,
    'no-underscore-dangle': 1,
    'no-unused-expressions': 0,
    'no-unused-vars': ['off'],
    'no-var': 2,
    'nonblock-statement-body-position': 0,
    'operator-linebreak': 0,
    'object-curly-newline': 0,
    'object-curly-spacing': 0,
    'object-shorthand': 0,
    'padded-blocks': 0,
    'prefer-const': 0,
    'prefer-destructuring': 0,
    'prefer-template': 0,
    'quote-props': 0,
    'quotes': ['error', 'single'],
    'react/button-has-type': 0,
    'react/destructuring-assignment': 0,
    'react/display-name': 0,
    'react/forbid-prop-types': 0,
    'react/jsx-boolean-value': 1,
    'react/jsx-closing-bracket-location': 0,
    'react/jsx-closing-tag-location': 0,
    'react/jsx-curly-brace-presence': 0,
    'react/jsx-curly-spacing': 0,
    'react/jsx-filename-extension': 0,
    'react/jsx-first-prop-new-line': 0,
    'react/jsx-indent': 0,
    'react/jsx-indent-props': 0,
    'react/jsx-max-props-per-line': 0,
    'react/jsx-one-expression-per-line': 0,
    'react/jsx-tag-spacing': 0,
    'react/jsx-wrap-multilines': 0,
    'react/no-access-state-in-setstate': 0,
    'react/no-array-index-key': 1,
    'react/no-deprecated': 0,  // TODO change to 1 or 2
    'react/no-unescaped-entities': 0, // TODO change to 1
    'react/no-unused-state': 0,
    'react/no-unused-prop-types': 0,
    'react/prefer-stateless-function': 0,
    'react/prop-types': 1,
    'react/require-default-props': 0,
    'react/self-closing-comp': 0,
    'react/sort-comp': 0,
    'semi': ['error', 'never'],
    'space-before-blocks': 2,
    'space-before-function-paren': [2, {
      'anonymous': 'never',
      'named': 'never',
      'asyncArrow': 'always'
    }],
    'space-in-parens': [2, 'never'],
    'space-infix-ops': [2, { 'int32Hint': false }],
    'space-unary-ops': [2, {
      'words': true,
      'nonwords': false
    }],
    'spaced-comment': [2, 'always']
  },
  'settings': {
    'react': {
      'version': 'detect'
    }
  },
  "overrides": [
    {
      "files": [
        "**/*.test.js",
        "**/*.test.jsx"
      ],
      "env": {
        "jest": true
      }
    }
  ]
}
