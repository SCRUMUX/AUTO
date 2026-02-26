import type { StorybookConfig } from '@storybook/react-vite';

const config: StorybookConfig = {
  framework: '@storybook/react-vite',
  stories: [
    '../pages/**/*.stories.tsx',
    '../node_modules/@ai-ds/core/components/**/*.stories.tsx',
  ],
  addons: [
    '@storybook/addon-essentials',
    '@storybook/addon-themes',
  ],
  staticDirs: [
    { from: '../node_modules/@ai-ds/core/images', to: '/images' },
  ],
  typescript: {
    reactDocgen: 'react-docgen',
  },
};

export default config;
