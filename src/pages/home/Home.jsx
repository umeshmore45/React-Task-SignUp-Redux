import { Button, CardMedia, makeStyles, Typography } from "@material-ui/core";
import { Link } from "react-router-dom";
import Header from "../../components/header/header";

const useStyles = makeStyles((theme) => ({
  container: {
    margin: "0",
    padding: "0",
    width: "100%",
    height: "100vh",
    backgroundColor: "#FEF9F3",
  },

  linkContainer: {
    marginLeft: "23vw",
    [theme.breakpoints.between("xs", "sm")]: {
      marginLeft: "7%",
    },
  },

  li: {
    textDecoration: "none",
  },

  link: {
    marginLeft: "5vh",
    height: "8vh",
    width: "40vh",
    [theme.breakpoints.between("xs", "sm")]: {
      marginTop: "5%",
      marginLeft: "12vh",
      height: "6vh",
      width: "30vh",
    },
  },

  image: {
    width: "40vw",
    height: "40vh",
    marginLeft: "55vh",
    marginTop: "5vh",
    [theme.breakpoints.between("xs", "sm")]: {
      marginLeft: "25%",
      width: "60vw",
    },
  },
}));

const Home = (props) => {
  const classes = useStyles();
  return (
    <div>
      <Header />
      <div className={classes.container}>
        <CardMedia
          className={classes.image}
          image="https://cdn.dribbble.com/users/2851002/screenshots/9667092/media/09648e273e248e7cfd22ade4010b2a6e.gif"
          title="home"
        />
        <div className={classes.linkContainer}>
          <Link className={classes.li} to="/signUp">
            <Button
              className={classes.link}
              variant="contained"
              color="primary"
            >
              <Typography varient="subtitle1" color="secondary">
                SignUp
              </Typography>
            </Button>
          </Link>

          <Link className={classes.li} to="/signIn">
            <Button
              className={classes.link}
              variant="contained"
              color="primary"
            >
              <Typography varient="subtitle1" color="secondary">
                SignIn
              </Typography>
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
