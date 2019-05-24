import { css } from '@emotion/core';

export const fullWidthStyle = ({ fullWidth }) => fullWidth
  ? css`
    width: 100%;
    display: flex;
  `
  : css`
    display: inline-flex;
  `;

export const withCenteredContentStyle = ({ centered }) => css`
  justify-content: ${centered ? 'center' : undefined}
`;

export const withBorderStyle = ({ borderWidth, borderColor, borderStyle }) => borderWidth && borderColor ? css`
  border: ${borderWidth}px ${borderStyle} ${borderColor};
` : undefined;
