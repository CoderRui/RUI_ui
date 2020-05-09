// module.exports = {
//   stories: ['../stories/**/*.stories.tsx'],
//   addons: ['@storybook/addon-actions', '@storybook/addon-links'],
//   webpackFinal: async config => {
//     // do mutation to the config

//     return config;
//   },
// };
import React from 'react'

import { configure, addDecorator, addParameters } from '@storybook/react';

const wrapperStyle: React.CSSProperties = {
  padding: '20px 40px'
}

const storyWrapper = (stroyFn: any) => (
  <div style={wrapperStyle}>
    <h3>组件演示</h3>
    {stroyFn()}
  </div>
)

addDecorator(storyWrapper)

const loaderFn = () => {
  const allExports = [];
  const req = require.context('../stories', true, /\.stories\.tsx$/);
  req.keys().forEach(fname => allExports.push(req(fname)));
  return allExports;
};


configure(loaderFn, module);