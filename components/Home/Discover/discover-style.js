import { makeStyles } from 'tss-react/mui';

const discoverStyles = makeStyles({ uniqId: 'discover' })(theme => ({
  root: {
    position: 'relative',
    zIndex: 5,
    [theme.breakpoints.down('lg')]: {
      marginBottom: theme.spacing(15)
    },
    [theme.breakpoints.down('sm')]: {
      marginBottom: theme.spacing(10)
    }
  },
  carousel: {
    position: 'relative',
    '& ul[class*="slick-dots"]': {
      position: 'relative',
      bottom: -25,
      [theme.breakpoints.down('sm')]: {
        bottom: 0,
      },
      '& li': {
        width: 15,
        height: 15,
        border: `1px solid ${theme.palette.secondary.main}`,
        borderRadius: 15,
        opacity: 0.7,
        transition: 'all 0.5s ease-out',
        margin: theme.spacing(0, 0.5),
        '&[class="slick-active"]': {
          background: theme.palette.secondary.main,
          width: 40,
        },
        '& button:before': {
          display: 'none'
        }
      },
    }
  },
  item: {
    direction: 'ltr',
    padding: theme.spacing(0, 3),
    [theme.breakpoints.up('sm')]: {
      padding: theme.spacing(3)
    },
    '&:focus': {
      outline: 'none'
    }
  }
}));

// TODO jss-to-tss-react codemod: usages of this hook outside of this file will not be converted.
export default discoverStyles;
