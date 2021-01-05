import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    border: '1px solid green',
  },

  title: {
    fontFamily: 'montserrat',
    fontSize: '20pt',
    fontWeight: '700',
    marginBottom: '0.5rem'
  },

}));

export default function Result(props) {

  console.log(props.result);

  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Typography>{props.result.Title}</Typography>
    </div>
  )
}
