import React from 'react';
import { storiesOf } from '@storybook/react';
import { Flex, Box } from '@rebass/grid/emotion';

import Card from './Card';
import CardREADME from './CardREADME.md';

storiesOf('Components|Card', module)
  .addParameters({
    readme: {
      content: CardREADME
    }
  })
  .add('demo', () => (
    <React.Fragment>
      <Flex>
        <Box width={1 / 3} p={20}>
          <Card fullWidth>
            <h3>Card with light background</h3>
          </Card>
        </Box>
        <Box width={1 / 3} p={20}>
          <Card fullWidth backgroundColor='dark'>
            <h3 style={{ color: '#eee' }}>Card with dark background</h3>
          </Card>
        </Box>
        <Box width={1 / 3} p={20}>
          <Card fullWidth backgroundColor='primary'>
            <h3 style={{ color: '#eee' }}>Card with primary background</h3>
          </Card>
        </Box>
      </Flex>
      <Flex>
        <Box width={1 / 3} p={20}>
          <Card fullWidth backgroundColor='secondary'>
            <h3 style={{ color: '#eee' }}>Card with secondary background</h3>
          </Card>
        </Box>
        <Box width={1 / 3} p={20}>
          <Card fullWidth backgroundColor='red'>
            <h3 style={{ color: '#eee' }}>Card with custom background</h3>
          </Card>
        </Box>
        <Box width={1 / 3} p={20}>
          <Card fullWidth borderWidth={8} borderColor='red'>
            <h3>Card with custom defined border</h3>
          </Card>
        </Box>
      </Flex>
      <Flex>
        <Card fullWidth centered>
          <h3>Card with full width and centered content</h3>
        </Card>
      </Flex>
    </React.Fragment>
  ));
