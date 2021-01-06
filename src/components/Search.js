import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    margin: '1rem',
    padding: '1rem',
    borderRadius: '20px',
    boxShadow: "0px 2px 5px 0.5px #E3E3E3",
  },

  title: {
    fontFamily: 'montserrat',
    fontSize: '20pt',
    fontWeight: '700',
    marginBottom: '0.5rem',
    borderBottom: '2px solid #F77737',
    width: '205px'
  },

  inputContainer: {
    display: 'flex',
    border: '1px solid #E3E3E3',
    padding: '3px',
    borderRadius: '20px',
    alignItems: 'center',
  },

  input: {
    fontSize: '12pt',
    width: '100%',
    fontFamily: 'montserrat',
    height: '1.5rem',
    border: 'none',
    borderRadius: '20px',
    "&:focus": {
      outline: "none",
    },
    '&::placeholder': {
      fontSize: '12pt',
      color: '#838383'

    }
  }
}));

export default function Search(props) {

  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Typography className={classes.title}>Search Movies</Typography>
      <div className={classes.inputContainer}>
        <SearchIcon />
        <input
          className={classes.input}
          type="text"
          placeholder="Enter a movie title"
          value={props.searchString}
          onChange={event => {
            props.setLoading(true);
            props.setSearchString(event.target.value)
          }}
        />
      </div>
    </div>
  )
}
