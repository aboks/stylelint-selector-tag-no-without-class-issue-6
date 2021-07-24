module.exports = {
  extends: ['stylelint-config-standard'],
  plugins: ['stylelint-scss', 'stylelint-selector-tag-no-without-class'],
  rules: {
    'plugin/selector-tag-no-without-class': ['body', 'html'],
    'declaration-block-trailing-semicolon': null,
    'at-rule-no-unknown': null,
    'scss/at-rule-no-unknown': true,
    'declaration-block-trailing-semicolon': null,
    'font-family-no-missing-generic-family-keyword': null,
  },
};
