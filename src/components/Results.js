import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';
import Result from './Result';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    border: '1px solid green',
    margin: '1rem 1rem 0rem 0rem',
    padding: '1rem'
  },

  titleContainer: {
    display: 'flex',
    justifyContent: 'space-between'
  },

  title: {
    fontFamily: 'montserrat',
    fontSize: '20pt',
    fontWeight: '700',
    marginBottom: '0.5rem'
  },

}));

export default function Results(props) {
  console.log('in results', props.searchString.length);

  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.titleContainer}>
        <Typography className={classes.title}>Results</Typography>
        {props.loading && <CircularProgress />}
      </div>
      {props.searchResults && props.searchResults.map((result, index) => {
        return <Result key={index} result={result}/> 
      })}
      {!props.searchResults && !props.loading && props.searchString.length !== 0 && 
        <Typography>No Results</Typography>
      }
    </div>
  )
}
