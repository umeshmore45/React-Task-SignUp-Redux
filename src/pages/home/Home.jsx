import { Link } from "react-router-dom";

const Home = (props) => {
  console.log(props);
  return (
    <div>
      <h1>Home</h1>

      <Link to="/signUp">
        <button>SignUp</button>
      </Link>

      <Link to="/signIn">
        <button>SignIn</button>
      </Link>
    </div>
  );
};

export default Home;
