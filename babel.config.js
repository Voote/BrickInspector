module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      'nativewind/babel',
      [
        'module-resolver',
        {
          root: ['./'],
          alias: {
            '@/features': './features',
            '@/components': './components',
          },
          extensions: [
            '.js',
            '.jsx',
            '.ts',
            '.tsx',
            '.android.js',
            '.android.tsx',
            '.ios.js',
            '.ios.tsx',
          ],
        },
      ],
    ],
  };
};
// module.exports = function (api) {
//   api.cache(true);
//   return {
//     presets: ['babel-preset-expo'],
//     plugins: [
//       'nativewind/babel',
//       [
//         'module-resolver',
//         {
//           extensions: [
//             '.js',
//             '.jsx',
//             '.ts',
//             '.tsx',
//             '.android.js',
//             '.android.tsx',
//             '.ios.js',
//             '.ios.tsx',
//           ],
//           root: ['.'],
//           alias: {
//             '@/features': './features',
//             '@/components': './components',
//           },
//         },
//       ],
//     ],
//   };
// };
