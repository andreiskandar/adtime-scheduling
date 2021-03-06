import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
  flex: {
    display: 'flex',
    fontFamily:
      "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'",
    fontSize: '15px',
    alignItems: 'center',
    justifyContent: 'space-between',
    margin: '0 5px 8px 5px',
  },
  selected: {
    display: 'flex',
    fontSize: '15px',
  },
  name: {
    margin: '0 5px',
  },
  error: {
    border: 'solid thin red',
    margin: '0 8px',
    borderRadius: '3px',
    height: '20px',
    display: 'flex',
    justifyContent: 'center',
    color: 'red',
    fontFamily:
      "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans','Helvetica Neue';",
  },
  delete: {
    backgroundColor: '',
  },
  warning: {
    background: '#ff9800',
  },
  title__dialog: {
    backgroundColor: '#3f51b5',
    '& h2': {
      color: '#f5f5f5',
    },
    marginBottom: '8px',
  },
  joke: {
    height:'426px'
  },
}));


export default useStyles;
