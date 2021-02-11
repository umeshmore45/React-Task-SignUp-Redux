import { Button, makeStyles, TextField } from "@material-ui/core";
import { Link } from "react-router-dom";
const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: "2vw",
      width: "60vh",
    },
  },
  li: {
    textDecoration: "none",
  },
}));

function SignUpForm(props) {
  const classes = useStyles();
  return (
    <div>
      <div>
        {/* <form onSubmit={props.SignUpSubmit}>
          <label htmlFor="SignUpName">
            Name<span>* </span>{" "}
          </label>
          <input
            type="text"
            name="SignUpName"
            onChange={props.updateName}
            placeholder="Name"
            required
          />

          <label htmlFor="SignUpEmail">
            Email<span>* </span>{" "}
          </label>
          <input
            type="email"
            name="SignUpEmail"
            onChange={props.updateEmail}
            placeholder="random@gmail.com"
            required
          />

          <label htmlFor="SignUpPhone">
            Phone<span>* </span>{" "}
          </label>
          <input
            type="tel"
            name="SignUpPhone"
            onChange={props.updatePhone}
            placeholder="1644"
            required
          />
          <label htmlFor="SignUpPassword">
            Password<span>* </span>{" "}
          </label>
          <input
            type="password"
            name="SignUpPassword"
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
          onSubmit={props.SignUpSubmit}
        >
          <TextField
            margin="normal"
            type="text"
            id="outlined-name"
            label="Name"
            variant="outlined"
            onChange={props.updateName}
            required
          />
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
            type="text"
            id="outlined-phone"
            label="Phone"
            variant="outlined"
            onChange={props.updatePhone}
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
            type="submit"
            margin="normal"
            variant="contained"
            color="primary"
          >
            Register
          </Button>
          <Link className={classes.li} to="/">
            <Button margin="normal" variant="contained" color="primary">
              BACK
            </Button>
          </Link>
        </form>
      </div>
    </div>
  );
}

export default SignUpForm;
