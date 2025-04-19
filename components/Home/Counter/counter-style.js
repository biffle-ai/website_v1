import { makeStyles } from 'tss-react/mui';

const counterStyles = makeStyles({ uniqId: 'counter_home' })((theme, _params, classes) => ({
  counterWrap: {
    position: 'relative',
    [theme.breakpoints.up('sm')]: {
      marginTop: theme.spacing(20)
    },
  },
  text: {},
  counterItem: {
    '& p': {
      display: 'flex',
      color: theme.palette.text.secondary,
      alignItems: 'center',
      justifyContent: 'center',
      textTransform: 'capitalize',
      '& i': {
        fontSize: 40,
        marginRight: theme.spacing(2)
      }
    },
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
    alignItems: 'center',
    justifyContent: 'center',
    [`& .${classes.text}`]: {
      textAlign: 'center',
      '& h3': {
        position: 'relative',
        color: theme.palette.mode === 'dark' ? theme.palette.secondary.light : theme.palette.secondary.dark,
        paddingBottom: theme.spacing(2),
      }
    }
  },
  counterInner: {
    '& > div': {
      position: 'relative',
      '&:after': {
        content: '""',
        borderLeft: `2px solid ${theme.palette.primary.dark}`,
        opacity: 0.2,
        height: 90,
        position: 'absolute',
        right: 0,
        top: 30,
        [theme.breakpoints.down('sm')]: {
          display: 'none'
        },
      }
    },
    '& > div:last-child': {
      '&:after': {
        display: 'none'
      }
    }
  }
}));

// TODO jss-to-tss-react codemod: usages of this hook outside of this file will not be converted.
export default counterStyles;
