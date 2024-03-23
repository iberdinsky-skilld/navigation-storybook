/** @type { import('@storybook/html-vite').StorybookConfig } */

import { mergeConfig } from 'vite';
import twig from 'vite-plugin-twig-drupal';
import { join } from "node:path"


const config = {
  stories: [
    '../stories/**/*.stories.@(js|jsx|mjs|ts|tsx)',
  ],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
  ],
  framework: {
    name: '@storybook/html-vite',
    options: {},
  },
  docs: {
    autodocs: 'tag',
  },
  async viteFinal(config) {
    // Merge custom configuration into the default config
    return mergeConfig(config, {
      plugins: [
        twig({
          functions: {
            clean_unique_id: (twigInstance) => twigInstance.extendFilter("clean_unique_id", () => (text) => text),
          },
          namespaces: {
            navigation: join(__dirname, "../navigation/templates/"),
          },
        }),
      ],
    });
  },
};
export default config;
