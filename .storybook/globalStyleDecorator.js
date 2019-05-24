import React from 'react';
import { Global, css } from '@emotion/core';
import { ThemeProvider } from 'emotion-theming';

import baseTheme from '../src/themes/base';

export default (storyFn) => (
  <ThemeProvider theme={baseTheme}>
    <React.Fragment>
      <Global styles={css`
        #root * {
          font-family: Menlo,'Courier New',Courier,monospace;
        }
      `} />
      { storyFn() }
    </React.Fragment>
  </ThemeProvider>
);
