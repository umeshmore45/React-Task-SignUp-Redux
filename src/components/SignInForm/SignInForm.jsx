function SignInForm(props) {
  return (
    <div>
      <div>
        <form onSubmit={props.SignInSubmit}>
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
        </form>
      </div>
    </div>
  );
}

export default SignInForm;
