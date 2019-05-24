export const dynamicColor = (props, color) => {
  return props.theme.colors[color] || color
};

export const getTextColor = (props) => ['light', 'default'].includes(props.color) ? props.theme.colors.dark : props.theme.colors.light;
