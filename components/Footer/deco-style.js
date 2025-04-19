import { makeStyles } from 'tss-react/mui';
import { darken, lighten } from '@mui/material/styles';

const decoLightTop = '/images/social/deco-light-top.svg';
const decoDarkBottom = '/images/social/deco-dark-top.svg';

const useStyles = makeStyles({ uniqId: 'deco' })((theme, _params, classes) => ({
  bg: {},
  footerDeco: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    bottom: 0,
    left: 0,
    [`&.${classes.bg}`]: {
      background: theme.palette.mode === 'dark' ? darken(theme.palette.primary.dark, 0.8) : lighten(theme.palette.primary.light, 0.8)
    },
  },
  decoBgTop: {
    backgroundImage: theme.palette.mode === 'dark' ? `url(${decoDarkBottom})` : `url(${decoLightTop})`,
    backgroundRepeat: 'no-repeat',
    backgroundColor: 'transparent',
    backgroundSize: '100% auto',
    transform: 'scale(1, 0.4)',
    position: 'absolute',
    width: '100%',
    height: 600,
    left: 0,
    top: -180
  },
}));

// TODO jss-to-tss-react codemod: usages of this hook outside of this file will not be converted.
export default useStyles;
