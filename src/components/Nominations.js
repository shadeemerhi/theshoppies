import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    margin: '1rem 0rem 0rem 1rem',
    padding: '1rem',
    borderRadius: '20px',
    boxShadow: "0px 2px 5px 0.5px #E3E3E3",

  },

  title: {
    fontFamily: 'montserrat',
    fontSize: '20pt',
    fontWeight: '700',
    marginBottom: '0.5rem',
    borderBottom: '2px solid #F77737'
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
