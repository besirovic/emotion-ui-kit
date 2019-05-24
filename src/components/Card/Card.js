import PropTypes from 'prop-types';
import styled from '@emotion/styled';

import { fullWidthStyle, withBorderStyle, withCenteredContentStyle } from './CardStyle';

import { dynamicColor } from '../../utils/color';

const Card = styled.div`
  background-color: ${props => dynamicColor(props, props.backgroundColor)};
  padding: ${props => props.theme.spacing.large}px;
  border-radius: ${props => props.theme.edgeSize.medium * 2}px;
  box-sizing: border-box;

  ${fullWidthStyle}
  ${withBorderStyle}
  ${withCenteredContentStyle}
`;

Card.propTypes = {
  fullWidth: PropTypes.bool,
  centered: PropTypes.bool,
  backgroundColor: PropTypes.string,
  borderWidth: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  borderColor: PropTypes.string,
  borderStyle: PropTypes.string
};

Card.defaultProps = {
  fullWidth: false,
  centered: false,
  backgroundColor: 'light',
  borderStyle: 'solid'
};

export default Card;
