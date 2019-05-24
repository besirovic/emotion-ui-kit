import { css } from '@emotion/core';

export const borderStyle = props => css`
  border: none;
  border-radius: ${props.theme.edgeSize[props.size]}px;
`;

export const paddingStyle = props => css`
  padding: ${props.color !== 'default' ? props.theme.spacing[props.size] : undefined}px;
`;

export const noOutlineStyle = css`
  &, &:active {
    outline: none;
  }
`;

export const hoverStyle = css`
  &:hover {
    opacity: 0.9;
    cursor: pointer;
  }
`;

export const disabledStyle = css`
  opacity: 0.6;
  cursor: not-allowed;
`;
