import React, { useState, useEffect } from 'react';
import App from 'next/app';
import Head from 'next/head';
import PropTypes from 'prop-types';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { CacheProvider } from '@emotion/react';
import createCache from '@emotion/cache';
import rtlPlugin from 'stylis-plugin-rtl';
import { prefixer } from 'stylis';
import CssBaseline from '@mui/material/CssBaseline';
import { appWithTranslation } from 'next-i18next';
import lngDetector from '../lib/languageDetector';
import appTheme from '~/theme/appTheme';
/* import css vendors */
import 'react-18-image-lightbox/style.css';
import '~/vendors/animate.css';
import '~/vendors/animate-slider.css';
import '~/vendors/hamburger-menu.css';
import '../vendors/animate-extends.css';
import '../vendors/page-transition.css';
import '../vendors/slick/slick.css';
import '../vendors/slick/slick-theme.css';

let themeType = 'light';
if (typeof Storage !== 'undefined') { // eslint-disable-line
  themeType = localStorage.getItem('oironTheme') || 'light';
}

const isBrowser = typeof document !== 'undefined';
let insertionPoint;

if (isBrowser) {
  const emotionInsertionPoint = document.querySelector(
    'meta[name="emotion-insertion-point"]',
  );
  insertionPoint = emotionInsertionPoint ?? undefined;
}

const cacheRTL = createCache({
  key: 'mui-style-rtl',
  stylisPlugins: [prefixer, rtlPlugin],
  insertionPoint,
  prepend: true,
});

const cacheLTR = createCache({
  key: 'mui-style-ltr',
  insertionPoint,
  prepend: true,
});

function MyApp(props) {
  const { Component, pageProps, router } = props; // eslint-disable-line

  const curLang = lngDetector.detect();

  const themeName = 'violeta';
  const defaultTheme = 'light';
  const [theme, setTheme] = useState({
    ...appTheme(themeName, defaultTheme),
    direction: 'ltr',
  });

  useEffect(() => {
    // Set layout direction
    const themeDir = curLang === 'ar' ? 'rtl' : 'ltr';
    document.dir = themeDir;
    document.documentElement.setAttribute('lang', curLang);

    // Set color mode and direction
    if (themeType === 'dark' || curLang === 'ar') {
      setTheme({
        ...appTheme(themeName, themeType || defaultTheme),
        direction: themeDir
      });
    }
  }, []);

  const toggleDarkTheme = () => {
    const newPaletteType = theme.palette.mode === 'light' ? 'dark' : 'light';
    localStorage.setItem('oironTheme', theme.palette.mode === 'light' ? 'dark' : 'light');

    setTheme({
      ...appTheme(themeName, newPaletteType),
      direction: theme.direction,
    });
  };

  const toggleDirection = dir => {
    document.dir = dir;
    // set theme
    setTheme({
      ...theme,
      direction: dir,
      palette: {
        ...theme.palette
      }
    });
  };

  const muiTheme = createTheme(theme);
  return (
    <CacheProvider value={theme.direction === 'rtl' ? cacheRTL : cacheLTR}>
      <Head>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no"
        />
      </Head>
      <ThemeProvider theme={muiTheme}>
        <CssBaseline />
        <div id="main-wrap">
          <Component
            {...pageProps}
            onToggleDark={toggleDarkTheme}
            onToggleDir={toggleDirection}
            key={router.route}
          />
        </div>
      </ThemeProvider>
    </CacheProvider>
  );
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object.isRequired,
  router: PropTypes.object.isRequired
};

MyApp.getInitialProps = async (appContext) => ({ ...(await App.getInitialProps(appContext)) });

export default appWithTranslation(MyApp);
