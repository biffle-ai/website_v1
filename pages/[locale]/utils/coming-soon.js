import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTranslation } from 'next-i18next';
import Head from 'next/head';
import React, { Fragment, useState } from 'react';
import Header from '~/components/Header';
import Footer from '~/components/Footer';
// Use this below for Server Side Render/Translation (SSR)
// import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
// Use this below for Static Site Generation (SSG)
import PageDeco from '~/components/Decoration/PageDeco';
import Logo from '~/components/Logo';
import { getStaticPaths, makeStaticProps } from '~/lib/getStatic';
import brand from '~/public/text/brand';
import { useSpacing, useText, useTextAlign } from '~/theme/common';

function ComingSoon(props) {
  const { classes, cx } = useSpacing();
  const { classes: align } = useTextAlign();
  const { classes: text } = useText();
  const { t } = useTranslation('common');
  const { onToggleDark, onToggleDir } = props;
  // Breakpoints
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up('sm'));

  const [email, setEmail] = useState('');

  const handleChange = (event) => {
    setEmail(event.target.value);
  };

  return (
    <Fragment>
      <Head>
        <title>{brand.social.name + ' - Coming Soon'}</title>
      </Head>
      <CssBaseline />
      <PageDeco deco />
      <Header onToggleDark={onToggleDark} onToggleDir={onToggleDir} home />
      <Container maxWidth="sm">
        <div className={classes.fullScreenContainer}>
          <Grid container alignItems="center">
            <Grid item md={12} xs={12} className={align.textCenter}>
              <Box
                className={classes.logo}
                display="flex"
                justifyContent="center"
                alignItems="center"
                mb={5}
              >
                <Logo type="landscape" size="large" />
              </Box>
              <div className={align.textCenter}>
                <h3 className={cx(text.title, text.textPrimary)}>
                  {t('util_soon')}
                </h3>
                <Box mb={5}>
                  <h5 className={text.subtitle2}>{t('util_soon_desc')}</h5>
                </Box>
                {/* <div className={classes.form}>
                  <Box mb={{ sm: 10 }}>
                    <Grid container justifyContent="center">
                      <Grid item sm={10} xs={12}>
                        <FormControl variant="filled" fullWidth>
                          <InputLabel htmlFor="standard-adornment-password">{t('form_email')}</InputLabel>
                          <FilledInput
                            fullWidth
                            id="standard-adornment-password"
                            value={email}
                            onChange={handleChange}
                            endAdornment={isDesktop && (
                              <Button
                                variant="contained"
                                color="primary"
                                type="submit"
                                size="small"
                                className={classes.btnNotify}
                              >
                                {t('util_notif')}
                              </Button>
                            )}
                          />
                        </FormControl>
                        {!isDesktop && (
                          <Box mt={3}>
                            <Button
                              variant="contained"
                              color="primary"
                              type="submit"
                              size="large"
                              fullWidth
                            >
                              {t('util_notif')}
                            </Button>
                          </Box>
                        )}
                      </Grid>
                    </Grid>
                  </Box>
                </div>
                <Box mt={5}>
                  <IconButton color="primary" href="#" size="large"><FacebookIcon className={classes.fb} /></IconButton>
                  <IconButton color="primary" href="#" size="large"><InstagramIcon className={classes.ig} /></IconButton>
                  <IconButton color="primary" href="#" size="large"><TwitterIcon className={classes.tw} /></IconButton>
                  <IconButton color="primary" href="#" size="large"><LinkedInIcon className={classes.li} /></IconButton>
                </Box> */}
              </div>
            </Grid>
          </Grid>
        </div>
        
      </Container>
      <Footer bg toggleDir={onToggleDir} />
    </Fragment>
  );
}

// Use this below for Server Side Render/Translation (SSR)
// export const getStaticProps = async ({ locale }) => ({ props: { ...await serverSideTranslations(locale, ['common']) } });

// Use this below for Static Site Generation (SSG)
const getStaticProps = makeStaticProps(['common']);
export { getStaticPaths, getStaticProps };

export default ComingSoon;
