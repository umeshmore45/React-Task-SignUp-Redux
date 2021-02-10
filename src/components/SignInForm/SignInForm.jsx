import { Button, makeStyles, TextField } from "@material-ui/core";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: "2vw",
      width: "80vh",
    },
  },
  button: {
    marginTop: "5.5vh",
  },
}));
function SignInForm(props) {
  const classes = useStyles();
  return (
    <div>
      <div>
        {/* <form onSubmit={props.SignInSubmit}>
          <label htmlFor="SignInEmail">
            Email<span>* </span>{" "}
          </label>
          <input
            type="email"
            name="SignInEmail"
            onChange={props.updateEmail}
            placeholder="random@gmail.com"
            required
          />
          <label htmlFor="SignInPassword">
            Password<span>* </span>{" "}
          </label>
          <input
            type="password"
            name="SignInPassword"
            onChange={props.updatePassword}
            placeholder="Pass@123"
            required
          />

          <button type="submit">Register</button>
        </form> */}
        <form
          className={classes.root}
          noValidate
          autoComplete="off"
          onSubmit={props.SignInSubmit}
        >
          <TextField
            margin="normal"
            type="email"
            id="outlined-email"
            label="Email"
            variant="outlined"
            onChange={props.updateEmail}
            required
          />
          <TextField
            margin="normal"
            type="password"
            id="outlined-password"
            label="Password"
            variant="outlined"
            onChange={props.updatePassword}
            required
          />
          <Button
            className={classes.button}
            type="submit"
            margin="normal"
            variant="contained"
            color="primary"
          >
            SignIn
          </Button>
          <Link className={classes.root} to="/">
            <Button margin="normal" variant="contained" color="primary">
              BACK
            </Button>
          </Link>
        </form>
      </div>
    </div>
  );
}

export default SignInForm;
