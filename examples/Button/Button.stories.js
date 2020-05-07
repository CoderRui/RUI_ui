import React from 'react';

import { storiesOf } from '@storybook/react';

storiesOf('通用|Button', module)
  .add('with text', () => (  // 一个 add 表示添加一个 story
    <button>Hello button</button>
  ))

storiesOf('通用|Icon', module)
  .add('with text', () => (  // 一个 add 表示添加一个 story
    <button>Hello button</button>
  ))