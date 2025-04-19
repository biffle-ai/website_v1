import { makeStyles } from 'tss-react/mui';

const newsEventStyle = makeStyles({ uniqId: 'news_event' })(theme => ({
  root: {
    position: 'relative',
    margin: '0 auto',
  },
  blogWrap: {
    position: 'relative',
    zIndex: 10,
    marginTop: theme.spacing(10),
    [theme.breakpoints.up('sm')]: {
      marginBottom: theme.spacing(10),
    }
  },
}));

// TODO jss-to-tss-react codemod: usages of this hook outside of this file will not be converted.
export default newsEventStyle;
