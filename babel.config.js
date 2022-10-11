module.exports = {
  presets: ['@babel/preset-env', '@babel/preset-react'],
  plugins: [
    ['@babel/plugin-proposal-export-default-from'],
    [
      require.resolve('babel-plugin-module-resolver'),
      {
        root: ['./src'],
        extensions: ['.js', '.ts', '.tsx', '.json'],
        alias: {
          '@animation': './src/animation',
          '@assets': './src/assets',
          '@constants': './src/constants',
          '@components': './src/components',
          '@hooks': './src/hooks',
          '@libs': './src/libs',
          '@localization': './src/localization',
          '@navigation': './src/navigation',
          '@redux': './src/redux',
          '@screens': './src/screens',
          '@services': './src/services',
          '@theme': './src/theme',
          '@utils': './src/utils',
        },
      },
    ],
  ],
};
