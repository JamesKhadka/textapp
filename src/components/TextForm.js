import React, { useState } from "react";

export default function TextForm(props) {

  //convert text into upper case
  const handleUpClick = () => {
    //console.log("Upper case was clicked" + text);
    let newText = text.toUpperCase();
    setText(newText); //it change the text which already initialized
    //shows alert when text is transformed 
    props.showAlert("converted to UpperCase", "success");
  }

  //convert text into lower  case
  const handleLoClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    //shows alert when text is transformed 
    props.showAlert("converted to LowerCase", "success");
  }

  //clear all text
  const handleClearClick = () => {
    let newText = "";
    setText(newText);
    props.showAlert("Text is Cleared", "success");
  }

  //copy all text
  const handleCopyClick = () => {
    var text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    document.getSelection().removeAllRanges();
    props.showAlert("Copied to Clipboard", "success");

    // .then(() => {
    //   alert("Text copied to clipboard!");
    // })
    // .catch((err) => {
    //   console.error("Failed to copy text: ", err);
    // });
  }

  //remove extra spaces
  const handleExtraSpaceClick = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Extra space is Removed", "success");
  }




  const handleOnChange = (event) => {
    // console.log("on changed");
    setText(event.target.value);

  }

  const [text, setText] = useState(""); //help to change initialized state vanlue ( called hooks state)
  //in this syntax text have already have some string and setText helps to replace that string

  return (
    <>
      {/* style change the color of headind during switching to dark mode */}
      <div className="conrainer" style={{ color: props.mode === 'dark' ? 'white' : 'black' }} >
        <div>
          <h1>{props.heading}</h1>
          <div className="mb-3" >
            {/* background change's the color of text area during switching to dark mode */}
            <textarea
              className="form-control"
              value={text}
              onChange={handleOnChange} style={{ backgroundColor: props.mode === 'dark' ? '#363a76' : 'white', color: props.mode === 'dark' ? 'white' : 'black' }}
              id="myBox"
              rows="8"
            ></textarea>
          </div>
          {/* disabled help to disable butten if there is no text in textarea */}
          <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>
            <b> convert to upperCase</b>
          </button>
          <button disabled={text.length === 0} className="btn btn-info mx-1 my-1" onClick={handleLoClick}>
            <b>LConvert to lowercase </b>
          </button>

          <button disabled={text.length === 0} className="btn btn-danger mx-1 my-1" onClick={handleClearClick}>
            <b>clear Text </b>
          </button>
          <button disabled={text.length === 0} className="btn btn-success mx-1 my-1" onClick={handleCopyClick}>
            <b>copy Text </b>
          </button>
          <button disabled={text.length === 0} className="btn btn-success mx-1 my-1" onClick={handleExtraSpaceClick}>
            <b>Remove extra space </b>
          </button>
        </div>
      </div>
      {/* style change the color of headind during switching to dark mode */}
      <div className="container my-3" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
        <h1>your text summery</h1>

        {/* word and character counter */}
        {/* filter function helps to remove the empty array */}
        <p>
          {text.split(" ").filter((element) => { return element.length !== 0 }).length} words and {text.length} characters
        </p>

        {/*timer to read text*/}
        <p>{0.008 * text.split(" ").filter((element) => { return element.length !== 0 }).length} Minutes read</p>

        <h2>Preview</h2>
        <p>{text.length > 0 ? text : "Nothing  in textarea to preview "}</p>
      </div>
    </>
  );
}
