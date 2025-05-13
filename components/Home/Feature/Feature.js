import React from 'react';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import ScrollAnimation from 'react-scroll-animation-wrapper';
import Grid from '@mui/material/Grid';
import { useTranslation } from 'next-i18next';
import { Button } from '@mui/material';
import { useTextAlign, useText } from '~/theme/common';
import imgAPI from '~/public/images/imgAPI';
import Title from '../../Title';
import TitleSecondary from '../../Title/TitleSecondary';
import useStyles from './feature-style';
import link from '~/public/text/link';

function Feature() {
  const { classes, cx } = useStyles();
  const { classes: text } = useText();
  const { classes: align } = useTextAlign();
  const theme = useTheme();

  const { t } = useTranslation('common');
  const isDesktop = useMediaQuery(theme.breakpoints.up('lg'));
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <div className={classes.root}>
      <Container fixed={isDesktop}>
        <Title align="center">
          <span>
            Why Choose Biffle?
          </span>
        </Title>
        <div className={classes.item}>
          <Grid container alignItems="center" direction={isMobile ? 'column-reverse' : 'row'}>
            <Grid item md={6} xs={12}>
              <Box px={{ sm: 4 }}>
                <ScrollAnimation
                  animateOnce
                  animateIn="fadeInLeftShort"
                  offset={100}
                  delay={500}
                  duration={0.5}
                >
                  <div className={classes.illustration}>
                    <div className={cx(classes.bg, classes.liquid1)} />
                    <figure className={cx(classes.screen1, classes.mobileScreen)}>
                      <img
                        src="/images/3.png"
                        alt="screen"
                        style={{
                          objectFit:'cover',
                          height:'100%',
                          width:'100%',
                        }}
                      />
                    </figure>
                    <figure className={cx(classes.graphic, classes.artwork1)}>
                      <img
                        src={imgAPI.social[10]}
                        data-2d={imgAPI.social[9]}
                        data-3d={imgAPI.social[10]}
                        className="img-2d3d"
                        alt="illustration"
                      />
                    </figure>
                  </div>
                </ScrollAnimation>
              </Box>
            </Grid>
            <Grid item md={6} xs={12}>
              <Box px={{ sm: 4 }}>
                <div className={classes.desc}>
                  <TitleSecondary
                    text="Personalized Connections"
                    align={isMobile ? 'center' : 'left'}
                  />
                  <h6 className={cx(text.subtitle2, isMobile ? align.textCenter : align.textLeft)}>
                    Connect with live with creators, influencers, and experts in a safe, judgment-free space.
                  </h6>
                </div>
              </Box>
            </Grid>
          </Grid>
        </div>
        <div className={classes.item}>
          <Grid container alignItems="center">
            <Grid item md={6} xs={12}>
              <Box px={{ sm: 4 }}>
                <div className={classes.desc}>
                  <TitleSecondary
                    text="Explore yourself – In ways you can’t imagine!"
                    align={isMobile ? 'center' : 'right'}
                  />
                  <h6 className={cx(text.subtitle2, isMobile ? align.textCenter : align.textRight)}>
                    From casual conversations to expert advice, find creators who match your interests.
                  </h6>
                </div>
              </Box>
            </Grid>
            <Grid item md={6} xs={12}>
              <Box px={{ sm: 5 }}>
                <ScrollAnimation
                  animateOnce
                  animateIn="fadeInRightShort"
                  offset={200}
                  delay={500}
                  duration={0.5}
                >
                  <div className={classes.illustration}>
                    <div className={cx(classes.bg, classes.liquid2)} />
                    <figure className={cx(classes.screen2, classes.mobileScreen)}>
                      <img
                        src="/images/5.png"
                        alt="screen"
                        style={{
                          objectFit:'cover',
                          height:'100%',
                          width:'100%',
                        }}
                      />
                    </figure>
                    <figure className={cx(classes.graphic, classes.artwork2)}>
                      <img
                        src={imgAPI.social[12]}
                        data-2d={imgAPI.social[11]}
                        data-3d={imgAPI.social[12]}
                        className="img-2d3d"
                        alt="illustration"
                      />
                    </figure>
                  </div>
                </ScrollAnimation>
              </Box>
            </Grid>
          </Grid>
        </div>
        <div className={cx(classes.item, classes.last)}>
          <div className={classes.decorationBg}>
            <svg className={classes.wave}>
              <use xlinkHref="/images/social/deco-bg2.svg#main" />
            </svg>
          </div>
          <TitleSecondary
            text="Exclusive Content"
            align="center"
          />
          <Grid container justifyContent="center" spacing={6}>
            <Grid item md={10} xs={12}>
              <Box p={{ sm: 6 }}>
                <h6 className={cx(align.textCenter, text.subtitle2)}>
                  Unlock premium posts, live streams, and private messages with your favorite creators.
                </h6>
                <ScrollAnimation
                  animateOnce
                  animateIn="fadeInUpShort"
                  offset={10}
                  delay={500}
                  duration={0.5}
                >
                  <div className={classes.illustration}>
                    <div className={cx(classes.bg, classes.liquid3)} />
                    <figure className={cx(classes.screen3, classes.desktopScreen)}>
                      <img
                        src="/images/banner.png"
                        alt="screen"
                        style={{
                          objectFit:'cover',
                          height:'100%',
                          width:'100%',
                        }}
                      />
                    </figure>
                    <figure className={cx(classes.graphic, classes.artwork3)}>
                      <img
                        src={imgAPI.social[14]}
                        data-2d={imgAPI.social[13]}
                        data-3d={imgAPI.social[14]}
                        className="img-2d3d"
                        alt="illustration"
                      />
                    </figure>
                  </div>
                </ScrollAnimation>
              </Box>
            </Grid>
          </Grid>
        </div>
        
        <Box display="flex" justifyContent="center">
          <Button size="large" variant="contained" color="secondary" href={link.social.onboarding} className={classes.button}>
            Start your 7 days free trial
          </Button>
        </Box>
      </Container>
    </div>
  );
}

Feature.propTypes = {

};

export default Feature;
