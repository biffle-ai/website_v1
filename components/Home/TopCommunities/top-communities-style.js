import { makeStyles } from 'tss-react/mui';

const topCommunitiesStyles = makeStyles({ uniqId: 'top_communities' })((theme, _params, classes) => ({
  iconGroup: {
    [theme.breakpoints.up('md')]: {
      marginTop: theme.spacing(-10)
    },
    [theme.breakpoints.down('md')]: {
      margin: '0 auto',
      maxWidth: 500,
    },
    [theme.breakpoints.down('sm')]: {
      maxWidth: 400,
      marginBottom: theme.spacing(3)
    },
    '& > *': {
      [theme.breakpoints.down('md')]: {
        display: 'flex',
        justifyContent: 'space-around'
      }
    }
  },
  bigIcon: {
    position: 'relative',
    textAlign: 'center',
    margin: theme.spacing(10, 0),
    [theme.breakpoints.down('md')]: {
      margin: theme.spacing(5, 0)
    },
    [theme.breakpoints.down('sm')]: {
      margin: theme.spacing(2, 0)
    },
    '& h4': {
      fontSize: 16,
      fontWeight: theme.typography.fontWeightBold,
      [theme.breakpoints.up('sm')]: {
        fontSize: 24
      },
      [theme.breakpoints.up('lg')]: {
        fontSize: 32
      }
    }
  },
  icon: {
    lineHeight: '300px',
    margin: '0 auto',
    padding: 3,
    borderRadius: '50%',
    overflow: 'hidden',
    marginBottom: theme.spacing(2),
    width: 200,
    height: 200,
    [theme.breakpoints.down('sm')]: {
      width: 120,
      height: 120,
      lineHeight: '165px'
    },
    '& i': {
      width: 200,
      height: 200,
      display: 'block',
      WebkitBackgroundClip: 'text !important',
      color: 'transparent',
      [theme.breakpoints.up('sm')]: {
        WebkitTextFillColor: 'transparent'
      },
      [theme.breakpoints.down('sm')]: {
        width: 125,
        height: 125
      },
      '&:before': {
        fontSize: 140,
        [theme.breakpoints.down('sm')]: {
          fontSize: 84
        }
      }
    }
  },
  bg: {
    width: '100%',
    height: '100%',
    borderRadius: '50%',
    textAlign: 'center',
    verticalAlign: 'middle',
    background: theme.palette.mode === 'dark' ? theme.palette.background.default : theme.palette.background.paper,
  },
  avatar: {},
  chip: {},
  members: {
    display: 'flex',
    justifyContent: 'center',
    marginBottom: theme.spacing(2),
    [`& .${classes.avatar}`]: {
      width: 30,
      height: 30,
      marginLeft: -10,
      border: '1px solid',
      borderColor: theme.palette.mode === 'dark' ? theme.palette.background.default : theme.palette.background.paper,
    },
    [`& .${classes.chip}`]: {
      position: 'relative',
      color: theme.palette.common.white,
      fontWeight: theme.typography.fontWeightMedium,
      marginLeft: -10,
      border: '3px solid !important',
      borderColor: theme.palette.mode === 'dark' ? theme.palette.background.default : theme.palette.background.paper,
      [theme.breakpoints.down('sm')]: {
        display: 'none'
      }
    }
  },
  btnExplore: {
    fontSize: 22,
    height: '52px !important',
    [theme.breakpoints.up('md')]: {
      width: 350
    },
    [theme.breakpoints.down('md')]: {
      fontSize: 14
    }
  }
}));

// TODO jss-to-tss-react codemod: usages of this hook outside of this file will not be converted.
export default topCommunitiesStyles;
