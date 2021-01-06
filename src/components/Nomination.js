import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: '1rem',
    borderBottom: '1px solid #E3E3E3'
  },

  text: {
    fontFamily: 'montserrat'
  },

  title: {
    fontSize: '13pt',
    marginBottom: '0.5rem'
  },
  
  year: {
    fontSize: '12pt',
    color: 'grey',
  },

  btn: {
    fontFamily: 'montserrat',
    background: '#F77737',
    borderRadius: '20px',
    color: 'white',
    border: '1px solid #F77737',
    transition: '0.2s ease-in-out',
    '&:hover': {
      border: '1px solid #F77737',
      color: '#F77737',
      background: 'white'
    }
  }
}));

export default function Nomination(props) {

  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.infoContainer}>
        <Typography className={`${classes.text} ${classes.title}`}>{props.nomination.Title}</Typography>
        <Typography className={`${classes.text} ${classes.year}`}>{props.nomination.Year}</Typography>
      </div>
      <Button 
        variant="contained" 
        className={classes.btn}
        onClick={() => props.deleteNomination(props.nomination.Title)}
        >
        Remove
      </Button>
    </div>
  )
}
