function SignUpForm(props) {
  return (
    <div>
      <div>
        <form onSubmit={props.SignUpSubmit}>
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
          <label htmlFor="SignUpPhone">
            Password<span>* </span>{" "}
          </label>
          <input
            type="password"
            name="SignUpPhone"
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

export default SignUpForm;
