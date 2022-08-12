module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./'],
        extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
        alias: {
          '@src': './src',
          '@components': './src/components',
          '@utils': './src/utils',
          '@screens': './src/screens',
          '@apis': './src/apis',
          '@redux': './src/redux',
          '@assets': './src/assets',
          '@schemas': './src/schemas',
          '@libs': './src/libs',
        },
      },
    ],
    'react-native-reanimated/plugin',
  ],
  env: {
    production: {
      plugins: ['transform-remove-console'], //removing consoles.log from app during release (production) versions
    },
  },
};
