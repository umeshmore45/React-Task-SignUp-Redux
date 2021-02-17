import { Component } from "react";
import FroalaEditor from "react-froala-wysiwyg";
import FroalaEditorView from "react-froala-wysiwyg/FroalaEditorView";
//css plugins
import "froala-editor/css/froala_editor.pkgd.min.css";
import "froala-editor/css/froala_style.min.css";
import "froala-editor/css/plugins/code_view.min.css";
//js plugins
import "froala-editor/js/plugins.pkgd.min.js";
import "froala-editor/js/froala_editor.pkgd.min.js";
import "froala-editor/js/plugins/link.min.js";
import "froala-editor/js/plugins/image.min.js";
import "froala-editor/js/plugins/code_view.min.js";

class Froala extends Component {
  state = {
    model: "",
  };

  handleModelChange = (e) => {
    console.log(e);
    this.setState({
      model: e,
    });
  };

  render() {
    return (
      <div>
        <FroalaEditor
          tag="textarea"
          config={{
            attribution: false,
            placeholder: "Start typing...",
            toolbarButtons: {
              moreText: {
                buttons: [
                  "bold",
                  "italic",
                  "underline",
                  "strikeThrough",
                  "subscript",
                  "superscript",
                  "fontFamily",
                  "fontSize",
                  "textColor",
                  "backgroundColor",
                  "inlineClass",
                  "inlineStyle",
                  "clearFormatting",
                ],
              },
              moreParagraph: {
                buttons: [
                  "alignLeft",
                  "alignCenter",
                  "formatOLSimple",
                  "alignRight",
                  "alignJustify",
                  "formatOL",
                  "formatUL",
                  "paragraphFormat",
                  "paragraphStyle",
                  "lineHeight",
                  "outdent",
                  "indent",
                  "quote",
                ],
              },
              moreRich: {
                buttons: [
                  "insertLink",
                  "insertImage",
                  "insertVideo",
                  "insertTable",
                  "emoticons",
                  "fontAwesome",
                  "specialCharacters",
                  "embedly",
                  "insertFile",
                  "insertHR",
                ],
              },
              moreMisc: {
                buttons: [
                  "undo",
                  "redo",
                  "fullscreen",
                  "print",
                  "getPDF",
                  "spellChecker",
                  "selectAll",
                  "html",
                  "help",
                ],
                align: "right",
                buttonsVisible: 2,
              },
            },
            pluginsEnabled: [
              "table",
              "spell",
              "quote",
              "save",
              "quickInsert",
              "paragraphFormat",
              "paragraphStyle",
              "help",
              "draggable",
              "align",
              "link",
              "lists",
              "file",
              "image",
              "emoticons",
              "url",
              "video",
              "embedly",
              "colors",
              "entities",
              "inlineClass",
              "inlineStyle",
              "codeBeautif ",
              "spellChecker",
              "imageTUI",
              "fullscreen",
              "codeBeautifier",
              "codeView",
            ],
            // quickInsertEnabled: false,
            // fullPage: true,
            // htmlAllowedTags: [".*"],
            // htmlRemoveTags: ["script"],
            // htmlUntouched: true,
            // table_grid: false,
          }}
          model={this.state.model}
          onModelChange={this.handleModelChange}
        />
        <strong>Read only editor:</strong>
        <FroalaEditorView model={this.state.model} />
      </div>
    );
  }
}

export default Froala;
