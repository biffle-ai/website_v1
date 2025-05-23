import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import HeroBanner from '../HeroBanner';
import { useText } from '~/theme/common';
import useStyles from './about-style';

function Banner(props) {
  const { classes, cx } = useStyles();
  const { classes: text } = useText();
  const { children, title, subTitle } = props;

  return (
    <HeroBanner>
      <div className={classes.bannerWrap}>
        <div className={classes.inner}>
          <Grid container alignItems="center" justifyContent="center">
            <Grid item md={6} xs={12}>
              <Box px={{ sm: 2 }}>
                <div className={classes.text}>
                  <h4 className={cx(text.title2, text.textPrimary)}>{title}</h4>
                  <h5 className={text.subtitle2}>{subTitle}</h5>
                </div>
              </Box>
            </Grid>
            <Grid item md={6} xs={12}>
              <Box px={{ sm: 5 }}>
                <div className={classes.img}>{children}</div>
              </Box>
            </Grid>
          </Grid>
        </div>
      </div>
    </HeroBanner>
  );
}

Banner.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.string.isRequired,
};

export default Banner;
