import React, { useState } from 'react';
import CountUp from 'react-countup';
import ScrollAnimation from 'react-scroll-animation-wrapper';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
// import { useTranslation } from 'next-i18next';
import { Box, Button } from '@mui/material';
import { useText } from '~/theme/common';
import useStyles from './counter-style';
import Title from '../../Title';

function Counter() {
  const { classes } = useStyles();
  const { classes: text } = useText();
  const [play, setPlay] = useState(false);
  // const { t } = useTranslation('common');
  const countup = (val, isPlay) => (
    <span>
      {isPlay ? <CountUp end={val} /> : 0}
    </span>
  );
  const handlePlay = visible => {
    if (visible.inViewport) {
      setTimeout(() => { setPlay(true); }, 200);
    }
  };
  return (
    <div className={classes.counterWrap}>
      <Container maxWidth="md">
        <Title align="center">
          <span>
            A World of Connections at Your Fingertips
          </span>
        </Title>
        <ScrollAnimation animateOnce animateIn="fadeIn" offset={-200} afterAnimatedIn={handlePlay}>
          <Grid
            container
            justifyContent="center"
            alignItems="center"
            className={classes.counterInner}
            spacing={6}
          >
            <Grid md={4} item>
              <div className={classes.counterItem}>
                <div className={classes.text}>
                  <h3 className={text.title}>
                    {countup(1000, play)}
                    +
                  </h3>
                  <p className={text.subtitle}>
                    {/* <i className="ion-ios-cloud-download-outline" /> */}
                    {/* {t('social-landing.counter_downloads')} */}
                    Creators
                  </p>
                </div>
              </div>
            </Grid>
            <Grid md={4} item>
              <div className={classes.counterItem}>
                <div className={classes.text}>
                  <h3 className={text.title}>
                    +
                    {countup(180, play)}
                    K
                  </h3>
                  <p className={text.subtitle}>
                    {/* <i className="ion-ios-people-outline" /> */}
                    {/* {t('social-landing.counter_members')} */}
                    Stories
                  </p>
                </div>
              </div>
            </Grid>
            <Grid md={4} item>
              <div className={classes.counterItem}>
                <div className={classes.text}>
                  <h3 className={text.title}>
                    +
                    {countup(1000, play)}
                    K
                  </h3>
                  <p className={text.subtitle}>
                    {/* <i className="ion-ios-paw-outline" /> */}
                    {/* {t('social-landing.counter_communities')} */}
                    Connections
                  </p>
                </div>
              </div>
            </Grid>
          </Grid>
        </ScrollAnimation>
        <Box mt={4} display="flex" justifyContent="center">
          <Button size="large" variant="contained" color="secondary" href={"#"} className={classes.button}>
            Meet Global Creators Now
          </Button>
        </Box>
      </Container>
    </div>
  );
}

Counter.propTypes = {

};

export default Counter;
