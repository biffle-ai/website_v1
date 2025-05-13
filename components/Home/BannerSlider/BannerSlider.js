import React, { useState, useEffect, useRef } from 'react';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import Hidden from '@mui/material/Hidden';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import ButtonBase from '@mui/material/ButtonBase';
import Divider from '@mui/material/Divider';
import Carousel from 'react-slick';
import { useTranslation } from 'next-i18next';
import link from '~/public/text/link';
import imgAPI from '~/public/images/imgAPI';
import { useText, useTextAlign } from '~/theme/common';
import useStyles from './slider-style';

function BannerSlider() {
  // Theme breakpoints
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up('md'));
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const { classes, cx } = useStyles();
  const { classes: text } = useText();
  const { classes: align } = useTextAlign();
  const { t } = useTranslation('common');
  const slider = useRef(null);
  const sliderDeco = useRef(null);
  const [deco, setDeco] = useState(null);

  const [curSlide, setCurSlide] = useState(0);

  const slickOptionsDeco = {
    dots: false,
    arrows: false,
    slidesToShow: 1,
    infinite: true,
    fade: true,
    cssEase: 'ease-out',
    autoplay: false
  };

  const slickOptions = {
    dots: false,
    arrows: false,
    speed: 800,
    slidesToShow: 1,
    infinite: true,
    autoplay: false,
    cssEase: 'ease-out',
    fade: isMobile,
    responsive: [
      {
        breakpoint: 960,
        settings: {
          dots: true,
        }
      }
    ]
  };

  const handleAfterChange = currentSlide => {
    setCurSlide(currentSlide);
  };

  const gotoSlide = slide => {
    slider.current.slickGoTo(slide);
  };

  useEffect(() => {
    setTimeout(() => {
      setDeco(sliderDeco.current);
    }, 200)
  }, []);

  return (
    <div className={classes.bannerWrap}>
      <div className={classes.carousel}>
        {isDesktop && (
          <Carousel
            className={classes.sliderDeco}
            {...slickOptionsDeco}
            ref={sliderDeco}
          >
            <div className={cx(classes.slide, curSlide === 0 ? classes.cur : '')}>
              <div className={classes.inner}>
                <div className={classes.decoWrap}>
                  <div className={cx(classes.deco, classes.s1)}>&nbsp;</div>
                </div>
              </div>
            </div>
            <div className={cx(classes.slide, curSlide === 1 ? classes.cur : '')}>
              <div className={classes.inner}>
                <div className={classes.decoWrap}>
                  <div className={cx(classes.deco, classes.s2)}>&nbsp;</div>
                </div>
              </div>
            </div>
            <div className={cx(classes.slide, curSlide === 2 ? classes.cur : '')}>
              <div className={classes.inner}>
                &nbsp;
              </div>
            </div>
          </Carousel>
        )}
        <Carousel
          className={classes.slider}
          {...slickOptions}
          ref={slider}
          asNavFor={deco}
          afterChange={handleAfterChange}
        >
          <div className={classes.slide}>
            <div className={classes.inner}>
              <div className={cx(classes.img, classes.backgroundBanner)}>
                <img
                  className="img-2d3d"
                  src={imgAPI.social[5]}
                  data-2d={imgAPI.social[4]}
                  data-3d={imgAPI.social[5]}
                  alt="background"
                />
              </div>
              <Container>
                <Grid spacing={6} container alignItems="center">
                  <Grid item md={7} lg={6} xs={12}>
                    <Box px={{ sm: 3 }}>
                      <div className={classes.text}>
                        <h4 className={text.title}>
                          {t('social-landing.banner_title')}
                        </h4>
                        <h5 className={text.subtitle}>
                          Connect with top creators in 7+ languages across the world.
                        </h5>
                        <div className={cx(classes.btnArea, classes.download)}>
                          {/* <a href="#">
                            <img src="/images/social/app-store.png" alt="app store" />
                          </a> */}
                          <a href="#">
                            <img src="/images/social/play-store.png" alt="play store" />
                          </a>
                        </div>
                      </div>
                    </Box>
                  </Grid>
                  <Grid item md={5} lg={6} xs={12}>
                    <div className={classes.img}>
                      <img
                        src={imgAPI.social[1]}
                        className={cx('img-2d3d', classes.imgSlide1)}
                        data-2d={imgAPI.social[0]}
                        data-3d={imgAPI.social[1]}
                        alt="banner 1 3D"
                      />
                    </div>
                  </Grid>
                </Grid>
              </Container>
            </div>
          </div>
          <div className={classes.slide}>
            <div className={classes.inner}>
              <Container>
                <Grid container spacing={4} justifyContent="flex-end" alignItems="center" direction={isMobile ? 'column-reverse' : 'row'}>
                  <Grid item md={5} lg={6} xs={12}>
                    <div className={classes.img}>
                      <img
                        className={cx('img-2d3d', classes.imgSlide2)}
                        src={imgAPI.social[3]}
                        data-2d={imgAPI.social[2]}
                        data-3d={imgAPI.social[3]}
                        alt="banner 2 3D"
                      />
                    </div>
                  </Grid>
                  <Grid item md={7} lg={6} xs={12}>
                    <Box px={{ sm: 2 }}>
                      <div className={classes.text}>
                        <h4 className={text.title}>
                          Where every connection tells a story
                        </h4>
                        <h5 className={text.subtitle}>
                          Share your story with premium content creators matching to your interests
                        </h5>
                        <div className={classes.btnArea}>
                          <Box justifyContent="center">
                            {/* <Button color="primary" href="#" className={classes.button}>
                              {t('btn_detail')}
                            </Button> */}
                            <Button size="large" variant="contained" color="secondary" href={link.social.onboarding} className={classes.button}>
                              Start your 7 days free trial
                            </Button>
                          </Box>
                        </div>
                      </div>
                    </Box>
                  </Grid>
                </Grid>
              </Container>
            </div>
          </div>
          <div className={cx(classes.slide, classes.centerContent)}>
            <div className={classes.inner}>
              <Container>
                <Grid container justifyContent="flex-end">
                  <Grid item md={12} xs={12}>
                    <div className={cx(classes.text, align.textCenter)}>
                      <h4 className={text.title2}>
                        Meaningful One-on-One Video Chats with Creators Who Inspire You
                      </h4>
                      <h5 className={text.subtitle}>
                        Safe, meaningful video connections. 100% secure video calls with verified creators
                      </h5>
                      <div className={classes.btnArea}>
                        <Box justifyContent="center">
                          <Button color="primary" href={link.social.onboarding} className={classes.button}>
                            Become a Creator
                          </Button>
                          {/* <Button size="large" variant="contained" color="secondary" href={link.social.register} className={classes.button}>
                            {t('btn_get')}
                          </Button> */}
                        </Box>
                      </div>
                    </div>
                  </Grid>
                  <Grid item md={12} xs={12}>
                    <div className={cx(classes.img, classes.hBanner)}>
                      <img
                        className="img-2d3d"
                        src={imgAPI.social[7]}
                        data-2d={imgAPI.social[6]}
                        data-3d={imgAPI.social[7]}
                        alt="banner 3 3D"
                      />
                    </div>
                  </Grid>
                </Grid>
              </Container>
            </div>
          </div>
        </Carousel>
      </div>
      <Hidden mdDown>
        <Container>
          <nav className={classes.slideNav}>
            <ButtonBase
              className={cx(classes.btnNav, curSlide === 0 ? classes.active : '')}
              onClick={() => gotoSlide(0)}
            >
              <strong>Discover</strong>
              100% verified creators
            </ButtonBase>
            <Divider className={classes.divider} orientation="vertical" flexItem />
            <ButtonBase
              className={cx(classes.btnNav, curSlide === 1 ? classes.active : '')}
              onClick={() => gotoSlide(1)}
            >
              <strong>Short stories</strong>
              Make your conversation interesting
            </ButtonBase>
            <Divider className={classes.divider} orientation="vertical" flexItem />
            <ButtonBase
              className={cx(classes.btnNav, curSlide === 2 ? classes.active : '')}
              onClick={() => gotoSlide(2)}
            >
              <strong>100% Safe</strong>
              Trusted by 1000+ creators
            </ButtonBase>
          </nav>
        </Container>
      </Hidden>
    </div>
  );
}

export default BannerSlider;
