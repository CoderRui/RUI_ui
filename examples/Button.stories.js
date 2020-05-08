import React from 'react';

import { storiesOf } from '@storybook/react';

storiesOf('通用', module)
  .add('Button', () => (  // 一个 add 表示添加一个 story
    <button onClick={() => console.log(1)}>Hello button</button>
  ))

  