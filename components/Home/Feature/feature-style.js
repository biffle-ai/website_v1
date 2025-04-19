import { makeStyles } from 'tss-react/mui';

const liquidDeco = '/images/social/liquid-mini.svg';

const featureStyles = makeStyles({ uniqId: 'feature' })((theme, _params, classes) => ({
  root: {
    position: 'relative',
  },
  decorationBg: {
    position: 'absolute',
    width: 1280,
    height: '100%',
    left: -20,
    top: 120,
    zIndex: -1,
    [theme.breakpoints.down('sm')]: {
      top: 320
    },
    '& svg': {
      width: '100%',
      height: 1700,
      fill: theme.palette.mode === 'dark' ? theme.palette.secondary.dark : theme.palette.secondary.light,
      opacity: 0.2,
      transform: 'scale(1.3)',
      [theme.breakpoints.up(1400)]: {
        transform: 'scale(2.5, 1)',
      },
      [theme.breakpoints.up('xl')]: {
        display: 'none'
      },
      [theme.breakpoints.down('sm')]: {
        transformOrigin: 'center left'
      }
    }
  },
  last: {},
  desc: {
    position: 'relative',
    zIndex: 60
  },
  item: {
    position: 'relative',
    minHeight: 320,
    marginBottom: theme.spacing(15),
    [theme.breakpoints.down('lg')]: {
      marginBottom: theme.spacing(10)
    },
    [theme.breakpoints.down('md')]: {
      textAlign: 'center',
    },
    '& h6': {
      marginBottom: theme.spacing(4),
    },
    [`&.${classes.last}`]: {
      marginBottom: theme.spacing(10),
      [theme.breakpoints.down('sm')]: {
        marginBottom: 0
      }
    }
  },
  illustration: {
    position: 'relative',
  },
  mobileScreen: {
    width: 203,
    height: 405,
    overflow: 'hidden',
    position: 'relative',
    borderRadius: theme.rounded.medium,
    boxShadow: theme.shade.light,
    [theme.breakpoints.down('sm')]: {
      margin: '0 auto',
    },
    '& img': {
      height: '100%',
      minWidth: '100%'
    }
  },
  desktopScreen: {
    maxWidth: 520,
    margin: '0 auto',
    overflow: 'hidden',
    position: 'relative',
    borderRadius: theme.rounded.medium,
    boxShadow: theme.shade.light,
    '& img': {
      [theme.breakpoints.down('sm')]: {
        width: '100%'
      }
    }
  },
  graphic: {
    position: 'relative',
    margin: 0,
    [theme.breakpoints.down('sm')]: {
      display: 'none'
    },
    '& img': {
      maxWidth: '100%',
    }
  },
  screen1: {
    margin: '0 auto',
  },
  artwork1: {
    width: '100%',
    position: 'absolute',
    bottom: -20,
    left: 0,
  },
  artwork2: {
    width: 240,
    position: 'absolute',
    bottom: 0,
    right: theme.spacing(5),
  },
  artwork3: {
    maxWidth: 870,
    width: '100%',
    position: 'absolute',
    bottom: -40,
    left: '56%',
    transform: 'translateX(-50%)'
  },
  bg: {
    position: 'absolute',
    left: '51%',
    top: '50%',
    transform: 'translate(-50%, -50%)',
    background: `url(${liquidDeco}) no-repeat transparent`,
    backgroundSize: '1663px 567px',
    opacity: 0.15
  },
  liquid1: {
    width: 380,
    height: 350,
    backgroundPosition: '-13px 0',
  },
  liquid2: {
    width: 335,
    height: 327,
    backgroundPosition: '-592px -34px',
  },
  liquid3: {
    width: 555,
    height: 561,
    backgroundPosition: '-1096px -14px',
    [theme.breakpoints.down('sm')]: {
      display: 'none'
    }
  }
}));

// TODO jss-to-tss-react codemod: usages of this hook outside of this file will not be converted.
export default featureStyles;
