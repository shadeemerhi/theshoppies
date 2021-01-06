import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Nomination from './Nomination';
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';
import MovieFilterIcon from '@material-ui/icons/MovieFilter';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    margin: '1rem 0rem 0rem 1rem',
    padding: '1rem',
    borderRadius: '20px',
    boxShadow: "0px 2px 5px 0.5px #E3E3E3",

  },

  text: {
    fontFamily: 'montserrat',
  },
  

  titleContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  titleMain: {
    display: 'flex',
    alignItems: 'center'
  },

  nominationsContainer: {
    height: '400px',
  },

  iconContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
  },

  icon: {
    fontSize: '200pt',
    color: '#E3E3E3'
  },

  check: {
    fontSize: '28pt',
    marginLeft: '1rem',
    color: '#1DA1F2'
  },

  title: {
    fontSize: '20pt',
    fontWeight: '700',
    marginBottom: '0.5rem',
    borderBottom: '2px solid #F77737'
  },


  counter: {
    fontSize: '20pt',
    color: titles => titles.length === 5 ? '#1DA1F2' : 'black'
  }

}));

export default function Nominations(props) {

  const deleteNomination = function(nomination) {
    console.log(nomination);
    console.log(props.nominations);
    delete props.nominations[nomination];
    props.setNominations({
      ...props.nominations
    })

  }


  console.log(props.nominations);
  const titles = Object.keys(props.nominations);
  console.log(titles);

  const classes = useStyles(titles);

  return (
    <div className={classes.root}>
      <div className={classes.titleContainer}>
        <div className={classes.titleMain}>
          <Typography className={`${classes.text} ${classes.title}`}>Nominations</Typography>
          {titles.length === 5 && <CheckCircleOutlineIcon className={classes.check}/>}
        </div>
        <div className={classes.titleCounter}>
          <Typography className={`${classes.text} ${classes.counter}`}>{titles.length}/5</Typography>
        </div>
      </div>
      <div className={classes.nominationsContainer}>
        {titles.length !== 0 ? titles.map(title => {
          return (
            <Nomination 
              nomination={props.nominations[title]}
              deleteNomination={deleteNomination}
              />
            )
        }) : 
        <div className={classes.iconContainer}>
          <Typography className={classes.text}>Nominate your favorite movies!</Typography>
          <MovieFilterIcon className={classes.icon}/>
        </div>
      }
      </div>
    </div>
  )
}
