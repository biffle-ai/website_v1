import React from 'react';
import PropTypes from 'prop-types';
import useStyles from './decoration-style';

export default function PageDeco(props) {
  const { classes } = useStyles();
  const { deco } = props;
  return (
    <div className={classes.pageDeco}>
      <div className={classes.topDeco} />
      {deco && (
        <div className={classes.bottomDeco} />
      )}
    </div>
  );
}

PageDeco.propTypes = {
  deco: PropTypes.bool
};

PageDeco.defaultProps = {
  deco: false
};
