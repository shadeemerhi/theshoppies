import { useApplicationData } from './hooks/useApplicationData';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Search from './components/Search';
import Results from './components/Results';
import Nominations from './components/Nominations';


const useStyles = makeStyles((theme) => ({

  root: {
    padding: '100px',
    border: '1px solid red'
  }
}));

export default function App() {

  const classes = useStyles();

  const {
    searchResults,
    searchString,
    setSearchString,
    loading,
    setLoading,
  } = useApplicationData();
  
  console.log(searchResults);


  return (
    <Grid container className={classes.root}>
      <Grid item xs={12}>
        <Search 
          searchString={searchString} 
          setSearchString ={setSearchString}
          setLoading={setLoading}
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <Results searchResults={searchResults} searchString={searchString} loading={loading}/>
      </Grid>
      <Grid item xs={12} sm={6}>
        <Nominations />
      </Grid>
    </Grid>
  );
}
