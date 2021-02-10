import { Button } from "@material-ui/core";
import { Link } from "react-router-dom";

const Home = (props) => {
  return (
    <div>
      <h1>Home</h1>

      <Link to="/signUp">
        <Button margin="normal" variant="contained" color="primary">
          SignUp
        </Button>
      </Link>

      <Link to="/signIn">
        <Button margin="normal" variant="contained" color="primary">
          SignIn
        </Button>
      </Link>
    </div>
  );
};

export default Home;
