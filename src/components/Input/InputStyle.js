import { css } from '@emotion/core';

export const fullWidthStyle = ({ fullWidth }) => css`
  width: ${fullWidth ? '100%' : undefined};
`;

export const borderStyle = props => css`
  border: ${props.theme.borderSize[props.size]}px solid ${props.theme.colors.light};
  border-radius: ${props.theme.edgeSize[props.size]};
`;

export const activeHoverStateStyle = css`
  &:active, &:focus {
    border-color: ${props => props.theme.colors.primary};
  }

  &, &:active, &:focus, &:hover {
    box-shadow: none;
    outline: 0;
  }
`;
