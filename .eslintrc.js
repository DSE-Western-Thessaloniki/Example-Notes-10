module.exports = {
    env: {
      browser: true,
      es2021: true,
      node: true
    },
    extends: [
      'plugin:vue/essential',
      'eslint:recommended',
      'plugin:prettier/recommended',
      'eslint:recommended'
    ],
    parserOptions: {
      ecmaVersion: 'latest',
      parser: '@typescript-eslint/parser',
      sourceType: 'module'
    },
    plugins: [
      'vue',
      '@typescript-eslint',
      'vue-eslint-parser'
    ],
    rules: {
    }
  }
