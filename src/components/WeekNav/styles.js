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
    // fontFamily:
    //   " -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol','Noto Color Emoji'",
    fontSize: '11px',
    fontFamily: 'inherit',
    textTransform: 'none',
  },
  icon__weeknav: {
    height: '14px',
    marginRight: '4px',
  },
  weekCalendar: {
    height: 25,
  },
}));

export default useStyles;
