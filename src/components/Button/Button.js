import PropTypes from 'prop-types';
import styled from '@emotion/styled';

import { borderStyle, paddingStyle, noOutlineStyle, disabledStyle, hoverStyle } from './ButtonStyle';

import { dynamicColor, getTextColor } from '../../utils';

const Button = styled.button`
  background-color: ${props => dynamicColor(props, props.color)};
  color: ${props => getTextColor(props)};

  ${borderStyle}
  ${paddingStyle}
  ${noOutlineStyle}

  ${props => props.disabled ? disabledStyle : hoverStyle}
`;

Button.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  disabled: PropTypes.bool
};

Button.defaultProps = {
  color: 'default',
  size: 'medium',
  disabled: false
};

export default Button;
