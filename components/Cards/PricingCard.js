import React from 'react';
import PropTypes from 'prop-types';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import useStyles from './pricing-card-style';

export default function Pricing(props) {
  const { classes, cx } = useStyles();
  const {
    title,
    price,
    description,
    info,
    buttonText,
  } = props;
  const setType = cardType => {
    switch (cardType) {
      case 'Free':
        return classes.basic;
      case 'Pro':
        return classes.value;
      default:
        return '';
    }
  };
  return (
    <Paper className={cx(classes.pricing, setType(title))}>
      <div className={classes.title}>
        <Typography>{title}</Typography>
        <Typography variant="h4">
          {price > 0 && <span>$</span>}
          {price > 0 ? price : 'Free'}
        </Typography>
      </div>
      <ul>
        {description.map((item, index) => (
          <li key={index.toString()}>{item}</li>
        ))}
      </ul>
      <div className={classes.btnArea}>
        <Typography display="block" className={classes.desc}>{info}</Typography>
        <Button
          variant="contained"
          color={title === 'Free' ? 'secondary' : 'primary'}
          className={classes.button}
          size="large"
        >
          {buttonText}
        </Button>
      </div>
    </Paper>
  );
}

Pricing.propTypes = {
  title: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  description: PropTypes.array.isRequired,
  info: PropTypes.string.isRequired,
  buttonText: PropTypes.string,
};

Pricing.defaultProps = {
  buttonText: ''
};
