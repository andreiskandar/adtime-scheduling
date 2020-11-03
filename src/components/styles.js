import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles((theme) => ({
  button__secondary_navbar: {
    margin: '0 5px',
    height: 30,
    backgroundColor: '#eeeeee',
    color: 'black',
    borderColor: '#9e9e9e !important',
    textTransform: 'none',
    '&:hover': {
      backgroundColor: '#eeeeee',
    },
  },
  icon__secondary_navbar: {
    height: '16px',
    margin: '0 3px 0 0',
  },
}));

export default useStyles;
