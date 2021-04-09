import { makeStyles, TextField } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  conatiner: {
    position: "absolute",
    marginTop: "0%",
    marginLeft: "63%",
    width: "30%",
    [theme.breakpoints.between("xs", "sm")]: {
      marginTop: "30%",
      marginLeft: "23%",
      width: "75%",
    },
  },
  input: {
    width: "80%",
  },
}));

function SignUpOtpForm(props) {
  const classes = useStyles();
  return (
    <div>
      <form
        className={classes.conatiner}
        noValidate
        autoComplete="off"
        onSubmit={props.SignUpSubmit}
      >
        <TextField
          className={classes.input}
          margin="normal"
          type="text"
          id="outlined-Otp"
          label="OTP"
          variant="outlined"
          onChange={props.updateOtp}
          required
        />
      </form>
    </div>
  );
}

export default SignUpOtpForm;
