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
      "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans','Helvetica Neue';",
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
}));

export default useStyles;
