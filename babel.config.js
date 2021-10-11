module.exports = {
  presets: [
    ['@babel/preset-env', {targets: {node: 'current'}}],
    '@babel/preset-typescript',
    "@babel/preset-react",
    "@emotion/babel-preset-css-prop"
  ],
  "plugins": [
    "@emotion/babel-plugin"
  ]
};
