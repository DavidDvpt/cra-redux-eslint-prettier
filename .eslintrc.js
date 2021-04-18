module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:prettier/recommended',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['react', 'prettier'],
  overrides: [
    {
      files: ['**/*.spec.js', '**/*.spec.jsx', '**/*.test.js', '**/*.test.jsx'],
      env: {
        jest: true,
      },
    },
  ],
  rules: {
    // 'import/extensions': 'off',
    'react/jsx-filename-extension': [1, { extensions: ['.jsx'] }],
    // 'react/react-in-jsx-scope': 'off',
  },
};
