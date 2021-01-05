import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    border: '1px solid blue',
    margin: '1rem 0rem 0rem 1rem',
    padding: '1rem'

  },

  title: {
    fontFamily: 'montserrat',
    fontSize: '20pt',
    fontWeight: '700',
    marginBottom: '0.5rem'
  },

}));

export default function Nominations() {

  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Typography className={classes.title}>Nominations</Typography>
    </div>
  )
}
