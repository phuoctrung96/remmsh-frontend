import {Rect} from 'react-konva';
import PropTypes from 'prop-types';

export const Rectangle = ({x, y, width, height, fill, ...rest}) => {
  return (
    <Rect
      x={x}
      y={y}
      width={width}
      height={height}
      fill={fill}
      shadowBlur={10}
      {...rest}
    />
  );
};

Rectangle.propTypes = {
  x: PropTypes.number,
  y: PropTypes.number,
  width: PropTypes.number,
  height: PropTypes.number,
  fill: PropTypes.string,
};
