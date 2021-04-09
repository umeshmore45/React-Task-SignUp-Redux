import { Component } from "react";
import FroalaEditor from "react-froala-wysiwyg";
import FroalaEditorView from "react-froala-wysiwyg/FroalaEditorView";
//css plugins
import "froala-editor/css/froala_editor.pkgd.min.css";
//style
import "froala-editor/css/froala_style.min.css";
//code view
import "froala-editor/css/plugins/code_view.min.css";
//charCounter
import "froala-editor/css/plugins/char_counter.min.css";
//colors
import "froala-editor/css/plugins/colors.min.css";
//Dragable
import "froala-editor/css/plugins/draggable.min.css";
//embedly
import "froala-editor/css/third_party/embedly.min.css";
//Emoticons
import "froala-editor/css/plugins/emoticons.min.css";
//file
import "froala-editor/css/plugins/file.min.css";
//fullScreen
import "froala-editor/css/plugins/fullscreen.min.css";
//image-Manger
import "froala-editor/css/plugins/image_manager.min.css";
//image-tui
import "froala-editor/css/third_party/image_tui.min.css";
//image
import "froala-editor/css/plugins/image.min.css";

//line-brake
import "froala-editor/css/plugins/line_breaker.min.css";
//inserQuik
import "froala-editor/css/plugins/quick_insert.min.css";
//Special Characters
import "froala-editor/css/plugins/special_characters.min.css";
//spell
import "froala-editor/css/third_party/spell_checker.min.css";
//table
import "froala-editor/css/plugins/table.min.css";
//video
import "froala-editor/css/plugins/video.min.css";
//fontAwesome
import "froala-editor/css/third_party/font_awesome.min.css";
//
//
//js plugins
//
//
import "froala-editor/js/plugins.pkgd.min.js";
//font-family
import "froala-editor/js/plugins/font_family.min.js";
//froala editor
import "froala-editor/js/froala_editor.pkgd.min.js";
//link
import "froala-editor/js/plugins/link.min.js";
//image
import "froala-editor/js/plugins/image.min.js";
//code view
import "froala-editor/js/plugins/code_view.min.js";
//algin
import "froala-editor/js/plugins/align.min.js";
//charCounter
import "froala-editor/js/plugins/char_counter.min.js";
//code beautifier
import "froala-editor/js/plugins/code_beautifier.min.js";
//colors
import "froala-editor/js/plugins/colors.min.js";
//Draggable
import "froala-editor/js/plugins/draggable.min.js";
//embedly
import "froala-editor/js/third_party/embedly.min.js";
//Emoticons
import "froala-editor/js/plugins/emoticons.min.js";
//entities
import "froala-editor/js/plugins/entities.min.js";
//file
import "froala-editor/js/plugins/file.min.js";
//Font Awesome
import "font-awesome/css/font-awesome.css";
import "froala-editor/js/third_party/font_awesome.min.js";
//Font Family
import "froala-editor/js/plugins/font_family.min.js";
//Font Size
import "froala-editor/js/plugins/font_size.min.js";
//Fullscreen
import "froala-editor/js/plugins/fullscreen.min.js";
//help
import "froala-editor/js/plugins/help.min.js";
//Image Manager
import "froala-editor/js/plugins/image_manager.min.js";
//Image Tui
import "froala-editor/js/third_party/image_tui.min.js";
//Inline Class
import "froala-editor/js/plugins/inline_class.min.js";
//Inline Style
import "froala-editor/js/plugins/inline_style.min.js";
//LineBrak
import "froala-editor/js/plugins/line_breaker.min.js";
//line-Height
import "froala-editor/js/plugins/line_height.min.js";
//Link
import "froala-editor/js/plugins/link.min.js";
//lists
import "froala-editor/js/plugins/lists.min.js";
//Paragraph Format
import "froala-editor/js/plugins/paragraph_format.min.js";
//Paragraph Style
import "froala-editor/js/plugins/paragraph_style.min.js";
//print
import "froala-editor/js/plugins/print.min.js";
//Quick Insert
import "froala-editor/js/plugins/quick_insert.min.js";
//Quote
import "froala-editor/js/plugins/quote.min.js";
//Save
import "froala-editor/js/plugins/save.min.js";
//Special Characters
import "froala-editor/js/plugins/special_characters.min.js";
//Spell Checker
import "froala-editor/js/third_party/spell_checker.min.js";
//Table
import "froala-editor/js/plugins/table.min.js";
//url
import "froala-editor/js/plugins/url.min.js";
//video
import "froala-editor/js/plugins/video.min.js";
//Word Paste
import "froala-editor/js/plugins/word_paste.min.js";
//themes
import "froala-editor/css/themes/dark.min.css";

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
              "spellChecker",
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
              "fontFamily",
              "imageManager",
              "charCounter",
              "colors",
              "fontAwesome",
              "fontSize",
              "inlineBreaker",
              "lineHeight",
              "print",
              "wordPaste",
            ],
            imageUploadParam: "upload",
            imageUploadURL: `${process.env.REACT_APP_BASE_URL_IMG}/uploads`,
            imageUploadMethod: "POST",
            imageAllowedTypes: ["jpeg", "jpg", "png", "gif"],
            events: {
              "image.uploaded": function (response) {
                let img = JSON.parse(response);
                this.image.insert(img.url, false, null, this.image.get(), img);
                return false;
              },
            },
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
