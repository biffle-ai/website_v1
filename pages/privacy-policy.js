import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import useMediaQuery from '@mui/material/useMediaQuery';
import Head from 'next/head';
import PropTypes from 'prop-types';
import React, { Fragment } from 'react';
import Banner from '~/components/About/Banner';
import Footer from '~/components/Footer';
import Header from '~/components/Header';
import imgAPI from '~/public/images/imgAPI';
import brand from '~/public/text/brand';
import { useSpacing } from '~/theme/common';
import GenericPage from '../components/genericInfo';
import termsData from '~/lib/privacy';

function Privacy(props) {
  const { classes } = useSpacing();
  const isMobile = useMediaQuery((theme) => theme.breakpoints.down('lg'));

  const { onToggleDark, onToggleDir } = props;
  return (
    <Fragment>
      <Head>
        <title>{brand.social.name + ' - privacy policy'}</title>
      </Head>
      <CssBaseline />
      <div className={classes.mainWrap}>
        <Header
          text="Community Guidelines"
          home
          onToggleDark={onToggleDark}
          onToggleDir={onToggleDir}
        />
        <Banner title="Privacy Policy" subTitle="">
          <img
            src={imgAPI.socialInner[1]}
            data-2d={imgAPI.socialInner[0]}
            data-3d={imgAPI.socialInner[1]}
            className="img-2d3d"
            alt="services 3d"
          />
        </Banner>
        <Container maxWidth="lg">
          <GenericPage termsData={termsData} />
        </Container>
        <div className={isMobile ? classes.spaceTopShort : ''}>
          <Footer toggleDir={onToggleDir} />
        </div>
      </div>
    </Fragment>
  );
}

Privacy.propTypes = {
  onToggleDark: PropTypes.func.isRequired,
  onToggleDir: PropTypes.func.isRequired,
};

export default Privacy;
