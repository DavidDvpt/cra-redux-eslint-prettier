module.exports = {
  '*.{js,jsx}': ['eslint --fix src', 'prettier --write'],
  '*.{md,mdx,css, scss,yaml,yml}': ['prettier --write'],
};
