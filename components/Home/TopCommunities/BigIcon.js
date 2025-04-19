import React from 'react';
import PropTypes from 'prop-types';
import Avatar from '@mui/material/Avatar';
import Chip from '@mui/material/Chip';
import useStyles from './top-communities-style';

function BigIcon(props) {
  const { classes, cx } = useStyles();

  const {
    icon, name, count,
    color1, color2, members
  } = props;

  return (
    <div className={classes.bigIcon}>
      <div
        className={classes.icon}
        style={{ background: `linear-gradient(120deg, ${color2}, ${color1})` }}
      >
        <div className={classes.bg}>
          <i
            className={icon}
            style={{
              background: `linear-gradient(120deg, ${color2}, ${color1})`,
              color: color2
            }}
          >
            &nbsp;
          </i>
        </div>
      </div>
      <div className={classes.members}>
        {members.map((item, index) => (
          <Avatar
            key={index.toString()}
            className={cx(classes.small, classes.avatar)}
            src={item}
            alt="member"
          />
        ))}
        <Chip className={classes.chip} label={'+' + count} style={{ background: color2 }} />
      </div>
      <h4 style={{ color: color2 }}>{name}</h4>
    </div>
  );
}

BigIcon.propTypes = {
  icon: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  count: PropTypes.number.isRequired,
  color1: PropTypes.string,
  color2: PropTypes.string,
  members: PropTypes.array.isRequired,
};

BigIcon.defaultProps = {
  color1: '#673AB7',
  color2: '#00BCD4'
};

export default BigIcon;
