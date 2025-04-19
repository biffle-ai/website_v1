import React from 'react';
import PropTypes from 'prop-types';
import useStyles from './deco-style';

function Decoration(props) {
  const { classes, cx } = useStyles();
  const { bg } = props;
  return (
    <div className={cx(classes.footerDeco, bg ? classes.bg : '')}>
      <div className={classes.decoBgTop} />
    </div>
  );
}

Decoration.propTypes = {
  bg: PropTypes.bool,
};

Decoration.defaultProps = {
  bg: 'false'
};

export default Decoration;
