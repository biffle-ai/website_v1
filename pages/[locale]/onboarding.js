import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import useMediaQuery from '@mui/material/useMediaQuery';
import Head from 'next/head';
import { useTranslation } from 'next-i18next';
// Use this below for Server Side Render/Translation (SSR)
// import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
// Use this below for Static Site Generation (SSG)
import { getStaticPaths, makeStaticProps } from '~/lib/getStatic';
import { onBoardingFAQ } from '~/lib/faq';
import { useSpacing } from '~/theme/common';
import Header from '~/components/Header/Basic';
import Footer from '~/components/Footer';
import brand from '~/public/text/brand';
import link from '~/public/text/link';
import OnboardingForm from '../../components/Forms/onboardingForm';
import Features from '../../components/Forms/features';
import Testimonials from '../../components/Forms/Testimonials';
import FAQ from '../../components/Forms/FAQ';

function OnboardingPage(props) {
  // Theme breakpoints

   // Translation Function
  const { t } = useTranslation('common');

  const { classes, cx } = useSpacing();
  const isMobile = useMediaQuery(theme => theme.breakpoints.down('lg'));

  const { onToggleDark, onToggleDir } = props;
  return (
    <Fragment>
      <Head>
        <title>
          { brand.social.name + ' - onboarding' }
        </title>
      </Head>
      <CssBaseline />
      <div className={classes.mainWrap}>
        <Header
          text={t('header_register')}
          href={link.social.register}
          onToggleDark={onToggleDark}
          onToggleDir={onToggleDir}
        />
        <Container maxWidth="lg">
          <div className={cx(classes.containerGeneral, classes.containerFront)}>
            <OnboardingForm />
          </div>
          <Features />
          <Testimonials data={onBoardingFAQ} />
          <FAQ />
        </Container>
        <div className={isMobile ? classes.spaceTopShort : ''}>
          <Footer toggleDir={onToggleDir} />
        </div>
      </div>
    </Fragment>
  );
}

OnboardingPage.propTypes = {
  onToggleDark: PropTypes.func.isRequired,
  onToggleDir: PropTypes.func.isRequired,
};

// Use this below for Server Side Render/Translation (SSR)
// export const getStaticProps = async ({ locale }) => ({ props: { ...await serverSideTranslations(locale, ['common']) } });

// Use this below for Static Site Generation (SSG)
const getStaticProps = makeStaticProps(['common']);
export { getStaticPaths, getStaticProps };

export default OnboardingPage;
