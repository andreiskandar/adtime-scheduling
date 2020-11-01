import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  title__dialog: {
    backgroundColor: '#3f51b5',
    '& h2': {
      color: '#f5f5f5',
    },
    marginBottom: '8px',
  },
  flex: {
    display: 'flex',
    fontFamily:
      "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'",
    fontSize: '15px',
    alignItems: 'center',
    margin: '0 5px 8px 5px',
  },
  name: {
    margin: '0 5px',
  },
  moreInfo: {
    display: 'flex',
    flexDirection: 'column',
    marginLeft: '10px',
    '& p': {
      marginBottom: 0,
    },
  },
}));

export default useStyles;
