module.exports = {
  root: true,
  plugins: ['react', 'import', 'unused-imports'],
  parser: '@babel/eslint-parser',
  parserOptions: {
    ecmaVersion: 12,
    ecmaFeatures: {
      jsx: true,
    },
    requireConfigFile: false,
    sourceType: 'module',
  },
  env: {
    browser: true,
    node: true,
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx'],
      },
      'eslint-import-resolver-custom-alias': {
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
        extensions: ['.js', '.jsx'],
        packages: ['packages/*'],
      },
    },
  },
  rules: {
    'react-hooks/exhaustive-deps': 'off',

    'import/no-unresolved': [2, { commonjs: true, amd: true }],
    'import/no-unused-modules': 2,
    'import/no-extraneous-dependencies': 2,
    'import/extensions': ['error', 'never', { svg: 'always', json: 'always' }],
    'import/no-duplicates': 2,
    'react/jsx-uses-react': 2,
    'react/jsx-uses-vars': 2,
    'unused-imports/no-unused-imports': 'error',
    'no-unused-vars': 'off',
    'import/order': [
      'error',
      {
        groups: ['builtin', 'external', 'internal', 'parent'],
        pathGroups: [
          {
            pattern: 'react',
            group: 'external',
            position: 'before',
          },
        ],
        pathGroupsExcludedImportTypes: ['builtin'],
        'newlines-between': 'always',
        alphabetize: {
          order: 'asc',
          caseInsensitive: true,
        },
      },
    ],
  },
};
