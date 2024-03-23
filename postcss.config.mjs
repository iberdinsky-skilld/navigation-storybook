/** @type {import('postcss-load-config').Config} */

import postcssImport from 'postcss-import';
import postcssUrl from 'postcss-url';
import postcssPresetEnv from 'postcss-preset-env';
import postcssPixelsToRem from 'postcss-pxtorem';

const config = {
  plugins: [
    postcssImport(),
    postcssPresetEnv({
      stage: 1,
      preserve: false,
      autoprefixer: {
        cascade: false,
        grid: "no-autoplace",
      },
      features: {
        "blank-pseudo-class": false,
        "focus-visible-pseudo-class": false,
        "focus-within-pseudo-class": false,
        "has-pseudo-class": false,
        "image-set-function": false,
        "prefers-color-scheme-query": false,
      },
    }),
    postcssPixelsToRem({
      propList: [
        "*",
        "!background-position",
        "!border",
        "!border-width",
        "!box-shadow",
        "!border-top*",
        "!border-right*",
        "!border-bottom*",
        "!border-left*",
        "!border-start*",
        "!border-end*",
        "!outline*",
      ],
      mediaQuery: true,
      minPixelValue: 3,
      // Prevent converting PX to REM for icon styles. These files have been
      // added to use the `postcssUrl` plugin, but aren't compatible with
      // `postcssPixelsToRem`.
      exclude: (filePath) =>
        filePath.match(/core\/modules.*\.icons\..*\.pcss\.css$/),
    }),
    postcssUrl({
      filter: "**/*.svg",
      url: "inline",
      optimizeSvgEncode: true,
    }),
  ],
};

export default config