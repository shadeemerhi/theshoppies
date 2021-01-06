import { useApplicationData } from './hooks/useApplicationData';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Search from './components/Search';
import Results from './components/Results';
import Nominations from './components/Nominations';
import { Typography } from '@material-ui/core';


const useStyles = makeStyles((theme) => ({

  root: {
    display: 'flex',
    justifyContent: 'center',
    padding: '20px',
    [theme.breakpoints.up('sm')]: {
      padding: '50px'
    },
    [theme.breakpoints.up('md')]: {
      padding: '80px'
    }
  },

  title: {
    fontFamily: 'montserrat',
    fontSize: '28pt',
    fontWeight: '700',
    borderBottom: '2px solid #F77737'
  }
}));

export default function App() {

  const classes = useStyles();

  const {
    searchResults,
    searchString,
    loading,
    nominations,
    setSearchString,
    setLoading,
    setNominations
  } = useApplicationData();

  return (
    <Grid container className={classes.root}>
      <Typography className={classes.title}>The Shoppies</Typography>
      <Grid item xs={12}>
        <Search 
          searchString={searchString} 
          setSearchString ={setSearchString}
          setLoading={setLoading}
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <Results 
          searchResults={searchResults} 
          searchString={searchString} 
          setNominations={setNominations}
          nominations={nominations}
          loading={loading}
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <Nominations 
          nominations={nominations} 
          setNominations={setNominations}
        />
      </Grid>
    </Grid>
  );
}
