import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  small: {
    width: theme.spacing(3),
    height: theme.spacing(3),
  },
  profile__form: {
    display: 'flex',
    alignItems: 'center',
    margin: '8px 10px',
  },
  name: {
    margin: '0 5px',
  },
  availability__form: {
    border: 'solid 2px #9e9e9e',
    borderRadius: '5px',
    margin: '8px',
    display: 'flex',
  },
  day_header__form: {
    borderBottom: 'solid 2px #9e9e9e',
    borderRight: 'solid 1px  #9e9e9e',
    display: 'flex',
    padding: '5px',
    justifyContent: 'center',
  },
  availability_time__form: {
    display: 'flex',
    flexDirection: 'column',
    borderRight: 'solid 1px  #9e9e9e',
    alignItems: 'center',
  },
  submit__form: {
    margin: '5px',
  },
  time__form: {
    width: '80%',
    marginBottom: '10px',
  },
  info: {
    margin: '10px',
  },
}));

export default useStyles;
