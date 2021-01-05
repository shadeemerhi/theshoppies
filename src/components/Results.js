import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';
import Result from './Result';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    margin: '1rem 1rem 0rem 0rem',
    // border: '1px solid red',
    padding: '1rem',
    height: '500px',
    borderRadius: '20px',
    boxShadow: "0px 2px 5px 0.5px #E3E3E3"
  },

  headerContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    // alignItems: 'center'
  },

  text: {
    fontFamily: 'montserrat'
  },

  resultsContainer: {
    display: 'flex',
    flexDirection: 'column'
  },
  
  searchResults: {
    // display: 'flex',
    // flexDirection: 'column',
    // height: '500px',
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
  }

}));

export default function Results(props) {

  const classes = useStyles();
  console.log(props.nominations);

  return (
    <div className={classes.root}>
      <div className={classes.headerContainer}>
        <div className={classes.resultsContainer}>
          <Typography className={`${classes.text} ${classes.title}`}>Results</Typography>
        </div>
        <div>
          {props.loading && <CircularProgress className={classes.spinner} size={35}/>}
        </div>
      </div>
      <div className={classes.searchResults}>
        {!props.loading && props.searchString.length !== 0 && 
          <Typography className={classes.text}>Results for "{props.searchString}"</Typography>
        }
        {props.searchResults && props.searchResults.map((result, index) => {
          return (
          <Result 
            key={index} 
            result={result} 
            nominations={props.nominations}
            isNominated={props.nominations[result.Title]}
            setNominations={props.setNominations}
            /> 
          )
        })}
        {/* {!props.searchResults && !props.loading && props.searchString.length !== 0 && 
          <Typography style={{fontFamily: 'montserrat'}}>No Results</Typography>
        } */}
      </div>
    </div>
  )
}
