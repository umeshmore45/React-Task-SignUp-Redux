import { makeStyles, TextField } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: "2vw",
      width: "60vh",
    },
  },
}));

function SignUpOtpForm(props) {
  const classes = useStyles();
  return (
    <div>
      {/* <form onSubmit={props.SignUpSubmit}>
        <label htmlFor="SignUpOtp">
          OTP<span>* </span>{" "}
        </label>
        <input
          type="text"
          name="SignUpOtp"
          onChange={props.updateOtp}
          placeholder="145268"
          required
        />
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
