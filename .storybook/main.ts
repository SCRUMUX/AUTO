import type { StorybookConfig } from '@storybook/react-vite';
import path from 'path';

const coreDir = path.dirname(require.resolve('@ai-ds/core/package.json'));

const config: StorybookConfig = {
  framework: '@storybook/react-vite',
  stories: [
    '../pages/**/*.stories.tsx',
    path.join(coreDir, 'components/**/*.stories.tsx'),
  ],
  addons: [
    '@storybook/addon-essentials',
    '@storybook/addon-themes',
  ],
  staticDirs: [
    { from: path.join(coreDir, 'images'), to: '/images' },
  ],
  typescript: {
    reactDocgen: 'react-docgen',
  },
};

export default config;
