// import ClassicEditor from "@ckeditor/ckeditor5-editor-classic/src/classiceditor";
import { CKEditor } from "@ckeditor/ckeditor5-react";
// import HtmlEmbed from "@ckeditor/ckeditor5-html-embed/src/htmlembed";
import { Component } from "react";
// import ClassicEditor from "@ckeditor/ckeditor5-editor-classic/src/classiceditor";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import ReactHtmlParser from "react-html-parser";

class RichTextEditor extends Component {
  state = {
    addData: "",
    showData: false,
  };

  handleChange = (event, editor) => {
    const data = editor.getData();
    this.setState({
      addData: data,
    });
  };

  render() {
    console.log(this.state.addData);
    return (
      <div>
        <CKEditor
          style={{ height: "20vh", display: "inline" }}
          editor={ClassicEditor}
          data="<p>Entre Your Text Here</p>"
          config={{
            ckfinder: {
              uploadUrl: "http://localhost:5000/uploads",
            },
          }}
          onChange={this.handleChange}
        />
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
    );
  }
}

export default RichTextEditor;
