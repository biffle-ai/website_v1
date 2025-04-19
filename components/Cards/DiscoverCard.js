import React from 'react';
import PropTypes from 'prop-types';
import Paper from '@mui/material/Paper';
import { useText } from '~/theme/common';
import useStyles from './discover-card-style';

function DiscoverCard(props) {
  const { classes } = useStyles();
  const { classes: text } = useText();
  const {
    img,
    illustration3d,
    illustration2d,
    color,
    title,
    desc
  } = props;

  return (
    <div className={classes.discoverCard}>
      <figure className={classes.screen}>
        <img src={img} alt="screen" />
      </figure>
      <Paper className={classes.paper}>
        <img
          src={illustration3d}
          data-2d={illustration2d}
          data-3d={illustration3d}
          className="img-2d3d"
          alt="illustration"
        />
        <strong className={text[color + 'Color']}>{title}</strong>
        <p>
          {desc}
        </p>
      </Paper>
    </div>
  );
}

DiscoverCard.propTypes = {
  img: PropTypes.string.isRequired,
  illustration3d: PropTypes.string.isRequired,
  illustration2d: PropTypes.string,
  color: PropTypes.string,
  title: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired
};

DiscoverCard.defaultProps = {
  color: 'primary',
  illustration2d: ''
};

export default DiscoverCard;
