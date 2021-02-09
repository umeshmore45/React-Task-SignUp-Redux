function SignUpOtpForm(props) {
  return (
    <div>
      <form onSubmit={props.SignUpSubmit}>
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
      </form>
    </div>
  );
}

export default SignUpOtpForm;
