import { IconButton, makeStyles, Toolbar, Typography } from "@material-ui/core";
import PersonOutlineIcon from "@material-ui/icons/PersonOutline";
import { Link } from "react-router-dom";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
// import { useState } from "react";

// const useStyles = makeStyles((theme) => ({
//   container: {
//     margin: "0px",
//     backgroundColor: theme.palette.primary.Dark
//       ? theme.palette.primary.dark
//       : theme.palette.primary.light,
//     height: "17vh",
//     width: "100%",
//   },

//   logoContainer: {
//     display: "flex",
//     flexDirection: "row",
//     justifyContent: "space-around",
//   },

//   name: {
//     // border: "2px solid red",
//     margin: "0",
//     width: "95%",
//     textAlign: "center",
//   },

//   li: {
//     textDecoration: "none",
//   },

//   nav: {
//     width: "50%",
//     margin: "auto",
//     marginTop: "0px",
//     display: "flex",
//     flexDirection: "row",
//     justifyContent: "space-between",
//   },
// }));

const Header = (props) => {
  // const [Dark, setDark] = useState(false);

  const useStyles = makeStyles((theme) => ({
    container: {
      margin: "0px",
      // backgroundColor: Dark
      //   ? theme.palette.primary.dark
      //   : theme.palette.primary.light,
      background: theme.palette.primary.light,
      height: "17vh",
      width: "100%",
      color: "#fff",
    },

    logoContainer: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-around",
    },

    name: {
      // border: "2px solid red",
      margin: "0",
      width: "95%",
      textAlign: "center",
    },

    li: {
      textDecoration: "none",
    },

    nav: {
      width: "50%",
      margin: "auto",
      marginTop: "0px",
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
    },
  }));

  const classes = useStyles();
  return (
    <div className={classes.container}>
      <Toolbar className={classes.logoContainer}>
        <Typography variant="h5" color="primary" className={classes.name}>
          S H O P P I N G
        </Typography>
        <IconButton>
          <Link to="/SignIn">
            <PersonOutlineIcon color="primary" />
          </Link>
        </IconButton>
        <IconButton>
          <Link to="signUp">
            <AddShoppingCartIcon color="primary" />
          </Link>
        </IconButton>
      </Toolbar>
      <Toolbar component="nav" className={classes.nav} variant="dense">
        <Link className={classes.li} to="/">
          <Typography variant="subtitle1" color="primary">
            Women
          </Typography>
        </Link>
        <Link className={classes.li} to="/">
          <Typography variant="subtitle1" color="primary">
            Men
          </Typography>
        </Link>
        <Link className={classes.li} to="/">
          <Typography variant="subtitle1" color="primary">
            Home & Decor
          </Typography>
        </Link>
        <Link className={classes.li} to="/">
          <Typography variant="subtitle1" color="primary">
            Kids
          </Typography>
        </Link>
        <Link className={classes.li} to="/">
          <Typography variant="subtitle1" color="primary">
            Electronics
          </Typography>
        </Link>
        {/* <button
          onClick={() => {
            if (!Dark) {
              setDark(true);
            } else {
              setDark(false);
            }
          }}
        >
          theme
        </button> */}
      </Toolbar>
    </div>
  );
};

export default Header;
