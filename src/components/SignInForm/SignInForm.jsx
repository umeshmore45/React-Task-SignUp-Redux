import { Button, CardMedia, makeStyles, TextField } from "@material-ui/core";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
    height: "100vh",
  },

  img: {
    width: "45%",
  },

  logInContainer: {
    width: "50%",
    height: "99vh",
    // border: "1px solid red",
  },

  form: {
    // border: "1px solid black",
    textAlign: "centre",
    width: "80%",
    margin: "auto",
    marginTop: "30vh",
    height: "40vh",
  },

  email: {
    width: "50%",
    marginLeft: "20%",
  },

  password: {
    width: "50%",
    marginTop: "1%",
    marginLeft: "20%",
  },

  button: {
    marginTop: "1%",
    marginLeft: "25%",
    width: "20%",
  },
  li: {
    textDecoration: "none",
  },
  btn: {
    marginTop: "1%",
    marginLeft: "3%",
  },
}));
function SignInForm(props) {
  const classes = useStyles();
  return (
    <div>
      <div className={classes.container}>
        <CardMedia
          className={classes.img}
          image="https://cdn.dribbble.com/users/1292088/screenshots/14802334/media/c58dcd369416e4d6e2bf2727f8bd821f.jpg?compress=1&resize=800x600"
          title="log"
        />
        <div className={classes.logInContainer}>
          <form
            className={classes.form}
            noValidate
            autoComplete="off"
            onSubmit={props.SignInSubmit}
          >
            <TextField
              className={classes.email}
              margin="normal"
              type="email"
              id="outlined-email"
              label="Email"
              variant="outlined"
              onChange={props.updateEmail}
              required
            />
            <br />
            <TextField
              className={classes.password}
              margin="normal"
              type="password"
              id="outlined-password"
              label="Password"
              variant="outlined"
              onChange={props.updatePassword}
              required
            />
            <br />
            <Button
              className={classes.button}
              type="submit"
              margin="normal"
              variant="contained"
              color="primary"
            >
              SignIn
            </Button>
            <Link className={classes.li} to="/">
              <Button
                className={classes.btn}
                margin="normal"
                variant="contained"
                color="primary"
              >
                BACK
              </Button>
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SignInForm;

//  {
//    /* <form onSubmit={props.SignInSubmit}>
//           <label htmlFor="SignInEmail">
//             Email<span>* </span>{" "}
//           </label>
//           <input
//             type="email"
//             name="SignInEmail"
//             onChange={props.updateEmail}
//             placeholder="random@gmail.com"
//             required
//           />
//           <label htmlFor="SignInPassword">
//             Password<span>* </span>{" "}
//           </label>
//           <input
//             type="password"
//             name="SignInPassword"
//             onChange={props.updatePassword}
//             placeholder="Pass@123"
//             required
//           />

//           <button type="submit">Register</button>
//         </form> */
//  }
