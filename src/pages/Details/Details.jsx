import { Component } from "react";
import { connect } from "react-redux";
import { getCookies, removeCookies } from "../../helper/Cookies";
import authActionGenretor from "../../redux/action/authActionGenretor";
import { authActionType } from "../../redux/constant/authActionType";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import ReactHtmlParser from "react-html-parser";

class Details extends Component {
  state = {
    addData: "",
    showData: false,
  };

  componentDidMount = () => {
    this.props.GetDetails(getCookies());
  };

  handleChange = (event, editor) => {
    const data = editor.getData();
    this.setState({
      addData: data,
    });
  };

  render() {
    return (
      <div>
        {this.props.state.success ? (
          <div>
            <button onClick={this.componentWillUnmount}>SignOut</button>
            <p>Hello {this.props.state.user.name}</p>
            <h1>DashBoard</h1>

            <CKEditor
              editor={ClassicEditor}
              data={this.state.addData}
              onChange={this.handleChange}
            />
            <div>
              <button
                onClick={() => {
                  if (this.state.showData === false) {
                    this.setState({
                      showData: true,
                    });
                  } else {
                    this.setState({
                      showData: false,
                    });
                  }
                }}
              >
                {this.state.showData ? "CloseData" : "ShowData"}
              </button>
              <div>
                {this.state.showData ? ReactHtmlParser(this.state.addData) : ""}
              </div>
            </div>
          </div>
        ) : (
          <p>LOading... </p>
        )}
      </div>
    );
  }

  componentWillUnmount = (event) => {
    removeCookies();
    this.props.history.push({
      pathname: "/",
      state: "",
    });
  };
}
const mapStateToProps = (state) => {
  return {
    state: state.authReducer.userDetail,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    GetDetails: (token) => {
      dispatch(authActionGenretor(authActionType.GETUSER, { token }));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Details);
