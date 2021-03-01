import {
  Button,
  CardMedia,
  makeStyles,
  TextField,
  Typography,
} from "@material-ui/core";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
    height: "100vh",
    [theme.breakpoints.between("xs", "sm")]: {
      width: "100%",
      height: "100vh",
      flexDirection: "column",
      justifyContent: "none",
      // border: "2px solid red",
    },
  },

  img: {
    width: "45%",
    [theme.breakpoints.between("xs", "sm")]: {
      width: "100%",
      height: "70vh",
      margin: "0",
      marginTop: "5vh",
    },
  },

  logInContainer: {
    width: "50%",
    height: "99vh",
    // border: "1px solid red",
    [theme.breakpoints.between("xs", "sm")]: {
      width: "100%",
      margin: "0",
      // height: "50vh",
    },
  },

  form: {
    // border: "1px solid black",
    textAlign: "centre",
    width: "80%",
    margin: "auto",
    marginTop: "30vh",
    height: "40vh",
    [theme.breakpoints.between("xs", "sm")]: {
      marginTop: "5%",
    },
  },

  email: {
    width: "50%",
    marginLeft: "20%",
    [theme.breakpoints.between("xs", "sm")]: {
      width: "70%",
      marginLeft: "15%",
    },
  },

  title: {
    marginLeft: "25%",
    [theme.breakpoints.between("xs", "sm")]: {
      marginLeft: "15%",
    },
  },

  password: {
    width: "50%",
    marginTop: "1%",
    marginLeft: "20%",
    [theme.breakpoints.between("xs", "sm")]: {
      width: "70%",
      marginLeft: "15%",
    },
  },

  button: {
    marginTop: "1%",
    marginLeft: "25%",
    width: "20%",
    [theme.breakpoints.between("xs", "sm")]: {
      width: "30%",
      marginLeft: "20%",
    },
  },
  li: {
    textDecoration: "none",
  },
  btn: {
    marginTop: "1%",
    marginLeft: "3%",
    [theme.breakpoints.between("xs", "sm")]: {
      marginLeft: "2%",
    },
  },
  sub: {
    marginLeft: "33%",
    [theme.breakpoints.between("xs", "sm")]: {
      marginLeft: "25%",
    },
  },

  create: {
    margin: "0",
    marginLeft: "35%",
    textDecoration: "none",
    [theme.breakpoints.between("xs", "sm")]: {
      marginLeft: "27%",
    },
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
            <Typography
              className={classes.title}
              variant="subtitle1"
              color="primary"
              id="title"
            >
              SIGNIN TO S H O P P I N G
            </Typography>
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
            <Typography className={classes.sub} varient="subtitle2">
              New to Shopping ?
            </Typography>
            <Link className={classes.create} to="/signUp">
              Create Account
            </Link>

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
