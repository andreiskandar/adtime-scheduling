import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    '&:hover': {
      opacity: 1,
    },
  },

  navigation_arrow__btn: {
    height: 25,
  },
  dateString: {
    fontSize: '11px',
    fontFamily: 'inherit',
    textTransform: 'none',
  },
  icon__weeknav: {
    height: '18px',
    marginRight: '4px',
  },
  weekCalendar: {
    height: 25,
  },
  
}));

export default useStyles;
