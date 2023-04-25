const config = {
  stories: ['../stories/**/*.stories.mdx', '../stories/**/*.stories.@(js|jsx|ts|tsx)'],
  framework: {
    name: '@storybook/ember'
  },
  addons: ['@storybook/addon-mdx-gfm'],
  docs: {
    autodocs: true
  }
};

export default config;
