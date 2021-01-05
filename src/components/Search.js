import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    height: '400px',
    border: '1px solid green',
  },

  input: {
    fontSize: '12pt',
    fontFamily: 'Raleway',
    width: '100%',
    height: "1.3rem",
    border: 'none',
    borderBottom: "1px solid #d4d4d4",
    "&:focus": {
      outline: "none",
    },
    '&::placeholder': {
      fontSize: '12pt',
      fontFamily: 'Raleway',
      color: '#838383'

    }
  },

}));

export default function Search() {

  const classes = useStyles();
  return (
    <div className={classes.root}>
      <h1>Search component</h1>
    </div>
  )
}
