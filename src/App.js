import { useApplicationData } from './hooks/useApplicationData';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Search from './components/Search';
import Results from './components/Results';
import Nominations from './components/Nominations';


const useStyles = makeStyles((theme) => ({

  root: {
    border: '1px solid red'
  }
}));

export default function App() {

  const classes = useStyles();

  const {
    searchResults
  } = useApplicationData();
  
  console.log(searchResults);


  return (
    <Grid container className={classes.root}>
      <Grid item xs={12}>
        <Search />
      </Grid>
      <Grid item xs={6}>
        <Results />
      </Grid>
      <Grid item xs={6}>
        <Nominations />
      </Grid>
    </Grid>
  );
}
