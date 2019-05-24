import React from 'react';
import { storiesOf } from '@storybook/react';
import { Flex, Box } from '@rebass/grid/emotion';

import Input from './Input';
import InputREADME from './InputREADME.md';

storiesOf('Components|Input', module)
  .addParameters({
    readme: {
      content: InputREADME
    }
  })
  .add('demo', () => (
    <Flex>
      <Box width={1 / 4} p={20} pt={0}>
        <h2>Text input</h2>
        <Input size='small' placeholder='Small input' fullWidth /><br /><br />
        <Input placeholder='Normal input' fullWidth /><br /><br />
        <Input size='large' placeholder='Large input' fullWidth /><br /><br />
      </Box>
      <Box width={1 / 4} p={20} pt={0}>
        <h2>Other input types</h2>
        <Input type='password' placeholder='Password input' fullWidth /><br /><br />
        <Input type='email' placeholder='Email input' fullWidth /><br /><br />
        <Input type='date' placeholder='Date input' fullWidth /><br /><br />
      </Box>
    </Flex>
  ));
