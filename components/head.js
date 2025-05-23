import React from 'react';
import { Head } from 'next/document';
import theme from '~/theme/palette';
import brand from '~/public/text/brand';

const HeadComponent = () => (
  <Head>
    {/* Use minimum-scale=1 to enable GPU rasterization */}
    <meta
      name="description"
      content={brand.social.desc}
    />
    {/* Favicon */}
    <link rel="icon" type="image/png" href="/favicons/favicon.ico" />
    {/* <link rel="apple-touch-icon" sizes="57x57" href="/favicons/apple-icon-57x57.png" /> */}
    {/* <link rel="apple-touch-icon" sizes="60x60" href="/favicons/apple-icon-60x60.png" /> */}
    {/* <link rel="apple-touch-icon" sizes="72x72" href="/favicons/apple-icon-72x72.png" /> */}
    {/* <link rel="apple-touch-icon" sizes="76x76" href="/favicons/apple-icon-76x76.png" /> */}
    {/* <link rel="apple-touch-icon" sizes="114x114" href="/favicons/apple-icon-114x114.png" /> */}
    {/* <link rel="apple-touch-icon" sizes="120x120" href="/favicons/apple-icon-120x120.png" /> */}
    {/* <link rel="apple-touch-icon" sizes="144x144" href="/favicons/apple-icon-144x144.png" /> */}
    {/* <link rel="apple-touch-icon" sizes="152x152" href="/favicons/apple-icon-152x152.png" /> */}
    {/* <link rel="apple-touch-icon" sizes="180x180" href="/favicons/apple-icon-180x180.png" /> */}
    {/* <link rel="icon" type="image/png" sizes="192x192" href="/favicons/android-icon-192x192.png" />
    <link rel="icon" type="image/png" sizes="32x32" href="/favicons/favicon-32x32.png" />
    <link rel="icon" type="image/png" sizes="96x96" href="/favicons/favicon-96x96.png" />
    <link rel="icon" type="image/png" sizes="16x16" href="/favicons/favicon-16x16.png" /> */}
    <link rel="manifest" href="/favicons/manifest.json" />
    {/* <meta name="msapplication-TileColor" content="#ffffff" /> */}
    {/* <meta name="msapplication-TileImage" content="/favicons/ms-icon-144x144.png" /> */}
    {/* PWA primary color */}
    <meta name="theme-color" content={theme.joker.palette.primary.main} />
    <link
      rel="stylesheet"
      href="https://fonts.googleapis.com/css?family=Open+Sans:400,600,700&display=swap"
    />
    <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
    <link href="https://code.ionicframework.com/ionicons/2.0.1/css/ionicons.min.css" rel="stylesheet" />
    {/*  Facebook */}
    <meta property="author" content="biffle.ai" />
    <meta property="og:site_name" content="biffle.ai" />
    <meta property="og:locale" content="en_US" />
    <meta property="og:type" content="website" />
    {/*  Twitter */}
    <meta property="twitter:site" content="biffle.ai" />
    <meta property="twitter:domain" content="biffle.ai" />
    <meta property="twitter:creator" content="biffle.ai" />
    <meta property="twitter:card" content="summary" />
    <meta property="twitter:image:src" content="/images/logo-social.png" />
    <meta property="og:url" content={brand.social.url} />
    <meta property="og:title" content={brand.social.name} />
    <meta
      property="og:description"
      content={brand.social.desc}
    />
    <meta name="twitter:site" content={brand.social.url} />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:image" content={brand.social.img} />
    <meta property="og:image" content={brand.social.img} />
    <meta property="og:image:width" content="1200" />
    <meta property="og:image:height" content="630" />
  </Head>
);

export default HeadComponent;
