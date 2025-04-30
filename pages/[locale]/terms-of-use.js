import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTranslation } from 'next-i18next';
import Head from 'next/head';
import PropTypes from 'prop-types';
import React, { Fragment } from 'react';
import Banner from '~/components/About/Banner';
// Use this below for Server Side Render/Translation (SSR)
// import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
// Use this below for Static Site Generation (SSG)
import Footer from '~/components/Footer';
import Header from '~/components/Header';
import { getStaticPaths, makeStaticProps } from '~/lib/getStatic';
import imgAPI from '~/public/images/imgAPI';
import brand from '~/public/text/brand';
import link from '~/public/text/link';
import { useSpacing } from '~/theme/common';
import GenericPage from '../../components/genericInfo';
import termsData from '~/lib/terms';

function TermPage(props) {
  // Theme breakpoints

  // Translation Function
  const { t } = useTranslation('common');

  const { classes, cx } = useSpacing();
  const isMobile = useMediaQuery((theme) => theme.breakpoints.down('lg'));

  const { onToggleDark, onToggleDir } = props;
  return (
    <Fragment>
      <Head>
        <title>{brand.social.name + ' - terms of use'}</title>
      </Head>
      <CssBaseline />
      <div className={classes.mainWrap}>
        <Header
          text="Terms of use"
          home
          onToggleDark={onToggleDark}
          onToggleDir={onToggleDir}
        />
        {/* <Container maxWidth="lg"> */}
        {/* <div className={cx(classes.containerGeneral, classes.containerFront)}> */}
        <Banner title="Terms of use" subTitle="">
          <img
            src={imgAPI.socialInner[1]}
            data-2d={imgAPI.socialInner[0]}
            data-3d={imgAPI.socialInner[1]}
            className="img-2d3d"
            alt="services 3d"
          />
        </Banner>
        <Container maxWidth="lg">
        <GenericPage title="Terms of use" termsData={termsData} />
          {/* <div className={cx(classes.containerGeneral, classes.containerFront)}>
            
          </div> */}
        </Container>
        <div className={isMobile ? classes.spaceTopShort : ''}>
          <Footer toggleDir={onToggleDir} />
        </div>
      </div>
    </Fragment>
  );
}

TermPage.propTypes = {
  onToggleDark: PropTypes.func.isRequired,
  onToggleDir: PropTypes.func.isRequired,
};

// Use this below for Server Side Render/Translation (SSR)
// export const getStaticProps = async ({ locale }) => ({ props: { ...await serverSideTranslations(locale, ['common']) } });

// Use this below for Static Site Generation (SSG)
const getStaticProps = makeStaticProps(['common']);
export { getStaticPaths, getStaticProps };

export default TermPage;
