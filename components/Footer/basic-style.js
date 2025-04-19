import { makeStyles } from 'tss-react/mui';
const decoFooter = '/images/social/footer-deco.svg';

const basicStyles = makeStyles({ uniqId: 'footer_basic' })((theme, _params, classes) => ({
  hasBg: {},
  footer: {
    position: 'relative',
    '&:after': {
      content: '""',
      width: '100%',
      height: 240,
      background: `url(${decoFooter}) transparent no-repeat`,
      backgroundPosition: 'bottom center',
      backgroundSize: '100%',
      position: 'absolute',
      bottom: 0,
      left: 0,
      opacity: '0.15'
    },
    [`&.${classes.hasBg}`]: {
      paddingTop: 600,
      marginTop: -600,
    },
  },
  root: {
    paddingTop: 1,
    paddingBottom: theme.spacing(15),
    textAlign: 'center',
    position: 'relative',
    zIndex: 11,
    '& nav': {
      margin: theme.spacing(6, 0),
      '& ul': {
        margin: 0,
        padding: 0,
        '& li': {
          display: 'inline-block',
          margin: theme.spacing(0, 1),
          '& a': {
            color: theme.palette.text.primary,
            textTransform: 'capitalize',
            textDecoration: 'none !important',
            padding: theme.spacing(0, 1),
            fontSize: 18,
            [theme.breakpoints.down('sm')]: {
              fontSize: 16
            }
          }
        }
      }
    }
  },
  logo: {
    marginBottom: theme.spacing(3),
    '& img': {
      width: 70,
    }
  },
  subscribe: {
    maxWidth: 560,
    margin: '0 auto',
    marginBottom: theme.spacing(5),
    position: 'relative',
    '& h5': {
      fontWeight: theme.typography.fontWeightBold
    }
  },
  form: {
    display: 'block',
    position: 'relative',
    marginTop: theme.spacing(3),
  },
  field: {
    width: '100%',
    '& input': {
      paddingRight: theme.spacing(20),
      [theme.breakpoints.down('sm')]: {
        paddingRight: 90
      }
    }
  },
  button: {
    position: 'absolute',
    right: 0,
    top: 0,
    width: 90
  },
  socmed: {
    display: 'flex',
    width: 200,
    margin: `${theme.spacing(8)} auto`,
    justifyContent: 'space-between',
  },
  icon: {
    padding: theme.spacing(),
    background: theme.palette.divider,
    color: theme.palette.primary.main,
    '&:hover': {
      background: theme.palette.primary.dark,
      color: theme.palette.primary.light
    },
    '& i': {
      width: 25,
      height: 25,
      fontSize: 22,
      lineHeight: '24px'
    }
  },
  copyright: {
    position: 'relative',
    display: 'block',
    padding: theme.spacing(1.5),
    marginTop: theme.spacing(3),
  }
}));

// TODO jss-to-tss-react codemod: usages of this hook outside of this file will not be converted.
export default basicStyles;
