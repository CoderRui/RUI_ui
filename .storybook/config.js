// config.js
import { configure, addParameters } from '@storybook/react';
import customTheme from './theme'
 

const req = require.context('../examples', true, /\.stories\.js$/)
 
function loadStories() {
  req.keys().forEach((filename) => req(filename))
}

addParameters({
    // 2.
    options: {
      showPanel: true,
      panelPosition: 'right',
      theme: customTheme
    },
  });
  
 
configure(loadStories, module);
