import '@storybook/addon-actions/register';
import '@storybook/addon-links/register';
import { configure } from '@storybook/react';

// automatically import all files ending in *.stories.js
configure(require.context('../stories', true, /\.stories\.js$/), module);