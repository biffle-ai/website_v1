import { makeStyles } from 'tss-react/mui';

const discoverCardStyles = makeStyles({ uniqId: 'discover_card' })(theme => ({
  discoverCard: {
    [theme.breakpoints.up('sm')]: {
      display: 'flex',
      alignItems: 'center'
    }
  },
  screen: {
    width: 220,
    height: 400,
    margin: 0,
    overflow: 'hidden',
    position: 'relative',
    borderRadius: 20,
    background: theme.palette.background.paper,
    boxShadow: theme.shade.light,
    zIndex: 2,
    [theme.breakpoints.down('sm')]: {
      margin: '0 auto',
    },
    '& img': {
      width: '100%'
    }
  },
  paper: {
    textAlign: 'center',
    borderRadius: 40,
    flex: 1,
    [theme.breakpoints.up('sm')]: {
      padding: theme.spacing(3),
      marginBottom: theme.spacing(2),
      height: 290,
      paddingLeft: 240,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'flex-end',
      marginLeft: -220
    },
    [theme.breakpoints.down('sm')]: {
      paddingTop: theme.spacing(10),
      marginTop: theme.spacing(-5),
      background: 'none',
      boxShadow: 'none',
    },
    '& img': {
      maxWidth: '100%',
      maxHeight: 210,
      margin: `0 auto ${theme.spacing()}`,
      [theme.breakpoints.down('sm')]: {
        display: 'none'
      }
    },
    '& strong': {
      fontWeight: theme.typography.fontWeightBold,
      fontSize: 24,
      marginBottom: theme.spacing(2)
    }
  }
}));

// TODO jss-to-tss-react codemod: usages of this hook outside of this file will not be converted.
export default discoverCardStyles;
