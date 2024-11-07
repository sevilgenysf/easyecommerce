module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        alias: {
          '@components': './src/components',
          '@pages': './src/pages',
          '@assets': './src/assets',
          '@utils': './src/utils',
        },
      },
    ],
  ],
};
