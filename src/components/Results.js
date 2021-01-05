import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';
import Result from './Result';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    margin: '1rem 1rem 0rem 0rem',
    padding: '1rem',
    borderRadius: '20px',
    boxShadow: "0px 2px 5px 0.5px #E3E3E3",
    // height: '500px',
    // overflow: 'scroll',
    // overflowX: 'hidden',
    // '&::-webkit-scrollbar': {
    //   display: 'none'
    // }
  },

  resultsContainer: {
    height: '500px',
    overflow: 'scroll',
    overflowX: 'hidden',
    '&::-webkit-scrollbar': {
      display: 'none'
    }
  },

  titleContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
  },

  title: {
    fontFamily: 'montserrat',
    fontSize: '20pt',
    fontWeight: '700',
    marginBottom: '0.5rem',
    borderBottom: '2px solid #F77737'
  },

  spinner: {
    color: '#F77737'
  }

}));

export default function Results(props) {

  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.titleContainer}>
        <Typography className={classes.title}>Results</Typography>
        {props.loading && <CircularProgress className={classes.spinner} size={30}/>}
      </div>
      <div className={classes.resultsContainer}>
        {props.searchResults && props.searchResults.map((result, index) => {
          return <Result key={index} result={result}/> 
        })}
        {!props.searchResults && !props.loading && props.searchString.length !== 0 && 
          <Typography style={{fontFamily: 'montserrat'}}>No Results</Typography>
        }
      </div>
    </div>
  )
}
