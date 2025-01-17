import React from 'react';
import PropTypes from 'prop-types';

import Chip from '@mui/Chip';
import Avatar from '@mui/Avatar';

const defaultProps = {
  scale: 0.8,
  text: 'dummy text',
};

const propTypes = {
  scale: PropTypes.number,
  text: PropTypes.string,
};

export default function SclAvatar(props) {
  const style = {
    transform: `scale(${props.scale})`,
    transformOrigin: 'left',
//        left: -95 * (1 - props.scale) / 2,
//        position: 'absolute',
  };
  const chipProps = Object.assign({}, props);
  delete chipProps.text;
  return (
    <div>
      <div style={style} >
        <Chip {...chipProps} >

          {<Avatar>{props.text[0].toUpperCase()}</Avatar>}
          {props.text}
        </Chip>

      </div>
    </div>
  );
}
SclAvatar.defaultProps = defaultProps;
SclAvatar.propTypes = propTypes;
