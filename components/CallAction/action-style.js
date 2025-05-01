import { makeStyles } from 'tss-react/mui';

const useStyles = makeStyles({ uniqId: 'action' })(theme => ({
  action: {
    textAlign: 'center',
    position: 'relative',
    zIndex: 1,
    padding: theme.spacing(5),
    marginBlock: theme.spacing(5),
    backgroundColor: '#f2f2f2',
    [theme.breakpoints.up('sm')]: {
      marginTop: theme.spacing(10),
      paddingBottom: theme.spacing(10),
    },
    [theme.breakpoints.down('lg')]: {
      paddingTop: 0,
    },
    [theme.breakpoints.down('sm')]: {
      paddingLeft: theme.spacing(2),
      paddingRight: theme.spacing(2)
    },
    '& h4': {
      marginBottom: theme.spacing(6)
    },
  },
  btnArea: {
    margin: theme.spacing(5, 0),
    justifyContent: 'center',
    position: 'relative',
    display: 'flex',
    [theme.breakpoints.down('sm')]: {
      justifyContent: 'space-around'
    },
    '& a': {
      [theme.breakpoints.up('sm')]: {
        marginRight: theme.spacing(2)
      },
      [theme.breakpoints.down('sm')]: {
        margin: 4
      },
      '& img': {
        width: 160,
        [theme.breakpoints.down('sm')]: {
          width: '100%'
        }
      }
    }
  }
}));

// TODO jss-to-tss-react codemod: usages of this hook outside of this file will not be converted.
export default useStyles;
