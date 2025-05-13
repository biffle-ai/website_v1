import React from 'react';
import PropTypes from 'prop-types';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { useTheme } from '@mui/material/styles';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import useMediaQuery from '@mui/material/useMediaQuery';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import IconButton from '@mui/material/IconButton';
import { useTranslation } from 'next-i18next';
import NextLink from 'next/link';
import Decoration from './Decoration';
import logo from '~/public/images/biffleLogo.png';
// import brand from '~/public/text/brand';
// import SelectLang from '../LangSwitch/Select';
import { useTextAlign } from '~/theme/common';
import useStyles from './sitemap-style';

function Copyright() {
  return (
    <Typography variant="body2" display="block">
      &copy;&nbsp; 2025, Sofnics Tech Labs (P) (L) All Rights reserved
    </Typography>
  );
}

const footers = [
  {
    title: 'Company',
    description: [
      'About us',
      'Privacy Policy',
      'Terms of Use',
      'Refund Policy',
    ],
    link: ['/about', '/privacy-policy', '/terms-of-use', '/utils/coming-soon'],
  },

  {
    title: 'Community',
    description: [
      'Safety Centre',
      'Community Guidelines',
      'Creator Centre',
      'Earn from Biffle.ai',
    ],
    link: [
      '/safety-centre',
      '/guidelines',
      // '/creator-centre',
      '/utils/coming-soon',
      '/onboarding',
    ],
  },
  // {
  //   title: 'Resources',
  //   description: ['Blogs', 'Moderation partners', 'Payment partners'],
  //   link: ['/blogs', '/mod-partners', '/google-play'],
  // },
];

function Footer(props) {
  // Theme breakpoints
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up('md'));
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  // Translation Function
  // const { bg, toggleDir } = props;
  const { bg } = props;
  const { t } = useTranslation('common');

  const { classes, cx } = useStyles();
  const { classes: align } = useTextAlign();

  return (
    <footer className={cx(classes.footer, bg ? classes.hasBg : '')}>
      <Decoration bg={bg} />
      <Container className={classes.root} fixed={isMobile}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={3}>
            <div className={classes.logo}>
              <img src={logo} alt="logo" />
              {/* <Typography variant="h6" color="textPrimary">
                {brand.social.projectName}
              </Typography> */}
            </div>
            <Typography
              color="textPrimary"
              className={classes.footerDesc}
              gutterBottom
            >
              {t('social-landing.banner_title')}
              .&nbsp;
              {t('social-landing.banner_desc')}
            </Typography>
            <Typography
              color="textPrimary"
              className={classes.footerDesc}
              gutterBottom
            >
              social@biffle.ai
            </Typography>
            {isDesktop && <Copyright />}
          </Grid>
          <Grid item xs={12} md={6}>
            <Grid container justifyContent="space-evenly">
              {footers.map((footer) => (
                <Grid
                  item
                  xs={12}
                  md={4}
                  key={footer.title}
                  className={classes.siteMapItem}
                >
                  {isDesktop && (
                    <div>
                      <Typography
                        variant="h6"
                        className={classes.title}
                        color="textPrimary"
                        gutterBottom
                      >
                        {footer.title}
                      </Typography>
                      <ul>
                        {footer.description.map((item, index) => (
                          <li key={item}>
                            <Link
                              href={footer.link[index]}
                              variant="subtitle1"
                              color="textSecondary"
                              underline="hover"
                            >
                              {item}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                  {isMobile && (
                    <Accordion
                      square
                      classes={{
                        root: classes.accordionRoot,
                      }}
                    >
                      <AccordionSummary
                        expandIcon={
                          <ExpandMoreIcon className={classes.accordionIcon} />
                        }
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                        classes={{
                          content: classes.accordionContent,
                        }}
                      >
                        <strong>{footer.title}</strong>
                      </AccordionSummary>
                      <AccordionDetails>
                        <ul>
                          {footer.description.map((item, index) => (
                            <li key={item}>
                              <Link
                                href={footer.link[index]}
                                variant="subtitle1"
                                color="textSecondary"
                                underline="hover"
                              >
                                {item}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </AccordionDetails>
                    </Accordion>
                  )}
                </Grid>
              ))}
            </Grid>
          </Grid>
          <Grid item xs={12} md={3}>
            <div className={classes.socmed}>
              <IconButton
                aria-label="FB"
                className={classes.margin}
                size="small"
              >
                <NextLink href="https://www.youtube.com/@biffle-ai">
                  <i className="ion-social-youtube" />
                </NextLink>
              </IconButton>

              <NextLink href="https://www.facebook.com/profile.php?id=61574120158673">
                <IconButton
                  aria-label="TW"
                  className={classes.margin}
                  size="small"
                >
                  <i className="ion-social-facebook" />
                </IconButton>
              </NextLink>
              <NextLink href="https://www.instagram.com/biffle.ai?igsh=ZmQ1ZWJxM282anN3&utm_source=qr">
                <IconButton
                  aria-label="IG"
                  className={classes.margin}
                  size="small"
                >
                  <i className="ion-social-instagram" />
                </IconButton>
              </NextLink>
              <NextLink href="https://www.linkedin.com/company/biffle-ai/">
                <IconButton
                  aria-label="LI"
                  className={classes.margin}
                  size="small"
                >
                  <i className="ion-social-linkedin" />
                </IconButton>
              </NextLink>
            </div>
            {/* <SelectLang toggleDir={toggleDir} /> */}
          </Grid>
        </Grid>
        {isMobile && (
          <div className={align.textCenter}>
            <Box p={4}>
              <Copyright />
            </Box>
          </div>
        )}
      </Container>
    </footer>
  );
}

Footer.propTypes = {
  // toggleDir: PropTypes.func,
  bg: PropTypes.bool,
};

Footer.defaultProps = {
  toggleDir: () => {},
  bg: false,
};

export default Footer;
