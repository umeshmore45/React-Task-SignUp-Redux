import { Button, makeStyles } from "@material-ui/core";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: "3vw",
      height: "8vh",
      width: "30vh",
    },
  },
}));

const Home = (props) => {
  const classes = useStyles();
  return (
    <div>
      <Link className={classes.root} to="/signUp">
        <Button margin="normal" variant="contained" color="primary">
          SignUp
        </Button>
      </Link>

      <Link className={classes.root} to="/signIn">
        <Button margin="normal" variant="contained" color="primary">
          SignIn
        </Button>
      </Link>
    </div>
  );
};

export default Home;
