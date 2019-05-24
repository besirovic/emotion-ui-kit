import { configure, addDecorator } from '@storybook/react';
import { addReadme } from 'storybook-readme';

import globalStyleDecorator from './globalStyleDecorator';

addDecorator(addReadme());
addDecorator(globalStyleDecorator);

// automatically import all files ending in *.stories.js
const req = require.context('../src', true, /\.stories\.js$/);
function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
