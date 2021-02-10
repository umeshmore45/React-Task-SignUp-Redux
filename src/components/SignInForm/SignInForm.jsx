import { Button, TextField } from "@material-ui/core";

function SignInForm(props) {
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
        <form noValidate autoComplete="off" onSubmit={props.SignInSubmit}>
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
            type="submit"
            margin="normal"
            variant="contained"
            color="primary"
          >
            SignIn
          </Button>
        </form>
      </div>
    </div>
  );
}

export default SignInForm;
