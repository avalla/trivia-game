module.exports = {
  root: false,
  extends: ['react-app'],
  plugins: ['import', 'jsx-a11y', 'flowtype'],
  rules: {
    'no-console': ['warn', { allow: ['clear', 'info', 'error', 'dir', 'trace', 'log'] }],
    'react/jsx-props-no-spreading': 'off',
    'react/no-danger': 'off',
    'react/jsx-no-bind': 'off',
    'jsx-a11y/click-events-have-key-events': 'off',
    'jsx-a11y/label-has-associated-control': 'off',
    'jsx-a11y/control-has-associated-label': 'off',
  },
};
