import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';
import SearchIcon from '@material-ui/icons/Search';
import Result from './Result';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    margin: '1rem 1rem 0rem 0rem',
    padding: '1rem',
    borderRadius: '20px',
    boxShadow: "0px 2px 5px 0.5px #E3E3E3"
  },

  headerContainer: {
    display: 'flex',
    justifyContent: 'space-between',
  },

  text: {
    fontFamily: 'montserrat'
  },

  resultsContainer: {
    display: 'flex',
    flexDirection: 'column'
  },
  
  searchResults: {
    minHeight: '400px',
    overflow: 'scroll',
    overflowX: 'hidden',
    '&::-webkit-scrollbar': {
      display: 'none'
    }
  },

  title: {
    fontSize: '20pt',
    fontWeight: '700',
    width: '100%',
    marginBottom: '0.5rem',
    borderBottom: '2px solid #F77737'
  },

  spinner: {
    color: '#F77737'
  },

  iconContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '400px',
  },

  icon: {
    fontSize: '200pt',
    color: '#E3E3E3'
  },


}));

export default function Results(props) {

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.headerContainer}>
        <div className={classes.resultsContainer}>
          <Typography className={`${classes.text} ${classes.title}`}>Search Results</Typography>
        </div>
        <div>
          {props.loading && <CircularProgress className={classes.spinner} size={35}/>}
        </div>
      </div>
      <div className={classes.searchResults}>
        {props.searchString.length !== 0 ? <div>
          {!props.loading && 
            <Typography className={classes.text}>Results for "{props.searchString}"</Typography>
          }
          {props.searchResults && props.searchResults.map((result, index) => {
            return (
            <Result 
              key={index} 
              result={result}
              nominations={props.nominations}
              isNominated={props.nominations[result.Title]}
              maxNominations={Object.keys(props.nominations).length === 5}
              setNominations={props.setNominations}
              /> 
            )
          })}
        </div> 
        : 
        <div className={classes.iconContainer}>
          <Typography className={classes.text}>Nominate your favorite movies!</Typography>
          <SearchIcon className={classes.icon}/>
        </div>
        }
      </div>
    </div>
  )
}
